/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  "jsx": "react-jsx",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};