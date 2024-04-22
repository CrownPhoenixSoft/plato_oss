import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";

export default async function Page(props: PageProps) {
  return <>Empty</>;

  // const appInfo = await getAppInfoFromSlug(props.params.app);
  // if (!appInfo) notFound();

  // return (
  //   <>
  //     <Pricing
  //       iconSrc={`${APP_URL}${appInfo.icon}`}
  //       pricingItems={[
  //         {
  //           plan: "Starter",
  //           tagline: "For startups & side projects",
  //           price: appInfo?.plans?.starter.price,
  //           features: [
  //             { text: "Unlimited branded links" },
  //             { text: "Up to 3 users", neutral: true },
  //             { text: "Priority support", negative: true },
  //           ],
  //         },
  //         {
  //           plan: "Pro",
  //           price: appInfo?.plans?.pro.price,
  //           tagline: "For larger teams with increased usage",
  //           features: [
  //             { text: "Unlimited branded links" },
  //             { text: "Up to 10 users" },
  //             { text: "Priority support", negative: true },
  //           ],
  //         },
  //         {
  //           plan: "Premium",
  //           price: appInfo?.plans?.premium.price,
  //           tagline: "For businesses with custom needs",
  //           features: [
  //             { text: "Unlimited branded links" },
  //             { text: "Up to 50 users" },
  //             { text: "Priority support" },
  //           ],
  //         },
  //       ]}
  //     />

  //     <FAQ />
  //   </>
  // );
}
