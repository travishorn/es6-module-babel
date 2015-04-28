(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Greeter = require('./Greeter');

var _Greeter2 = _interopRequireDefault(_Greeter);

var x = new _Greeter2['default']();

x.greet();

},{"./Greeter":2}],2:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Greeter = (function () {
  function Greeter() {
    _classCallCheck(this, Greeter);
  }

  _createClass(Greeter, [{
    key: 'greet',
    value: function greet() {
      console.log('Hello, world.');
    }
  }]);

  return Greeter;
})();

module.exports = Greeter;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9UcmF2aXMvVGVtcG9yYXJ5L2NvZGUvYnJvd3Nlci9FUzZNb2R1bGVzV2l0aEJhYmVsL3NyYy9qcy9tYWluLmpzIiwiQzovVXNlcnMvVHJhdmlzL1RlbXBvcmFyeS9jb2RlL2Jyb3dzZXIvRVM2TW9kdWxlc1dpdGhCYWJlbC9zcmMvanMvR3JlZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7dUJDQW9CLFdBQVc7Ozs7QUFFL0IsSUFBSSxDQUFDLEdBQUcsMEJBQWEsQ0FBQzs7QUFFdEIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7SUNKSixPQUFPO1dBQVAsT0FBTzswQkFBUCxPQUFPOzs7ZUFBUCxPQUFPOztXQUNOLGlCQUFHO0FBQ04sYUFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUM5Qjs7O1NBSEcsT0FBTzs7O0FBTWIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdyZWV0ZXIgZnJvbSAnLi9HcmVldGVyJztcclxuXHJcbmxldCB4ID0gbmV3IEdyZWV0ZXIoKTtcclxuXHJcbnguZ3JlZXQoKTtcclxuIiwiY2xhc3MgR3JlZXRlcntcclxuICBncmVldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbywgd29ybGQuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyZWV0ZXI7XHJcbiJdfQ==
