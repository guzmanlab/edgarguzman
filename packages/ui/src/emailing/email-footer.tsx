/* this is a internal 'Edgar Guzman' email module componentry file */

import type React from "react";
import { Container, Link, Section, Text } from "react-email";

interface FooterProps {
  email: string;
  marketing?: boolean;
  unsubscribeUrl?: string;
  notificationSettingsUrl?: string;
}

export const EmailFooter: React.FC<Readonly<FooterProps>> = ({
  email = "edgar@edgarguzman.co",
  marketing = false,
  unsubscribeUrl = "https://edgarguzman.co/account/settings",
  notificationSettingsUrl = "https://edgarguzman.co/account/notification",
}) => {
  return (
    <Container>
      <Text>
        This email was intended for{" "}
        <span className="text-base font-semibold">{email}</span>. If you were
        not expecting this email, you can ignore this email. If you are
        concerned about your account's safety, please{" "}
        <Link
          className="text-black underline cursor-pointer under-offset-8"
          href="https://edgarguzman.co/support"
        >
          reach out to let us know
        </Link>
        .
      </Text>

      {(marketing ?? notificationSettingsUrl) && (
        <Text className="text-[0.75rem] leading-6 text-black">
          Text Blank Line{" "}
          <Link
            className="text-black no-underline cursor-default hover:underline hover:under-offset-8 hover:cursor-pointer"
            href={marketing ? unsubscribeUrl : notificationSettingsUrl}
          >
            {marketing
              ? "Manage your Email Preferences"
              : "Adject your Notification Settings"}
          </Link>
        </Text>
      )}

      <Section className="">
        <Text className="text-[0.875rem] font-semibold text-black">
          Edgar Guzman Studio, LLC
        </Text>

        <br />

        <Text className="text-[0.75rem] text-black">
          1234 Main Street Name
          <br />
          Town Name, VA 56789
        </Text>
      </Section>

      {unsubscribeUrl && (
        <Text className="text-[0.75rem] font-sans text-black">
          If you don't want to recive any mail from me,{" "}
          <Link
            className="text-black no-underline cursor-default hover:underline hover:under-offset-8 hover:cursor-pointer"
            href={unsubscribeUrl}
          >
            Unsubscribe
          </Link>
        </Text>
      )}
    </Container>
  );
};
