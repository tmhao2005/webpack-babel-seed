const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  testRegex: TEST_REGEX,
  setupFiles: ["<rootDir>/jest-setup.js", 'jest-canvas-mock'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  testEnvironment: 'jest-environment-jsdom-fifteen',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // "^.+\\.(t|j)sx?$": "babel-jest",
    // "^.+\\.mjs$": "babel-jest",
    "\\.svg$": "jest-svg-transformer",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/dist/", "<rootDir>/lib/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],  
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(pug)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [`/node_modules/(?!(foo|baz))`], // Work for this case `node_modules/foo/node_modules/baz/bar/index.js`
}
