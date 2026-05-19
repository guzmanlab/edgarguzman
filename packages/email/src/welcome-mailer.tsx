import { EdgarSignature } from "@edgarguzman/ui/emails/edgar-signature";
import { EmailFooter } from "@edgarguzman/ui/emails/email-footer";
import { EmailHeader } from "@edgarguzman/ui/emails/email-header";
import { EmailLayout } from "@edgarguzman/ui/emails/email-layout";
import React from "react";
import { Container, Text, Heading } from "react-email";

interface WelcomeMailerProps {
  name: string;
  email: string;
}

export const WelcomeMailer: React.FC<Readonly<WelcomeMailerProps>> = ({
  name = "Edgar",
  email = "edgar@edgarguzman.co",
}) => {
  return (
    <EmailLayout
      previewTitle={`Howdy ${name}, A Welcome Email to You by Edgar`}
    >
      <EmailHeader />

      <Container className="font-sans">
        <Heading className="font-semibold">Welcome {name}</Heading>

        <Text>I send you this email on welcoming to the store</Text>
      </Container>

      <EdgarSignature />

      <EmailFooter email={email} />
    </EmailLayout>
  );
};
