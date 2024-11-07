import Icon from "@/assets/images/icon.svg";
import { Github, SquareMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Filters from "./filters";

export default function Header() {
  return (
    <header className="sticky top-0 z-20">
      <div className="shadow-sm shadow-gray-200 backdrop-blur-md dark:shadow-gray-600">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <div className="flex items-center justify-between gap-2">
                <Image src={Icon} height={32} width={32} alt="App Icon" />
                <span className="text-xl font-bold">
                  React/Next.js UI Lib Picker
                </span>
              </div>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <SquareMenu
                    height={32}
                    width={32}
                    className="cursor-pointer text-primary-400"
                  />
                </SheetTrigger>
                <SheetContent
                  className="overflow-scroll bg-gray-900 text-white antialiased"
                  side={"left"}
                >
                  <SheetHeader>
                    <SheetTitle className="text-white">Filters</SheetTitle>
                  </SheetHeader>
                  <Filters />
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link
                href="https://github.com/rathore-raj/react-ui-libs"
                target="_blank"
              >
                <Github
                  height={40}
                  width={40}
                  className="cursor-pointer whitespace-nowrap rounded-md p-2.5 text-sm font-medium text-primary-400 ring-offset-white transition-colors hover:bg-primary-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
