// enables ES6 support
require('babel/register')({
  stage: 0,
  plugins: ['typecheck']
});
require('coffee-script/register');
