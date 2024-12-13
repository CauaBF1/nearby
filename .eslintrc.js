module.exports = {
parser: '@typescript-eslint/parser',
parserOptions: {
    ecmaFeatures: {
    jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
},
extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
],
plugins: [
    'react',
    'react-native',
    'react-hooks',
    '@typescript-eslint',
],
env: {
    'react-native/react-native': true,
    'es2021': true,
    'node': true,
},
settings: {
    react: {
    version: 'detect',
    },
},
rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', // Since we're using TypeScript
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'warn',
},
};
