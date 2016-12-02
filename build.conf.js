/**
 * Created by cabargues on 2/12/16.
 */
module.exports = {

  srcJs: [
    'src/**/*.js',
    '!src/**/*.spec.js',
    '!./node_modules/**',
    '!./bower_components/**'
  ],
  srcSass: [
    './**/*.scss',
    '!./node_modules/**',
    '!./bower_components/**'
  ],
  srcHtml: [
    './**/*.html',
    '!./node_modules/**',
    '!./bower_components/**'
  ],
  tests: 'src/**/*.spec.js',
  buildFolder: 'dist',
  buildJsFilename: 'angular-naive-card.js',
  buildCssFilename: 'angular-naive-card.css',
  banner: '/*!\n' +
  ' * See LICENSE in this repository for license information\n' +
  ' */\n',
  closureStart: '(function(){\n',
  closureEnd: '\n})();'

};