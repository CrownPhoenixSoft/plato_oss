import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";

import { constructMetadata } from "@plato/lib/constructMetadata";

export const metadata = constructMetadata({
  title: "Pricing – Plato",
});

export default function PricingPage() {
  return (
    <>
      <Pricing />

      <FAQ />
    </>
  );
}
