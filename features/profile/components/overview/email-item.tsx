"use client";

import { MailIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import { IntroItem } from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  const isClient = useIsClient();
  const decodedEmail = decodeEmail(email);

  if (!isClient || !decodedEmail) {
    return null;
  }

  return (
    <IntroItem
      icon={<MailIcon />}
      content={isClient ? decodedEmail : "[Email protected]"}
      href={isClient ? `mailto:${decodedEmail}` : "#"}
    />
  );
}
