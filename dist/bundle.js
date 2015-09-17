(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsDock = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var videojs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);
var Component = videojs.getComponent('Component');

var Dock = (function (_Component) {
  _inherits(Dock, _Component);

  function Dock(player, options) {
    _classCallCheck(this, Dock);

    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, player, options);
    console.log(this.options_);
  }

  _createClass(Dock, [{
    key: 'createEl',
    value: function createEl() {
      return _get(Object.getPrototypeOf(Dock.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-dock',
        innerHTML: '\n        <h1 class=\'vjs-dock-title\'>' + this.options_.title + '</h1>\n      '
      });
    }
  }]);

  return Dock;
})(Component);

exports.Dock = Dock;
;

videojs.registerComponent('Dock', Dock);

videojs.plugin('dock', function (options) {
  this.addChild('dock', options);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9na2F0c2V2bWFuL3AvdmlkZW9qcy1kb2NrL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztJQUVyQyxJQUFJO1lBQUosSUFBSTs7QUFDSixXQURBLElBQUksQ0FDSCxNQUFNLEVBQUUsT0FBTyxFQUFFOzBCQURsQixJQUFJOztBQUViLCtCQUZTLElBQUksNkNBRVAsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUN2QixXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUM1Qjs7ZUFKVSxJQUFJOztXQU1QLG9CQUFHO0FBQ1Qsd0NBUFMsSUFBSSwwQ0FPUyxLQUFLLEVBQUU7QUFDM0IsaUJBQVMsRUFBRSxVQUFVO0FBQ3JCLGlCQUFTLDhDQUNzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssa0JBQ2pEO09BQ0YsRUFBRTtLQUNKOzs7U0FiVSxJQUFJO0dBQVMsU0FBUzs7O0FBY2xDLENBQUM7O0FBRUYsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUU7QUFDdkMsTUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDaEMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdmlkZW9qcyA9IHJlcXVpcmUoJ3ZpZGVvLmpzJyk7XG5sZXQgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG5leHBvcnQgY2xhc3MgRG9jayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zXyk7XG4gIH1cblxuICBjcmVhdGVFbCgpIHtcbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1kb2NrJyxcbiAgICAgIGlubmVySFRNTDogYFxuICAgICAgICA8aDEgY2xhc3M9J3Zqcy1kb2NrLXRpdGxlJz4ke3RoaXMub3B0aW9uc18udGl0bGV9PC9oMT5cbiAgICAgIGBcbiAgICB9KTtcbiAgfVxufTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnRG9jaycsIERvY2spO1xuXG52aWRlb2pzLnBsdWdpbignZG9jaycsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdGhpcy5hZGRDaGlsZCgnZG9jaycsIG9wdGlvbnMpO1xufSk7XG4iXX0=
},{}]},{},[1])(1)
});