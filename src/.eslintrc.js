module.exports = {
  "globals": {
    "_": false,
    "angular": false,
    "console": false,
    "inject": false,
    "module": false,
    "window": false
  },
  extends: [
    'angular'
  ],
  rules: {
    'angular/no-service-method': 0,
    "brace-style": [2, "stroustrup", {"allowSingleLine": false}],
    "camelcase": 1,
    "comma-dangle": [1, "never"],
    "curly": 1,
    "dot-notation": 1,
    "eqeqeq": 1,
    "indent": [1, 2],
    "lines-around-comment": [2, {"allowBlockStart": true, "beforeBlockComment": true, "beforeLineComment": false}],
    "new-parens": 1,
    "no-bitwise": 1,
    "no-cond-assign": 1,
    "no-debugger": 1,
    "no-dupe-args": 1,
    "no-dupe-keys": 1,
    "no-empty": 1,
    "no-invalid-regexp": 1,
    "no-invalid-this": 1,
    "no-mixed-spaces-and-tabs": [1, "smart-tabs"],
    "no-multiple-empty-lines": [1, {"max": 2}],
    "no-undef": 1,
    "no-underscore-dangle": 1,
    "no-unreachable": 1,
    "no-unused-vars": 1,
    "one-var": [1, "never"],
    "quote-props": [1, "as-needed"],
    "semi": [1, "always"],
    "keyword-spacing": 1,
    "space-unary-ops": [1, {"words": true, "nonwords": false}],
    "strict": [1, "function"],
    "vars-on-top": 1,
    "wrap-iife": [1, "outside"],
    "yoda": [1, "never"],

    //ES6 Stuff
    "arrow-parens": 1,
    "arrow-spacing": 1,
    "constructor-super": 1,
    "no-class-assign": 1,
    "no-const-assign": 1,
    "no-dupe-class-members": 1,
    "no-this-before-super": 1,
    "no-var": 1,
    "object-shorthand": 1,
    "prefer-arrow-callback": 1,
    "prefer-const": 1,

    "max-params": 0
  }
};
