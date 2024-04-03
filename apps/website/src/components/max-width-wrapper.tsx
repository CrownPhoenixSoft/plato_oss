import { cn } from "@plato/ui";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("container w-full max-w-screen-xl lg:px-20", className)}>
      {children}
    </div>
  );
}
