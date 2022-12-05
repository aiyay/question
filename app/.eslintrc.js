module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['components/**', 'layouts/**', 'pages/**'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 2, // 0 代表 off 关闭, 1 代表 warning, 2 代表 error。
  },
};
