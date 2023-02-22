module.exports = {
  extends: ['plugin:astro/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['@typescript-eslint', 'tailwindcss'],
      extends: ['plugin:tailwindcss/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        semi: ['error', 'never'],
        // "@typescript-eslint/semi": "off",
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            interfaces: {
              optionalityOrder: 'optional-first',
            },
          },
        ],
      },
    },
  ],
}
