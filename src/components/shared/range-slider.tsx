import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { rangeFilters } from "@/data/filters";
import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";

export default function RangeSlider({
  leadingLabel,
  trailingLabel,
  icon,
  help,
  rangeMax,
  rangeStep,
  className = "",
}: (typeof rangeFilters)[number] & { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn("flex items-center gap-3", className)}>
          {icon}
          <div className="w-full">
            <p className="break-all text-xs font-medium text-primary-400 sm:text-md">
              {leadingLabel} 0 {trailingLabel}
            </p>
            <Slider
              className="mt-2 text-primary-400"
              defaultValue={[0]}
              max={rangeMax}
              step={rangeStep}
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>{help}</TooltipContent>
    </Tooltip>
  );
}
