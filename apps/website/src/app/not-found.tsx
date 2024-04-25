import Image from "next/image";
import Background from "@/components/background";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";

export default function NotFound() {
  return (
    <>
      <MaxWidthWrapper className="flex h-[80vh] items-center justify-center sm:h-[60vh]">
        <div className=" grid items-center sm:flex">
          <Image
            width={1400}
            height={1400}
            src="/_static/whale.svg"
            alt="whale"
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:items-start sm:text-start">
            <span className="text-gradient text-4xl font-bold sm:text-7xl">
              Oops!
            </span>
            <span className=" text-sm font-medium sm:text-2xl">
              Sorry, the page you're looking for doesn't exist. If you think
              something is broken, please report the problem.
            </span>
            <div className="mx-auto mt-4 flex w-fit items-center gap-4">
              <button
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full px-12",
                )}
              >
                Home
              </button>

              <button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full",
                )}
              >
                Report a Problem
              </button>
            </div>
          </div>
        </div>
        <Background />
      </MaxWidthWrapper>
    </>
  );
}
