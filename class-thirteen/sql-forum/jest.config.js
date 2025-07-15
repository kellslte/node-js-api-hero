// jest.config.js
export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".steps.js"],
  testEnvironment: "node",

  // Tell Jest to look for tests in files ending with .steps
  testMatch: ["**/specs/step-definitions/**/*.steps.js"],
  // If you use ES modules in your tests or code:
  // This tells Jest to use ESM
  // You may also need to add this if using package.json:
  // "type": "module"
};