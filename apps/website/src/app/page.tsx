import { ImageCarousel } from "@/components/carousel";
import CTA from "@/components/cta";
import Features from "@/components/home/features";
import ProductUpdates from "@/components/home/product-updates";

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
