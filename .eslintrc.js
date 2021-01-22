module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: "16.13.1",
    },
  },
  rules: {    
    "eol-last": 2,
    "no-trailing-spaces": 2,
    "comma-dangle": ["error", "only-multiline"],
    "semi": 2,
    "import/order": 2,
    "camelcase": 2,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "@typescript-eslint/no-misused-promises": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/ban-ts-comment": 0    
  }
};
