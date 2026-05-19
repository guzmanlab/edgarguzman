/* this is a internal 'edgar guzman' email module componentry file */

import type React from "react";
import { Body, Head, Html, Preview, Tailwind } from "react-email";

export interface EmailLayoutProps extends React.PropsWithChildren {
  previewTitle: string;
}

export const EmailLayout: React.FC<Readonly<EmailLayoutProps>> = ({
  previewTitle,
  children,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{previewTitle}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">{children}</Body>
      </Tailwind>
    </Html>
  );
};
