export function LogoMark({ className = "h-10 w-10", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill={inverted ? "#FFFFFF" : "#1B2A4A"} />
      <path d="M54 18 A32 32 0 1 0 82 66 A26 26 0 1 1 54 18 Z" fill="#F2A93B" />
      <path
        d="M66 30 C67.5 38 70 40.5 78 42 C70 43.5 67.5 46 66 54 C64.5 46 62 43.5 54 42 C62 40.5 64.5 38 66 30 Z"
        fill={inverted ? "#1B2A4A" : "#FFFFFF"}
      />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const text = inverted ? "text-white" : "text-navy";
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-10 w-10 shrink-0" inverted={inverted} />
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="text-xl font-bold tracking-tight">Roshan</span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.25em]">CLEANING SERVICES</span>
      </span>
    </span>
  );
}
