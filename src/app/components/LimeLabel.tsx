import { brand } from "../brand-guidelines";

interface LimeLabelProps {
  text: string;
  withLine?: boolean;
}

export function LimeLabel({ text, withLine = true }: LimeLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {withLine && (
        <span
          className="block w-8 h-[2px]"
          style={{ backgroundColor: brand.colors.primary.lime }}
        />
      )}
      <span style={brand.components.sectionLabel}>
        {text}
      </span>
    </div>
  );
}
