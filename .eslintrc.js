module.exports = {
  extends: ['react-app'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': [
      'error',
      { allow: ['clear', 'info', 'error', 'dir', 'trace'] },
    ],
    'jsx-a11y/alt-text': [
      2,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: ['Object'],
        area: ['Area'],
        'input[type="image"]': ['InputImage'],
      },
    ],
    'import/no-unresolved': 'off',
  },
  // plugins: ['prettier'],
  // parser: 'react-scripts/node_modules/babel-eslint',
  // rules: {
  //   'react/jsx-filename-extension': 'off',
  //   'jsx-a11y/anchor-has-content': 'off',
  //   'no-console': [
  //     'error',
  //     { allow: ['clear', 'info', 'error', 'dir', 'trace'] },
  //   ],
  //   'react/jsx-props-no-spreading': 'off',
  //   'react/destructuring-assignment': 'off',
  //   'no-unneeded-ternary': 'error',
  //   'no-useless-return': 'error',
  //   'no-var': 'error',
  //   'one-var': ['error', 'never'],
  //   'react/no-unescaped-entities': ['off'],
  // },
};
