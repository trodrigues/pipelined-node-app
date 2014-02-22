var glob = require('glob');
var jsfiles = glob.sync('./public/javascripts/files/*.js');
console.log('module.exports = function(){');
jsfiles.forEach(function (file) {
  console.log("require('."+file+"');");
});
console.log('};');

