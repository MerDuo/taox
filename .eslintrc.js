module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-spacing': 0,
    'space-before-function-paren': 0,
    'space-comment': 0,
    'indent': 0,
    'quotes': 0,
    'space-before-blocks': 0,
    'key-spacing': 0,
    'arrow-parens': 0,
    // allow async-await    
    'generator-star-spacing': 0,
    // allow debugger during development     
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    "eqeqeq": 0
  }
}
