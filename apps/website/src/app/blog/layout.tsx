import { ReactNode } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import BlogLayoutHero from "@/components/ui/blog-layout-header";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogLayoutHero />
      <div className="min-h-[50vh] border border-gray-200 bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg">
        <MaxWidthWrapper className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2">
          {children}
        </MaxWidthWrapper>
      </div>
    </>
  );
}
