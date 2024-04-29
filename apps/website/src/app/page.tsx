import CTA from "@/components/cta";
import Features from "@/components/home/features";
import ProductUpdates from "@/components/home/product-updates";
import { ImageMockup } from "@/components/image-mockup";


export default function Page() {
  return (
    <>
      <Features />
      <ProductUpdates />
      <ImageMockup />
      <CTA />
    </>
  );
}
