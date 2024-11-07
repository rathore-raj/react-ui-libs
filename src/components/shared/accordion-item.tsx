import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface IPropsAccordionItemWrapper {
  title: string;
  children: ReactNode;
  value: string;
}

export default function AccordionItemWrapper({
  title,
  children,
  value,
}: IPropsAccordionItemWrapper) {
  return (
    <AccordionItem value={value} className="border-b-0">
      <AccordionTrigger className="text-sm font-semibold hover:no-underline sm:text-lg">
        {title}
      </AccordionTrigger>
      <AccordionContent className="w-full px-2">{children}</AccordionContent>
    </AccordionItem>
  );
}
