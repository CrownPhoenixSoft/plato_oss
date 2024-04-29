import CTA from "@/components/cta";
import Features from "@/components/home/features";
import ProductUpdates from "@/components/home/product-updates";
import { ImageCarousel } from "@/components/image-mockup";

export default function Page() {
  return (
    <>
      <Features />
      <ProductUpdates />
      <ImageCarousel />
      <CTA />
    </>
  );
}
