(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var concatenify = undefined;
require('./files/file1.js');require('./files/file2.js');;
require('./morefiles/more.js');require('./morefiles/some/some.js');;
var stuff = require('./stuff');
console.log('app1.js');

},{"./files/file1.js":2,"./files/file2.js":3,"./morefiles/more.js":4,"./morefiles/some/some.js":5,"./stuff":6}],2:[function(require,module,exports){
console.log('file1.js');

},{}],3:[function(require,module,exports){
console.log('file2.js');

},{}],4:[function(require,module,exports){
console.log('more.js');

},{}],5:[function(require,module,exports){
console.log('some.js');

},{}],6:[function(require,module,exports){
module.exports = function () {
  console.log('stuff');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvdHJvZHJpZ3Vlcy9jb2RlL3BpcGVsaW5lZC1ub2RlLWFwcC9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3Ryb2RyaWd1ZXMvY29kZS9waXBlbGluZWQtbm9kZS1hcHAvcHVibGljL2phdmFzY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy90cm9kcmlndWVzL2NvZGUvcGlwZWxpbmVkLW5vZGUtYXBwL3B1YmxpYy9qYXZhc2NyaXB0cy9maWxlcy9maWxlMS5qcyIsIi9Vc2Vycy90cm9kcmlndWVzL2NvZGUvcGlwZWxpbmVkLW5vZGUtYXBwL3B1YmxpYy9qYXZhc2NyaXB0cy9maWxlcy9maWxlMi5qcyIsIi9Vc2Vycy90cm9kcmlndWVzL2NvZGUvcGlwZWxpbmVkLW5vZGUtYXBwL3B1YmxpYy9qYXZhc2NyaXB0cy9tb3JlZmlsZXMvbW9yZS5qcyIsIi9Vc2Vycy90cm9kcmlndWVzL2NvZGUvcGlwZWxpbmVkLW5vZGUtYXBwL3B1YmxpYy9qYXZhc2NyaXB0cy9tb3JlZmlsZXMvc29tZS9zb21lLmpzIiwiL1VzZXJzL3Ryb2RyaWd1ZXMvY29kZS9waXBlbGluZWQtbm9kZS1hcHAvcHVibGljL2phdmFzY3JpcHRzL3N0dWZmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBjb25jYXRlbmlmeSA9IHVuZGVmaW5lZDtcbnJlcXVpcmUoJy4vZmlsZXMvZmlsZTEuanMnKTtyZXF1aXJlKCcuL2ZpbGVzL2ZpbGUyLmpzJyk7O1xucmVxdWlyZSgnLi9tb3JlZmlsZXMvbW9yZS5qcycpO3JlcXVpcmUoJy4vbW9yZWZpbGVzL3NvbWUvc29tZS5qcycpOztcbnZhciBzdHVmZiA9IHJlcXVpcmUoJy4vc3R1ZmYnKTtcbmNvbnNvbGUubG9nKCdhcHAxLmpzJyk7XG4iLCJjb25zb2xlLmxvZygnZmlsZTEuanMnKTtcbiIsImNvbnNvbGUubG9nKCdmaWxlMi5qcycpO1xuIiwiY29uc29sZS5sb2coJ21vcmUuanMnKTtcbiIsImNvbnNvbGUubG9nKCdzb21lLmpzJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ3N0dWZmJyk7XG59O1xuIl19
