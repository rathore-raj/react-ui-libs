import { Accordion } from "@/components/ui/accordion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { buttonFilters, rangeFilters } from "@/data/filters";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import AccordionItemWrapper from "./accordion-item";
import FilterButton from "./filter-button";
import RangeSlider from "./range-slider";

export default function Filters() {
  return (
    <TooltipProvider delayDuration={0}>
      <Accordion
        type="multiple"
        defaultValue={["feature", "components", "popularity"]}
        className="w-full"
      >
        <AccordionItemWrapper title=" Main Feature" value="feature">
          <div className="flex flex-wrap items-center">
            {buttonFilters.map((btnFilterOption) => (
              <FilterButton key={btnFilterOption.id} {...btnFilterOption} />
            ))}
          </div>
        </AccordionItemWrapper>

        <AccordionItemWrapper title="Available Components" value="components">
          {rangeFilters.slice(0, 1).map((filterOptions) => (
            <RangeSlider key={filterOptions.id} {...filterOptions} />
          ))}
        </AccordionItemWrapper>

        <AccordionItemWrapper title="Popularity" value="popularity">
          {rangeFilters.slice(1).map((filterOptions) => (
            <RangeSlider
              className="mb-5"
              key={filterOptions.id}
              {...filterOptions}
            />
          ))}
        </AccordionItemWrapper>
      </Accordion>
      <div className="flex justify-end">
        <Button className="transition-colors hover:bg-cyan-950">
          <Trash2 />
          <span>Clear Filter</span>
        </Button>
      </div>
    </TooltipProvider>
  );
}
