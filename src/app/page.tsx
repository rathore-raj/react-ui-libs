import Filters from "@/components/shared/filters";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="my-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pick the right UI Library
        </h1>
        <h2 className="text-lg sm:text-xl">
          for your{" "}
          <Link
            className="text-primary-400 font-black"
            href="https://react.dev/"
            target="_blank"
          >
            React
          </Link>{" "}
          or{" "}
          <Link
            className="text-primary-400 font-black"
            href="https://nextjs.org/"
            target="_blank"
          >
            NextJs
          </Link>{" "}
          Project.
        </h2>
      </div>
      <div className="flex justify-center gap-4">
        <div className="hidden w-1/3 md:block">
          {/* <Filters /> */}
        </div>
        <div className="w-2/3"></div>
      </div>
    </main>
  );
}
