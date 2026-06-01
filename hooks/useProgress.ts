"use client";
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "staal_progress";

type ProgressMap = Record<string, string[]>; // e.g. { "nl/finance2": ["lu1", "lu3"] }

function read(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function write(map: ProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // localStorage not available (SSR, private mode, etc.)
  }
}

export function useProgress(lang: string, courseId: string) {
  const key = `${lang}/${courseId}`;
  const [completed, setCompleted] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCompleted(read()[key] ?? []);
  }, [key]);

  const markComplete = useCallback(
    (luId: string) => {
      setCompleted((prev) => {
        if (prev.includes(luId)) return prev;
        const next = [...prev, luId];
        const map = read();
        map[key] = next;
        write(map);
        return next;
      });
    },
    [key]
  );

  const markIncomplete = useCallback(
    (luId: string) => {
      setCompleted((prev) => {
        const next = prev.filter((id) => id !== luId);
        const map = read();
        map[key] = next;
        write(map);
        return next;
      });
    },
    [key]
  );

  const isComplete = useCallback(
    (luId: string) => completed.includes(luId),
    [completed]
  );

  return { completed, mounted, markComplete, markIncomplete, isComplete };
}
