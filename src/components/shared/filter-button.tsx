import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonFilters } from "@/data/filters";
import Icon from "./icon";

export default function FilterButton({
  icon,
  label,
  help,
}: (typeof buttonFilters)[number]) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`mb-3 flex w-full flex-wrap items-center justify-start gap-2 rounded-md px-2 py-2 font-medium text-primary-400 transition-colors hover:bg-primary-950`}
        >
          <Icon name={icon} />
          <span className="sm:text-md break-all text-xs">{label}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>{help}</TooltipContent>
    </Tooltip>
  );
}
