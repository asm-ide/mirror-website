module.exports = {
    env: {
        browser: true
    },
    extends: "eslint:recommended",
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
        "space-before-function-paren": ["error", "never"],
        "keyword-spacing": [
            "error",
            { overrides: { "if": { after: false }, "for": { after: false }, "while": { after: false } } }
        ],
        "comma-dangle": [
            "off"
        ]
    },
};