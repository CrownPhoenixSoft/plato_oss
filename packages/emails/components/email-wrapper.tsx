import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";

import Footer from "./footer";

export const EmailWrapper = ({
  preview = "Email",
  email = "example@gmail.com",
  className,
  children,
}: {
  preview?: string;
  email?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                border: "#e2e8f0",
                input: "#e2e8f0",
                ring: "#2563eb",
                background: "#ffffff",
                foreground: "#020817",
                primary: {
                  DEFAULT: "#2563eb",
                  foreground: "#f8fafc",
                },
                secondary: {
                  DEFAULT: "#f1f5f9",
                  foreground: "#0f172a",
                },
                destructive: {
                  DEFAULT: "#ef4444",
                  foreground: "#f8fafc",
                },
                muted: {
                  DEFAULT: "#f1f5f9",
                  foreground: "#64748b",
                },
                accent: {
                  DEFAULT: "#f1f5f9",
                  foreground: "#0f172a",
                },
                popover: {
                  DEFAULT: "#ffffff",
                  foreground: "#020817",
                },
                card: {
                  DEFAULT: "#ffffff",
                  foreground: "#020817",
                },
              },
              borderRadius: {
                lg: `1rem`,
                md: `calc(1rem - 2px)`,
                sm: "calc(1rem - 4px)",
              },
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-gray-50 font-sans">
          <Section className="h-10" />
          <Container className="mx-auto max-w-[500px] overflow-hidden rounded-lg border border-solid border-border bg-card">
            <Section className={"p-8 " + className}>{children}</Section>

            <Hr className="m-0 w-full border border-border" />

            <Footer email={email} />
          </Container>
          <Section className="h-10" />
        </Body>
      </Tailwind>
    </Html>
  );
};
