module.exports = {
  extends: ["react-app", ],
  rules: {
    "object-curly-spacing": [1, "always"],
    "semi": "warn",
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "indent": ["warn", 2],
    'comma-spacing': ['warn', { after: true, }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'space-infix-ops': ['warn'],
    "import/no-anonymous-default-export": 0,
    "eol-last": ["warn", "never"],
  }
};