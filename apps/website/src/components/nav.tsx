"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { AppContext } from "@/app/providers";
import useScroll from "@/lib/use-scroll";

import { APP_URL } from "@plato/lib/constants";
import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@plato/ui/navigation-menu";

import { SHOW_BACKGROUND_SEGMENTS } from "./background";
import { FullLogo } from "./Logo";
import MaxWidthWrapper from "./max-width-wrapper";

export const navItems = [
  {
    name: "Plato Apps",
    slug: "apps",
  },
  {
    name: "Blog",
    slug: "blog",
  },
  {
    name: "Product Updates",
    slug: "product-updates",
  },
];

export default function Nav() {
  const scrolled = useScroll(80);
  const selectedLayout = useSelectedLayoutSegment();
  const helpCenter = selectedLayout === "help";
  const user = useContext(AppContext)?.session?.user;

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
        "border-b border-gray-200 bg-white":
          selectedLayout && !SHOW_BACKGROUND_SEGMENTS.has(selectedLayout),
      })}
    >
      <MaxWidthWrapper className={cn(helpCenter && "max-w-screen-lg")}>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={"/"}>
              <FullLogo />
            </Link>
            {helpCenter ? (
              <div className="flex items-center">
                <div className="mr-3 h-5 border-l-2 border-gray-400" />
                <Link
                  href="/help"
                  className="font-display text-lg font-bold text-gray-700"
                >
                  Help Center
                </Link>
              </div>
            ) : (
              <div className="hidden items-center space-x-3 lg:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent",
                          )}
                        >
                          Blog
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/product-updates" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent",
                          )}
                        >
                          Product Updates
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent">
                        Plato Apps
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {/* <ul className="grid w-[320px] gap-3 p-4">
                          {platoAppsList.map((app) => (
                            <ListItem
                              key={app.slug}
                              title={app.name}
                              href={app.slug}
                              imageUrl={`${APP_URL}${app.icon}`}
                            >
                              {app.description}
                            </ListItem>
                          ))}
                        </ul> */}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              //
              //   {navItems.map(({ name, slug }) => (
              //     <Link
              //       id={`nav-${slug}`}
              //       key={slug}
              //       href={`/${slug}`}
              //       className={cn(
              //         "z-10 rounded-full px-4 py-1.5 text-sm font-medium capitalize text-gray-500 transition-colors ease-out hover:text-black",
              //         {
              //           "text-black": selectedLayout === slug,
              //         },
              //       )}
              //     >
              //       {name}
              //     </Link>
              //   ))}
              // </div>
            )}
          </div>

          <div className="hidden lg:block">
            {user ? (
              <Link
                href={APP_URL}
                className={cn(
                  buttonVariants(),
                  "rounded-full border border-primary hover:bg-background hover:text-primary",
                )}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={`${APP_URL}/login`}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "rounded-full",
                  )}
                >
                  Log in
                </Link>
                <Link
                  href={`${APP_URL}/register`}
                  className={cn(
                    buttonVariants(),
                    "rounded-full border border-primary hover:bg-background hover:text-primary",
                  )}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { imageUrl?: string }
>(({ className, title, imageUrl, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "flex",
            className,
          )}
          {...props}
        >
          {imageUrl && (
            <div className="h-6 w-6 overflow-hidden">
              <img
                src={imageUrl}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          )}

          <div className="flex flex-1 flex-col gap-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
