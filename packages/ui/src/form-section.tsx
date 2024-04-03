import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { cn } from "./lib/utils";
import { Separator } from "./separator";
import { TabsList, TabsTrigger } from "./tabs";

export type FormSectionProps = {
  title: string;
  description?: any;
  helpText?: string;
  button?: React.ReactNode;
  tabs?: React.ComponentProps<typeof TabsTrigger>[];
  children?: React.ReactNode;
  heading?: React.ReactNode;
  className?: string;
  hideContent?: boolean;

  headerProps?: React.ComponentProps<typeof CardHeader>;
  contentProps?: React.ComponentProps<typeof CardContent>;
};

export function FormSection({
  title,
  description,
  helpText,
  button,
  tabs,
  children,
  heading,
  className,
  hideContent = false,
  headerProps,
  contentProps,
}: FormSectionProps) {
  return (
    <Card className={cn("overflow-hidden shadow-none", className)}>
      <CardHeader
        {...headerProps}
        className={cn(
          "flex-row items-center justify-between space-x-4 space-y-0",
          headerProps?.className,
        )}
      >
        <div className="flex flex-col gap-1.5">
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>

        <div>{heading}</div>
      </CardHeader>

      {!!tabs?.filter((i) => !i.hidden)?.length && (
        <>
          <TabsList className="h-10 rounded-none bg-inherit px-6 py-0">
            {tabs
              .filter((i) => !i.hidden)
              .map((tab, idx) => (
                <TabsTrigger
                  key={idx}
                  {...tab}
                  className={cn(
                    `relative h-full before:absolute before:bottom-0 before:left-0 before:right-0 before:block before:h-0 before:border-foreground before:content-[''] data-[state=active]:shadow-none data-[state=active]:before:border-b-2`,
                    tab.className,
                  )}
                >
                  {tab.children}
                </TabsTrigger>
              ))}
          </TabsList>
          <Separator className="w-full" />
        </>
      )}

      {!hideContent && (
        <CardContent
          {...contentProps}
          className={cn("flex flex-col space-y-3", contentProps?.className)}
        >
          {children}
        </CardContent>
      )}

      {(!!button || !!helpText) && (
        <CardFooter className="flex h-16 items-center justify-between border-t border-border bg-muted pb-0">
          <p className="text-sm text-muted-foreground">{helpText}</p>
          {button}
        </CardFooter>
      )}
    </Card>
  );
}
