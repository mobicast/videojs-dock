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

var Title = (function (_Component) {
  _inherits(Title, _Component);

  function Title(player, options) {
    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).call(this, player, options);
  }

  _createClass(Title, [{
    key: 'createEl',
    value: function createEl() {
      return _get(Object.getPrototypeOf(Title.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-dock-text',
        innerHTML: '\n        <h1 class=\'vjs-dock-title\'>' + this.options_.title + '</h1>\n        <h2 class=\'vjs-dock-description\'>' + (this.options_.description || '') + '</h2>\n      '
      });
    }
  }]);

  return Title;
})(Component);

exports.Title = Title;
;

var Shelf = (function (_Component2) {
  _inherits(Shelf, _Component2);

  function Shelf() {
    _classCallCheck(this, Shelf);

    _get(Object.getPrototypeOf(Shelf.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Shelf, [{
    key: 'createEl',
    value: function createEl() {
      return _get(Object.getPrototypeOf(Shelf.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-dock-shelf'
      });
    }
  }]);

  return Shelf;
})(Component);

exports.Shelf = Shelf;
;

var Dock = (function (_Component3) {
  _inherits(Dock, _Component3);

  function Dock(player, options) {
    _classCallCheck(this, Dock);

    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, player, options);
  }

  _createClass(Dock, [{
    key: 'createEl',
    value: function createEl() {
      return _get(Object.getPrototypeOf(Dock.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-dock'
      });
    }
  }]);

  return Dock;
})(Component);

exports.Dock = Dock;
;

Dock.prototype.options_ = {
  children: ['title', 'shelf']
};

videojs.registerComponent('Title', Title);
videojs.registerComponent('Shelf', Shelf);
videojs.registerComponent('Dock', Dock);

videojs.plugin('dock', function (options) {
  var settings = {
    title: {
      title: options.title,
      description: options.description
    }
  };
  var dock = this.addChild('dock', settings);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});