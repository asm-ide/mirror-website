module.exports = {
    env: {
        browser: true
    },
    extends: "eslint:recommended",
    // parser: "babel-eslint",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015
    },
    settings: {
        "import/resolver": "webpack",
        "import/parser": "babel-eslint",
    },
    rules: {
        indent: [
            "warn",
            2
        ],
        quotes: [
            "error",
            "single"
        ],
        semi: [
            "error",
            "never"
        ],
    }
};