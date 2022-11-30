{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "airbnb",
        "eslint-config-prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/function-component-definition": [
            2,
            {
              "namedComponents": "arrow-function",
              "unnamedComponents": "arrow-function"
            }
          ],
          "linebreak-style": 0,
          "default-param-last": 0,
          "no-param-reassign": [2, { "props": false }],
          "arrow-body-style": "off",
          "no-unused-vars":"error",
          "react/button-has-type":"off",
          "import/order":"off",
          "no-console":"off",
          "react/jsx-props-no-spreading":"off",
          "react/forbid-prop-types": [2, { "forbid": [ "array", "object"] }]
    }
}
