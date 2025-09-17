/** @type {import("prettier").Config} */
export const prettierConfig = {
  tailwindConfig: '@edgarguzman/tailwind',
  
  printWidth: 180,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  quoteProps: 'as-needed',
  proseWrap: 'always',
  endOfLine: 'lf',

  plugins: ['prettier-plugin-tailwindcss']
};
