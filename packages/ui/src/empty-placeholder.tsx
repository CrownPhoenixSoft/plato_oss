import * as React from "react";
import { ClassValue } from "clsx";

import { IconType, Icon as LucidIcons } from "./icons";
import { cn } from "./lib/utils";

interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function EmptyPlaceholder({
  className,
  children,
  ...props
}: EmptyPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-md border bg-background p-8 text-center animate-in fade-in-50",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

interface EmptyPlaceholderIconProps
  extends Partial<React.SVGProps<SVGSVGElement>> {
  name?: IconType;
  Icon?: any;
  children?: any;
  containerClassName?: ClassValue;
}

export function EmptyPlaceHolderIcon({
  name,
  Icon,
  className,
  containerClassName,
  ...props
}: EmptyPlaceholderIconProps) {
  return (
    <div
      className={cn(
        "flex h-20 w-20 items-center justify-center rounded-full bg-muted",
        containerClassName,
      )}
    >
      {name && (
        <LucidIcons
          name={name}
          className={cn("h-10 w-10", className)}
          {...(props as any)}
        />
      )}
      {Icon && (
        <Icon className={cn("h-10 w-10", className)} {...(props as any)} />
      )}
    </div>
  );
}

interface EmptyPlacholderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function EmptyPlaceholderTitle({
  className,
  ...props
}: EmptyPlacholderTitleProps) {
  return (
    <h2 className={cn("mt-6 text-xl font-semibold", className)} {...props} />
  );
}

interface EmptyPlacholderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function EmptyPlaceholderDescription({
  className,
  ...props
}: EmptyPlacholderDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
