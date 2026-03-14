import core from "ultracite/eslint/core";
import react from "ultracite/eslint/react";

const srcOnly = { files: ["src/**/*.{ts,tsx,js,jsx}"] };

export default [
  { ignores: ["**/*", "!src/**"] },
  ...[...core, ...react].map((config) => ({
    ...srcOnly,
    ...config,
    files: config.files ?? srcOnly.files,
  })),
];
