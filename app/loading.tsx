export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#4b58ff] animate-bounce [animation-delay:-0.3s]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#4b58ff] animate-bounce [animation-delay:-0.15s]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#4b58ff] animate-bounce" />
      </div>
    </div>
  );
}
