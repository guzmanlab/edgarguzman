/* this is a internal 'Edgar Guzman' email module componentry file */

import type React from "react";
import { Container, Text } from "react-email";

export const EdgarSignature: React.FC = () => {
  return (
    <Container>
      <Text className="font-sans font-semibold">
        Edgar Guzman
        <br />
        <span className="text-[0.75rem] font-sans font-medium italic">
          Founder of Edgar Guzman
        </span>
      </Text>
    </Container>
  );
};
