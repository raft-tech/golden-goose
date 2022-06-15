module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  parser: "react-scripts/node_modules/babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  ignorePatterns: ["serviceworker.js"],
  rules: {
    "react/jsx-props-no-spreading": [
      "error",
      {
        // Explicit spread is valuable for conditional props, so as long as it's explicit then it
        // should be easy to follow.
        explicitSpread: "ignore",
        // Modal/Button need to allow prop spreading because of the current implementation using `useModal`
        // If Modal is refactored to work like the Dropdown component then `useModal` can be deprecated
        // and these exceptions removed.
        exceptions: ["Modal", "Button"],
      },
    ],
    // TODO remove this. Temporarily added until there's more time to figure out a better solution.
    "import/no-cycle": "off",
    // Since this is a monorepo, some dependencies are shared at the root level, so we'll allow this.
    "import/no-extraneous-dependencies": "off",
    // Our compiler is OK with .js filenames for React components.
    "react/jsx-filename-extension": "off",
    // Most default props end up being null/undefined anyway, and with functional components, default
    // props can be included directly in the component's signature.
    "react/require-default-props": "off",
    // It's common practice to prepend variables with an underscore to indicate them as "private"
    // or "protected". GraphQL also occasionally uses underscores as well for metadata.
    "no-underscore-dangle": "off",
    // Named exports encourage consistent usage of a component throughout a project.
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["cypress/**/*"],
      rules: {
        // TODO: Reconfigure cypress lint rules once testing more fleshed out
        "no-unused-vars": "warn",
      },
    },
    {
      files: ["src/routes/**/*"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "warn",
      },
    },
  ],
};
