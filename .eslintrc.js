const path = require('path');

module.exports = {
  "settings": {
    "import/resolver": { 
      "node" : {
        "paths": [path.resolve(__dirname)]
      }
    }
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended", 
    "plugin:import/errors", 
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": "2017"
  },
  "plugins": [
    "react", 
    "import",
    "promise"
  ],
  "globals": {
    "tpServerConfig": true, 
    "tpFrontendConfig": true
  },
  "rules": {
    "indent": [
      "warn",
      2, { 
        "SwitchCase": 1,
        "CallExpression": { 
          "arguments": "off" 
        },
        "ignoredNodes": [ 
          "JSXElement", "JSXText",
          "JSXAttribute", "JSXSpreadAttribute",
          "JSXExpressionContainer", "JSXSpreadChild",
          "JSXBoundaryElement", "JSXOpeningElement", "JSXClosingElement",
          "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment"
         ] 
      }, 
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-console": [
      "warn"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "no-alert": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "no-implied-eval": [
      "error"
    ],
    "no-invalid-this": [
      "error"
    ],
    "no-magic-numbers": [
      "off"
    ],
    "no-multi-spaces": [
      "warn"
    ],
    "no-return-await": [
      "error"
    ],
    "require-await": [
      "warn"
    ],
    "yoda": [
      "warn"
    ],
    "camelcase": [
      "error"
    ],
    "comma-dangle": [
      "off",
      "never"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "no-tabs": [
      "error"
    ],
    "no-unused-vars": [
      "warn",
      { "vars": "all", "args": "none", "varsIgnorePattern": "mapStateToProps|mapDispatchToProps" }
    ],
    "no-var": [
      "error"
    ],
    "prefer-arrow-callback": [
      "warn"
    ],
    "react/prop-types": [
      "off"
    ],
    "one-var": [
      "off"
    ],
    "semi": [
      "error", "always"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-trailing-spaces": [
      "warn"
    ],
    "space-in-parens": [
      "error", "never"
    ]
  }
};