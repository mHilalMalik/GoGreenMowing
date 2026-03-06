export function LimeLabel({ text, withLine = true }: { text: string; withLine?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      {withLine && (
        <span className="w-8 h-[2px]" style={{ backgroundColor: "#7AB648" }} />
      )}
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#7AB648",
          textTransform: "uppercase" as const,
        }}
      >
        {text}
      </span>
    </div>
  );
}
