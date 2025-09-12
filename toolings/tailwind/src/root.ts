// we want each package to be responsible for it's own content.

import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export const tailwindCSSConfig: Omit<Config, 'content'> = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-sans)',
          ...fontFamily.sans
        ]
      }
    }
  }
};
