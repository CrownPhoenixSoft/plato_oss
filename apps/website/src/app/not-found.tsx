import MaxWidthWrapper from "@/components/max-width-wrapper";

import { Separator } from "@plato/ui/separator";

export default function Page() {
  return (
    <MaxWidthWrapper className="flex h-[40vh] items-center justify-center">
      <div className="flex h-8 items-center gap-4">
        <span className="text-xl font-bold">404</span>{" "}
        <Separator orientation="vertical" className="bg-secondary-foreground" />
        <span className="font-medium">This page could not be found.</span>
      </div>
    </MaxWidthWrapper>
  );
}
