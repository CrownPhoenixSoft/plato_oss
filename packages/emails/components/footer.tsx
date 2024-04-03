import { Section, Text } from "@react-email/components";

export default function Footer({
  email,
  marketing,
}: {
  email: string;
  marketing?: boolean;
}) {
  return (
    <Section className="p-6">
      {marketing ? (
        <Text className="m-0 text-[12px] leading-6 text-muted-foreground">
          This email was intended for{" "}
          <span className="text-primary">{email}</span>. If you were not
          expecting this email, you can ignore this email. If you don't want to
          receive emails like this in the future, you can{" "}
          <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" className="text-destructive">
            unsubscribe here
          </a>
          .
        </Text>
      ) : (
        <Text className="m-0 text-[12px] leading-6 text-muted-foreground">
          This email was intended for{" "}
          <span className="text-primary">{email}</span>. If you were not
          expecting this email, you can ignore this email. If you are concerned
          about your account's safety, please reply to this email to get in
          touch with us.
        </Text>
      )}
    </Section>
  );
}
