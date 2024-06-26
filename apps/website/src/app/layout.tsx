import "@/styles/globals.css";

import Background from "@/components/background";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import MobileNav from "@/components/nav-mobile";
import { inter, platoFont } from "@/styles/fonts";
import { getServerSession } from "next-auth";

import { cn } from "@plato/ui";

import Providers from "./providers";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(platoFont.variable, inter.variable)}>
        <Providers session={session}>
          <div className="flex min-h-screen flex-col justify-between">
            <MobileNav />
            <Nav />

            {children}

            <Footer />
            <Background />
          </div>
        </Providers>
      </body>
    </html>
  );
}
