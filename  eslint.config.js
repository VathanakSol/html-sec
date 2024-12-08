// eslint.config.js
export default [
    {
        files: ["**/*.js", "**/*.ts"], // Specify which files to lint
        rules: {
            semi: "error", // Require semicolons
            "prefer-const": "error", // Prefer const over let
            // Add more rules as needed
        },
    },
];