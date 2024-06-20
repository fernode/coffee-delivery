module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/semi': ['warn', 'never'],
    "indent": ["error", 2, { "flatTernaryExpressions": true }],
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-multiple-empty-lines": "error",
    "@stylistic/no-confusing-arrow": ["error", {"onlyOneSimpleParam": true}]
  },
}
