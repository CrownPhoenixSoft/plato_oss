import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";

// async function getAppInfoFromSlug(slug) {
//   try {
//     // Define the API endpoint or database query using the slug
//     // For example, assuming you have an API endpoint to get app info:
//     const response = await fetch(`${APP_URL}/${slug}`);

//     // Check if the response status is not OK (e.g., 404 or other errors)
//     if (!response.ok) {
//       return null; // Return null if the response is not successful
//     }

//     // Parse the response JSON and return the app information
//     const appInfo = await response.json();
//   } catch (error) {
//     // Handle any errors that occurred during the request
//     console.error("Error fetching app info:", error);
//     return null; // Return null if there was an error
//   }
// }

export default async function Page(props: PageProps) {
  const appInfo = await getAppInfoFromSlug(props.params.app);
  if (!appInfo) notFound();
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
