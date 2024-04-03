import { JSXElementConstructor, ReactElement } from "react";
import { Resend } from "resend";

import { createId } from "@plato/lib/create-id";

export * as templates from "./templates";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  email,
  subject,
  react,
  marketing,
  test,
  from = "system@plato.ae",
}: {
  email: string | string[];
  subject: string;
  react: ReactElement<any, string | JSXElementConstructor<any>>;
  marketing?: boolean;
  test?: boolean;
  from?: string;
}) => {
  if (!process.env.RESEND_API_KEY) {
    console.log(
      "Resend is not configured. You need to add a RESEND_API_KEY in your .env file for emails to work.",
    );
    return Promise.resolve();
  }

  return resend.emails.send({
    from: marketing
      ? "Abdullah from Plato.ae <abdullah@plato.ae>"
      : `Plato.ae <${from}>`,
    to: test ? "delivered@resend.dev" : email,
    subject,
    react,
    headers: {
      "X-Entity-Ref-ID": createId(),
    },
  });
};
