"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MinusCircle } from "@plato/ui/icons";

import { APP_URL } from "@plato/lib/constants";
import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";
import { Switch } from "@plato/ui/switch";

import MaxWidthWrapper from "./max-width-wrapper";

function CheckCircleFill({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
        fill="currentColor"
      />
      <path d="M8 11.8571L10.5 14.3572L15.8572 9" stroke="white" />
    </svg>
  );
}

function XCircleFill({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M15 9l-6 6" stroke="white" />
      <path d="M9 9l6 6" stroke="white" />
    </svg>
  );
}

type PricingItem = {
  plan: string;
  tagline: string;
  price?: {
    monthly: number;
    yearly: number;
  };
  features: Array<{
    text: string;
    neutral?: boolean;
    negative?: boolean;
  }>;
};

const Pricing = ({
  iconSrc,
  pricingItems,
}: {
  iconSrc?: string;
  pricingItems: PricingItem[];
}) => {
  const [annualBilling, setAnnualBilling] = useState(false);
  const period = useMemo(
    () => (annualBilling ? "yearly" : "monthly"),
    [annualBilling],
  );

  return (
    <MaxWidthWrapper className="mb-8 mt-16 text-center">
      <div className="mx-auto mb-10 flex flex-col items-center justify-center sm:max-w-lg">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt=""
            width={82}
            height={82}
            className="mb-8 h-20 w-20"
          />
        )}
        <h1 className="font-display text-4xl font-extrabold text-black sm:text-5xl">
          Simple,{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            affordable
          </span>{" "}
          pricing
        </h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Shorten your links without breaking your bank. <br />
          Start for free, no credit card required.
        </p>
      </div>

      <div className="relative mx-auto mb-14 flex max-w-fit items-center space-x-2">
        <p className="text-gray-600">Billed Monthly</p>

        <Switch onCheckedChange={setAnnualBilling} checked={annualBilling} />
        <p className="text-gray-600">Billed Annually</p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {pricingItems.map(({ plan, tagline, features, ...pricing }) => {
          const price = pricing.price?.[period] || 0;

          return (
            <div
              key={plan}
              className={`relative rounded-2xl bg-white ${
                plan === "Pro"
                  ? "border-2 border-blue-600 shadow-blue-200"
                  : "border border-gray-200"
              } shadow-lg`}
            >
              {plan === "Pro" && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                  Popular
                </div>
              )}

              <div className="p-5">
                <h3 className="font-display my-3 text-center text-3xl font-bold">
                  {plan}
                </h3>
                <p className="text-gray-500">{tagline}</p>

                <p className="font-display my-5 text-6xl font-semibold">
                  {period === "yearly" ? (price / 12).toFixed(0) : price}{" "}
                  <span className="text-lg">AED</span>
                </p>
                <p className="text-gray-500">
                  per {period === "yearly" ? "month, billed annually" : "month"}
                </p>
              </div>
              {/* <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-1">{price}</div>
              </div> */}
              <ul className="my-10 space-y-5 px-8">
                {features.map(({ text, neutral, negative }) => (
                  <li key={text} className="flex space-x-5">
                    <div className="flex-shrink-0">
                      {neutral ? (
                        <MinusCircle
                          fill="#D4D4D8"
                          className="h-6 w-6 text-white"
                        />
                      ) : negative ? (
                        <XCircleFill className="h-6 w-6 text-gray-300" />
                      ) : (
                        <CheckCircleFill className="h-6 w-6 text-green-500" />
                      )}
                    </div>

                    <p className={negative ? "text-gray-400" : "text-gray-600"}>
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200" />
              <div className="p-5">
                <Link
                  href={`${APP_URL}/register`}
                  className={cn(
                    buttonVariants({
                      size: "lg",
                    }),
                    "w-full rounded-full",
                    plan === "Pro"
                      ? "border border-transparent bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:border-blue-700 hover:bg-white hover:bg-clip-text hover:text-transparent"
                      : "border border-secondary-foreground bg-secondary-foreground hover:bg-background hover:text-secondary-foreground",
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default Pricing;
