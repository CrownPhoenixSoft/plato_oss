import * as React from "react";

import { cn } from "./lib/utils";

type AddonProps = {
  children: React.ReactNode;
  isFilled?: boolean;
  className?: string;
  error?: boolean;
};

const Addon = ({ isFilled, children, className, error }: AddonProps) => (
  <div
    className={cn(
      "addon-wrapper border-default flex h-10 flex-col items-center justify-center border px-3 text-sm",
      isFilled && "bg-accent",
      error ? "text-destructive" : "text-muted-foreground",
      className,
    )}
  >
    <span className="flex whitespace-nowrap">{children}</span>
  </div>
);

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  addOnLeading?: React.ReactNode;
  addOnSuffix?: React.ReactNode;
  addOnFilled?: boolean;
  addOnClassname?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      addOnLeading,
      addOnSuffix,
      addOnFilled = true,
      addOnClassname,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {addOnLeading || addOnSuffix ? (
          <div
            dir="ltr"
            className="group relative mb-1 flex items-center overflow-hidden rounded-md shadow-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-ring focus-within:ring-offset-2"
          >
            {addOnLeading && (
              <Addon
                isFilled={addOnFilled}
                className={cn("rounded-l-md border-r-0", addOnClassname)}
              >
                {addOnLeading}
              </Addon>
            )}
            <Input
              className={cn(
                className,
                "shadow-none",
                addOnLeading && !addOnFilled && "px-0",
                addOnLeading && "rounded-l-none border-l-0",
                addOnSuffix && "rounded-r-none border-r-0",
                "!my-0 !ring-0",
              )}
              {...props}
              ref={ref}
            />
            {addOnSuffix && (
              <Addon
                isFilled={addOnFilled}
                className={cn(
                  "ltr:rounded-r-md rtl:rounded-l-md",
                  addOnClassname,
                )}
              >
                {addOnSuffix}
              </Addon>
            )}
          </div>
        ) : (
          <Input className={cn(className)} {...props} ref={ref} />
        )}
      </>
    );
  },
);
InputField.displayName = "InputField";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,

      type,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          // "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, InputField };
