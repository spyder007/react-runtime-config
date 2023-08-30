/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testMatch: ["**/*.test.ts", "**/*.test.tsx"],
    verbose: true,
    collectCoverageFrom: [
      "src/**/*.tsx",
      "src/**/*.ts",
      "!src/**/*.test.ts",
      "!src/**/*.test.tsx"
    ],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      },
    },
    coverageDirectory: "output/coverage",
    reporters: [
      "default",
      [
        "jest-junit",
        {
          usePathForSuiteName: true,
          outputDirectory: "output/test",
          outputName: "junit.xml",
        },
      ],
    ],
    coverageReporters: ["text", "cobertura", "json", "lcov", "clover"],
    //setupFilesAfterEnv: ["./test/setup-test.js"],
    testPathIgnorePatterns: ["/node_modules/", "/lib/", "/storybook-static/"],
  };
  