"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@plato/ui/accordion";
import { Button } from "@plato/ui/button";

import { ImageCarousel } from "../carousel";
import MaxWidthWrapper from "../max-width-wrapper";

const featureList = [
  // ...platoAppsList.map((app) => ({
  //   key: app.slug,
  //   title: app.name,
  //   description: app.description,
  //   img: `${APP_URL}${app.icon}`,
  //   thumbnail: "https://dub.co/_static/features/analytics.png",
  // })),
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div id="features">
      {/* <MaxWidthWrapper className="pb-10 pt-24">
        <div className="mx-auto max-w-md text-center sm:max-w-xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Powerful
            </span>{" "}
            apps for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              modern
            </span>{" "}
            Various Needs
          </h2>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Explore our versatile suite of features suitable for personal use,
            restaurants, cafes, businesses, and more.
          </p>
        </div>

        <div className="my-10 h-[840px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[630px]">
          <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
            <Accordion
              type="single"
              defaultValue="analytics"
              onValueChange={(e) => {
                setActiveFeature(featureList.findIndex(({ key }) => key === e));
              }}
            >
              {featureList.map(({ key, title, description }) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3 p-3">
                      <h3 className="text-base font-semibold text-gray-600">
                        {title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-3">
                      <p className="mb-4 text-sm text-gray-500">
                        {description}
                      </p>

                      <Link href={`/${key}`}>
                        <Button
                          size="sm"
                          className="rounded-full border border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
                        >
                          Details
                        </Button>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {featureList.map((feature, index) => {
                  if (index === activeFeature) {
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative min-h-[600px] w-full overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-2xl lg:mt-10 lg:w-[800px]"
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          width={800}
                          height={600}
                          poster={feature.thumbnail}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </MaxWidthWrapper> */}
    </div>
  );
}
