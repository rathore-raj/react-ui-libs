import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GalleryVerticalEnd, SquareMenu } from "lucide-react";
import { Slider } from "../ui/slider";

export default function Filters() {
  return (
    <TooltipProvider delayDuration={0}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="filter-1" className="border-b-0">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            Main Feature
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <div className="flex flex-wrap items-center justify-between">
              {new Array(10).fill(0).map((val, index) => (
                <Tooltip key={index + val}>
                  <TooltipTrigger className="text-primary-400 hover:bg-primary-950 flex w-2/5 items-center justify-start gap-2 whitespace-nowrap rounded-md px-5 py-2 text-sm font-medium transition-colors">
                    <SquareMenu />{" "}
                    <span className="text-md break-all">Hoversdfdsfds</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Tooltip>
              <TooltipTrigger className="text-primary-400 hover:bg-primary-950 flex w-full items-center justify-start gap-2 whitespace-nowrap rounded-md px-5 py-2 text-sm font-medium transition-colors">
                <SquareMenu /> <span className="text-md break-all">Alone</span>
              </TooltipTrigger>
              <TooltipContent className="border-2 border-slate-800 bg-gray-900 text-white">
                Add to library
              </TooltipContent>
            </Tooltip>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="filter-2" className="border-b-0">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            Available Components
          </AccordionTrigger>
          <AccordionContent className="w-full px-2">
            <div className="flex items-center gap-3">
              <GalleryVerticalEnd
                height={25}
                width={25}
                className="text-primary-400"
              />
              <div className="w-full">
                <p className="text-primary-400 text-sm font-medium">
                  More than 0 components
                </p>
                <Slider
                  className="text-primary-400 mt-2"
                  defaultValue={[33]}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TooltipProvider>
  );
}
