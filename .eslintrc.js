module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/tslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended']
};
