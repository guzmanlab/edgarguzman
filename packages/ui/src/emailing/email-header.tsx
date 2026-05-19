/* this is a internal 'Edgar Guzman' email module componentry file */

import type React from "react";
import { Img, Container } from "react-email";

export const EmailHeader: React.FC = () => {
  let baseUrl: string = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

  return (
    <Container>
      <Img
        src={`${baseUrl}/images/ed-guz.svg`}
        alt="Edgar Guzman"
        height={32}
      />
      <span className="sr-only">Edgar Guzman</span>
    </Container>
  );
};
