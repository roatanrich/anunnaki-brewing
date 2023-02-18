module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function', 'parameter'],
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'forbid',
      },
      // {
      //   selector: 'interface',
      //   format: ['PascalCase'],
      //   custom: {
      //     regex: '^I[A-Z]',
      //     match: true,
      //   },
      // },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
    ],
    'no-underscore-dangle': 'error',
  },
};
