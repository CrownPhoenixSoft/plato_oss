import Image from "next/image";
import Background from "@/components/background";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";

export default function NotFound() {
  return (
    <>
      <MaxWidthWrapper className="flex h-[60vh] items-center justify-center">
        <div className=" grid items-center sm:flex">
          <Image
            width={1400}
            height={1400}
            src="/_static/whale.svg"
            alt="whale"
          />
          <div className="flex flex-col items-center justify-center gap-2 sm:items-start">
            <span className="text-gradient text-4xl font-bold sm:text-7xl">
              Oops!
            </span>
            <span className=" text-sm font-medium sm:text-2xl">
              Sorry The Page You're looking for doesnt exist. if you think you
              something is broken, report a problem.
            </span>
            <div className="mt-4 flex w-full items-center gap-4">
              <button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full",
                )}
              >
                Report a Problem
              </button>
              <button
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full px-12",
                )}
              >
                Home
              </button>
            </div>
          </div>
        </div>
        <Background />
      </MaxWidthWrapper>
    </>
  );
}
