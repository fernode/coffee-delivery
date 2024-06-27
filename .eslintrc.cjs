module.exports = {
    root: true,
    env: {browser: true, es2020: true},
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
            {allowConstantExport: true},
        ],
        '@stylistic/semi': ['warn', 'never'],
        "@stylistic/indent": ["error", 2, {"flatTernaryExpressions": true}],
        "@stylistic/no-confusing-arrow": ["error", {"onlyOneSimpleParam": true}],
        "@stylistic/no-multi-spaces": ["error", {ignoreEOLComments: false}],
        "@stylistic/no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 0}],
        "@stylistic/jsx-closing-bracket-location": [1, 'tag-aligned'],
        "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
    }
}