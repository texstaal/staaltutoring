"use client";

import { useRef, useEffect, useState, useCallback } from "react";

/* ── helpers ────────────────────────────────────────────────────────────────── */
function fmt(s: number) {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

/* ── icons ──────────────────────────────────────────────────────────────────── */
const PlayIcon = () => (
  <svg className="w-5 h-5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg className="w-5 h-5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1.5" />
    <rect x="14" y="4" width="4" height="16" rx="1.5" />
  </svg>
);
const SkipBackIcon = () => (
  <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.85" />
  </svg>
);
const SkipFwdIcon = () => (
  <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-.49-3.85" />
  </svg>
);
const VolumeIcon = () => (
  <svg className="w-5 h-5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);
const MuteIcon = () => (
  <svg className="w-5 h-5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);
const FullscreenIcon = () => (
  <svg className="w-5 h-5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);
const ExitFullscreenIcon = () => (
  <svg className="w-5 h-5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" />
    <line x1="10" y1="14" x2="3" y2="21" /><line x1="21" y1="3" x2="14" y2="10" />
  </svg>
);

/* ── Bunny Stream iframe player ─────────────────────────────────────────────── */
function BunnyPlayer({ src }: { src: string }) {
  return (
    <div className="video-wrapper relative w-full rounded-2xl overflow-hidden bg-black aspect-video select-none shadow-sm">
      <iframe
        src={`${src}?autoplay=false&preload=false&responsive=true`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10" aria-hidden="true">
        <p
          className="text-white/20 font-semibold text-sm sm:text-base tracking-widest uppercase rotate-[-20deg] select-none whitespace-nowrap"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
        >
          Confidential – Do not share
        </p>
      </div>
    </div>
  );
}

/* ── component ──────────────────────────────────────────────────────────────── */
export default function VideoPlayer({ src }: { src: string }) {
  // Bunny Stream embed URLs → use iframe player
  if (src.includes("mediadelivery.net") || src.includes("b-cdn.net")) {
    return <BunnyPlayer src={src} />;
  }

  const videoRef      = useRef<HTMLVideoElement>(null);
  const containerRef  = useRef<HTMLDivElement>(null);
  const hideTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying,    setIsPlaying]    = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime,  setCurrentTime]  = useState(0);
  const [duration,     setDuration]     = useState(0);
  const [isMuted,      setIsMuted]      = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [bufEnd,       setBufEnd]       = useState(0);

  /* ── control visibility ──────────────────────────────────────────────────── */
  const resetHide = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setShowControls(true);
    hideTimerRef.current = setTimeout(() => {
      if (!videoRef.current?.paused) setShowControls(false);
    }, 3000);
  }, []);

  /* ── actions ─────────────────────────────────────────────────────────────── */
  function skip(sec: number) {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(isFinite(v.duration) ? v.duration : 0, v.currentTime + sec));
  }

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {}); else v.pause();
  }

  function toggleFullscreen() {
    const c = containerRef.current;
    if (!c) return;
    if (!document.fullscreenElement) c.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
  }

  /* ── single click = play/pause, double click = fullscreen ────────────────── */
  function handleAreaClick() {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      toggleFullscreen();
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickTimerRef.current = null;
        togglePlay();
      }, 250);
    }
  }

  /* ── seek on progress bar click ──────────────────────────────────────────── */
  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * duration;
  }

  /* ── seek on progress bar touch (mobile) ────────────────────────────────── */
  function handleTouchSeek(e: React.TouchEvent<HTMLDivElement>) {
    e.stopPropagation(); // don't bubble to click-capture layer
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect  = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const pct   = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    v.currentTime = pct * duration;
    resetHide();
  }

  /* ── keyboard (capture phase overrides browser defaults) ─────────────────── */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const c = containerRef.current;
      const v = videoRef.current;
      if (!v || !c) return;
      const focused = c.contains(document.activeElement) || document.activeElement === v;
      const inFS    = document.fullscreenElement === c;
      if (!focused && !inFS) return;
      if (e.key === "ArrowLeft")           { e.preventDefault(); e.stopImmediatePropagation(); skip(-5); }
      else if (e.key === "ArrowRight")     { e.preventDefault(); e.stopImmediatePropagation(); skip(5);  }
      else if (e.key === " " || e.key === "k") { e.preventDefault(); togglePlay(); }
      else if (e.key === "f")              { e.preventDefault(); toggleFullscreen(); }
      else if (e.key === "m")              { e.preventDefault(); toggleMute(); }
    }
    document.addEventListener("keydown", onKey, { capture: true });
    return () => document.removeEventListener("keydown", onKey, { capture: true });
  }, []);

  /* ── fullscreen redirect (in case browser fullscreens the <video> directly) ─ */
  useEffect(() => {
    function onChange() {
      const c = containerRef.current;
      const v = videoRef.current;
      setIsFullscreen(document.fullscreenElement === c);
      if (document.fullscreenElement === v) {
        document.exitFullscreen()
          .then(() => c?.requestFullscreen())
          .catch(() => {});
      }
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  /* ── video events ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay     = () => { setIsPlaying(true); resetHide(); };
    const onPause    = () => { setIsPlaying(false); setShowControls(true); if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
    const onTime     = () => { setCurrentTime(v.currentTime); if (v.buffered.length) setBufEnd(v.buffered.end(v.buffered.length - 1)); };
    const onMeta     = () => setDuration(v.duration);
    const onVolume   = () => setIsMuted(v.muted);
    v.addEventListener("play",            onPlay);
    v.addEventListener("pause",           onPause);
    v.addEventListener("timeupdate",      onTime);
    v.addEventListener("loadedmetadata",  onMeta);
    v.addEventListener("volumechange",    onVolume);
    return () => {
      v.removeEventListener("play",           onPlay);
      v.removeEventListener("pause",          onPause);
      v.removeEventListener("timeupdate",     onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("volumechange",   onVolume);
    };
  }, [resetHide]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufPct   = duration > 0 ? (bufEnd    / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="video-wrapper relative w-full rounded-2xl overflow-hidden bg-black aspect-video select-none shadow-sm"
      onMouseMove={resetHide}
      onMouseEnter={resetHide}
      onTouchStart={resetHide}
      style={{ cursor: showControls ? "default" : "none" }}
    >
      {/* Video — no native controls */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        onContextMenu={(e) => e.preventDefault()}
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Click-capture layer (z-10): single = play/pause, double = fullscreen.
          Lives below the controls overlay (z-30) so control clicks are unaffected. */}
      <div
        className="absolute inset-0 z-10"
        onClick={handleAreaClick}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Watermark (z-20, pointer-events-none) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center" aria-hidden="true">
        <p
          className="text-white/20 font-semibold text-sm sm:text-base tracking-widest uppercase rotate-[-20deg] select-none whitespace-nowrap"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
        >
          Confidential – Do not share
        </p>
      </div>

      {/* Controls overlay (z-30) */}
      <div
        className={`absolute bottom-0 inset-x-0 z-30 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Gradient bg */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="relative px-3 sm:px-4 pb-3 sm:pb-3 space-y-1 sm:space-y-2.5">

          {/* ── Progress bar ──────────────────────────────────────────────── */}
          {/* Tall invisible hit area for easy touch targeting */}
          <div
            className="group relative flex items-center cursor-pointer py-2 sm:py-1.5"
            onClick={handleSeek}
            onTouchStart={handleTouchSeek}
            onTouchMove={handleTouchSeek}
          >
            {/* Visual track */}
            <div className="relative w-full h-1 sm:group-hover:h-1.5 transition-all duration-150">
              <div className="absolute inset-0 bg-white/20 rounded-full" />
              <div className="absolute inset-y-0 left-0 bg-white/30 rounded-full" style={{ width: `${bufPct}%` }} />
              <div className="absolute inset-y-0 left-0 bg-[#4b58ff] rounded-full" style={{ width: `${progress}%` }} />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
          </div>

          {/* ── Button row ────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between">

            {/* Left: play, skip, volume, time */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}
                className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              <button onClick={() => skip(-5)} aria-label="Skip back 5 seconds"
                className="flex items-center gap-0.5 px-2 h-10 sm:h-8 text-white text-xs sm:text-[11px] font-bold hover:text-white/70 transition-colors">
                <SkipBackIcon /><span>5</span>
              </button>

              <button onClick={() => skip(5)} aria-label="Skip forward 5 seconds"
                className="flex items-center gap-0.5 px-2 h-10 sm:h-8 text-white text-xs sm:text-[11px] font-bold hover:text-white/70 transition-colors">
                <span>5</span><SkipFwdIcon />
              </button>

              <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}
                className="w-10 h-10 sm:w-7 sm:h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors">
                {isMuted ? <MuteIcon /> : <VolumeIcon />}
              </button>

              <span className="text-white/70 text-[11px] font-medium tabular-nums ml-1 whitespace-nowrap hidden sm:inline">
                {fmt(currentTime)} / {fmt(duration)}
              </span>
            </div>

            {/* Right: time (mobile) + fullscreen */}
            <div className="flex items-center gap-1">
              <span className="text-white/70 text-[11px] font-medium tabular-nums whitespace-nowrap sm:hidden">
                {fmt(currentTime)}
              </span>
              <button onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="w-10 h-10 sm:w-7 sm:h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors">
                {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
