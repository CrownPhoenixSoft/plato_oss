"use client";

import {
  Direction,
  DirectionProvider as RadixDirectionProvider,
} from "@radix-ui/react-direction";

export const DirectionProvider = ({
  dir,
  children,
}: {
  dir: Direction;
  children: React.ReactNode;
}) => <RadixDirectionProvider dir={dir}>{children}</RadixDirectionProvider>;
