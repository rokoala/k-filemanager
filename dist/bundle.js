(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],2:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Dropzone"] = factory(require("react"));
	else
		root["Dropzone"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _attrAccept = __webpack_require__(1);
	
	var _attrAccept2 = _interopRequireDefault(_attrAccept);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
	
	var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
	
	var Dropzone = function (_React$Component) {
	  _inherits(Dropzone, _React$Component);
	
	  function Dropzone(props, context) {
	    _classCallCheck(this, Dropzone);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropzone).call(this, props, context));
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onDragStart = _this.onDragStart.bind(_this);
	    _this.onDragEnter = _this.onDragEnter.bind(_this);
	    _this.onDragLeave = _this.onDragLeave.bind(_this);
	    _this.onDragOver = _this.onDragOver.bind(_this);
	    _this.onDrop = _this.onDrop.bind(_this);
	
	    _this.state = {
	      isDragActive: false
	    };
	    return _this;
	  }
	
	  _createClass(Dropzone, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.enterCounter = 0;
	    }
	  }, {
	    key: 'onDragStart',
	    value: function onDragStart(e) {
	      if (this.props.onDragStart) {
	        this.props.onDragStart.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragEnter',
	    value: function onDragEnter(e) {
	      e.preventDefault();
	
	      // Count the dropzone and any children that are entered.
	      ++this.enterCounter;
	
	      // This is tricky. During the drag even the dataTransfer.files is null
	      // But Chrome implements some drag store, which is accesible via dataTransfer.items
	      var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];
	
	      // Now we need to convert the DataTransferList to Array
	      var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));
	
	      this.setState({
	        isDragActive: allFilesAccepted,
	        isDragReject: !allFilesAccepted
	      });
	
	      if (this.props.onDragEnter) {
	        this.props.onDragEnter.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragOver',
	    value: function onDragOver(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      return false;
	    }
	  }, {
	    key: 'onDragLeave',
	    value: function onDragLeave(e) {
	      e.preventDefault();
	
	      // Only deactivate once the dropzone and all children was left.
	      if (--this.enterCounter > 0) {
	        return;
	      }
	
	      this.setState({
	        isDragActive: false,
	        isDragReject: false
	      });
	
	      if (this.props.onDragLeave) {
	        this.props.onDragLeave.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDrop',
	    value: function onDrop(e) {
	      e.preventDefault();
	
	      // Reset the counter along with the drag on a drop.
	      this.enterCounter = 0;
	
	      this.setState({
	        isDragActive: false,
	        isDragReject: false
	      });
	
	      var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
	      var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
	      var files = [];
	
	      for (var i = 0; i < max; i++) {
	        var file = droppedFiles[i];
	        // We might want to disable the preview creation to support big files
	        if (!this.props.disablePreview) {
	          file.preview = window.URL.createObjectURL(file);
	        }
	        files.push(file);
	      }
	
	      if (this.allFilesAccepted(files)) {
	        if (this.props.onDrop) {
	          this.props.onDrop.call(this, files, e);
	        }
	
	        if (this.props.onDropAccepted) {
	          this.props.onDropAccepted.call(this, files, e);
	        }
	      } else {
	        if (this.props.onDropRejected) {
	          this.props.onDropRejected.call(this, files, e);
	        }
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      if (!this.props.disableClick) {
	        this.open();
	      }
	    }
	  }, {
	    key: 'allFilesAccepted',
	    value: function allFilesAccepted(files) {
	      var _this2 = this;
	
	      return files.every(function (file) {
	        return (0, _attrAccept2.default)(file, _this2.props.accept);
	      });
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      this.fileInputEl.value = null;
	      this.fileInputEl.click();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props;
	      var accept = _props.accept;
	      var activeClassName = _props.activeClassName;
	      var inputProps = _props.inputProps;
	      var multiple = _props.multiple;
	      var name = _props.name;
	      var rejectClassName = _props.rejectClassName;
	
	      var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);
	
	      var activeStyle = rest.activeStyle;
	      var className = rest.className;
	      var rejectStyle = rest.rejectStyle;
	      var style = rest.style;
	
	      var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
	
	      var _state = this.state;
	      var isDragActive = _state.isDragActive;
	      var isDragReject = _state.isDragReject;
	
	
	      className = className || '';
	
	      if (isDragActive && activeClassName) {
	        className += ' ' + activeClassName;
	      }
	      if (isDragReject && rejectClassName) {
	        className += ' ' + rejectClassName;
	      }
	
	      if (!className && !style && !activeStyle && !rejectStyle) {
	        style = {
	          width: 200,
	          height: 200,
	          borderWidth: 2,
	          borderColor: '#666',
	          borderStyle: 'dashed',
	          borderRadius: 5
	        };
	        activeStyle = {
	          borderStyle: 'solid',
	          backgroundColor: '#eee'
	        };
	        rejectStyle = {
	          borderStyle: 'solid',
	          backgroundColor: '#ffdddd'
	        };
	      }
	
	      var appliedStyle = void 0;
	      if (activeStyle && isDragActive) {
	        appliedStyle = _extends({}, style, activeStyle);
	      } else if (rejectStyle && isDragReject) {
	        appliedStyle = _extends({}, style, rejectStyle);
	      } else {
	        appliedStyle = _extends({}, style);
	      }
	
	      var inputAttributes = {
	        accept: accept,
	        type: 'file',
	        style: { display: 'none' },
	        multiple: supportMultiple && multiple,
	        ref: function ref(el) {
	          return _this3.fileInputEl = el;
	        }, // eslint-disable-line
	        onChange: this.onDrop
	      };
	
	      if (name && name.length) {
	        inputAttributes.name = name;
	      }
	
	      // Remove custom properties before passing them to the wrapper div element
	      var customProps = ['disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected'];
	      var divProps = _extends({}, props);
	      customProps.forEach(function (prop) {
	        return delete divProps[prop];
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          className: className,
	          style: appliedStyle
	        }, divProps /* expand user provided props first so event handlers are never overridden */, {
	          onClick: this.onClick,
	          onDragStart: this.onDragStart,
	          onDragEnter: this.onDragEnter,
	          onDragOver: this.onDragOver,
	          onDragLeave: this.onDragLeave,
	          onDrop: this.onDrop
	        }),
	        this.props.children,
	        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
	      );
	    }
	  }]);
	
	  return Dropzone;
	}(_react2.default.Component);
	
	Dropzone.defaultProps = {
	  disablePreview: false,
	  disableClick: false,
	  multiple: true
	};
	
	Dropzone.propTypes = {
	  // Overriding drop behavior
	  onDrop: _react2.default.PropTypes.func,
	  onDropAccepted: _react2.default.PropTypes.func,
	  onDropRejected: _react2.default.PropTypes.func,
	
	  // Overriding drag behavior
	  onDragStart: _react2.default.PropTypes.func,
	  onDragEnter: _react2.default.PropTypes.func,
	  onDragLeave: _react2.default.PropTypes.func,
	
	  children: _react2.default.PropTypes.node, // Contents of the dropzone
	  style: _react2.default.PropTypes.object, // CSS styles to apply
	  activeStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be accepted
	  rejectStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be rejected
	  className: _react2.default.PropTypes.string, // Optional className
	  activeClassName: _react2.default.PropTypes.string, // className for accepted state
	  rejectClassName: _react2.default.PropTypes.string, // className for rejected state
	
	  disablePreview: _react2.default.PropTypes.bool, // Enable/disable preview generation
	  disableClick: _react2.default.PropTypes.bool, // Disallow clicking on the dropzone container to open file dialog
	
	  inputProps: _react2.default.PropTypes.object, // Pass additional attributes to the <input type="file"/> tag
	  multiple: _react2.default.PropTypes.bool, // Allow dropping multiple files
	  accept: _react2.default.PropTypes.string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
	  name: _react2.default.PropTypes.string // name attribute for the input tag
	};
	
	exports.default = Dropzone;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;

},{"react":"react"}],3:[function(require,module,exports){
/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = require('emitter');
var requestBase = require('./request-base');
var isObject = require('./is-object');

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = module.exports = require('./request').bind(null, Request);

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only verison of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */),
        key = parts.shift(),
        val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this._setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this._parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype._setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str){
  var parse = request.parse[this.type];
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype._setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      // issue #876: return the http status code if the response parsing fails
      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (res.status < 200 || res.status >= 300) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
      }
    } catch(e) {
      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `requestBase`.
 */

Emitter(Request.prototype);
for (var key in requestBase) {
  Request.prototype[key] = requestBase[key];
}

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
 * 'arraybuffer'.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (!options) {
    options = {
      type: 'basic'
    }
  }

  switch (options.type) {
    case 'basic':
      var str = btoa(user + ':' + pass);
      this.set('Authorization', 'Basic ' + str);
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;
  }
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  this._getFormData().append(field, file, filename || file.name);
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype._timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

Request.prototype._appendQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self._timeoutError();
      if (self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = 'download';
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  this._appendQueryString();

  // initiate request
  if (this.username && this.password) {
    xhr.open(this.method, this.url, true, this.username, this.password);
  } else {
    xhr.open(this.method, this.url, true);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};


/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn){
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./is-object":4,"./request":6,"./request-base":5,"emitter":1}],4:[function(require,module,exports){
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;

},{}],5:[function(require,module,exports){
/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

exports.clearTimeout = function _clearTimeout(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

exports.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

exports.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

exports.timeout = function timeout(ms){
  this._timeout = ms;
  return this;
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} reject
 * @return {Request}
 */

exports.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
      self.end(function(err, res){
        if (err) innerReject(err); else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
}

/**
 * Allow for extension
 */

exports.use = function use(fn) {
  fn(this);
  return this;
}


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

exports.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

exports.getHeader = exports.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

exports.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
exports.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
exports.field = function(name, val) {
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
exports.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

exports.withCredentials = function(){
  // This is browser-only functionality. Node side is no-op.
  this._withCredentials = true;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

exports.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

exports.toJSON = function(){
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

exports._isHost = function _isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

exports.send = function(data){
  var obj = isObject(data);
  var type = this._header['content-type'];

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || this._isHost(data)) return this;

  // default to json
  if (!type) this.type('json');
  return this;
};

},{"./is-object":4}],6:[function(require,module,exports){
// The node and browser modules expose versions of this with the
// appropriate constructor function bound as first argument
/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(RequestConstructor, method, url) {
  // callback
  if ('function' == typeof url) {
    return new RequestConstructor('GET', method).end(url);
  }

  // url first
  if (2 == arguments.length) {
    return new RequestConstructor('GET', method);
  }

  return new RequestConstructor(method, url);
}

module.exports = request;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _file = require('./file.jsx');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Directory = function (_React$Component) {
  _inherits(Directory, _React$Component);

  function Directory() {
    _classCallCheck(this, Directory);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Directory).call(this));

    _this.state = {
      renderChild: false,
      iconFolderClass: 'fa fa-folder k-folder-icon',
      iconArrowClass: 'fa fa-caret-right'
    };
    return _this;
  }

  _createClass(Directory, [{
    key: 'toogleDirectory',
    value: function toogleDirectory() {
      this.setState(function (previousState, currentProps) {
        if (previousState.renderChild) {
          previousState.renderChild = false;
          previousState.iconArrowClass = 'fa fa-caret-right';
          previousState.iconFolderClass = 'fa fa-folder k-folder-icon';
        } else {
          previousState.renderChild = true;
          previousState.iconArrowClass = 'fa fa-caret-down';
          previousState.iconFolderClass = 'fa fa-folder-open k-folder-icon';
        }
      });
    }
  }, {
    key: 'handleClickDirectory',
    value: function handleClickDirectory() {
      this.props.onClickBranch(this.props.files, this.props.path, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      /* create array of components based on files, check if render child node and also check
         it types by checking if node has a child node
      */
      var rows = this.props.files.map(function (row) {
        if (_this2.state.renderChild) {
          if (!!row.children) return _react2.default.createElement(Directory, { name: row.name, key: row.name, files: row.children, path: row.path, onClickBranch: _this2.props.onClickBranch });else return _react2.default.createElement(_file2.default, { name: row.name, key: row.name, path: row.path, filterText: _this2.props.filterText });
        } else return;
      });

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: this.state.iconArrowClass, onClick: this.toogleDirectory.bind(this) }),
        _react2.default.createElement(
          'span',
          { className: 'disable-select highlight', onClick: this.handleClickDirectory.bind(this), onDoubleClick: this.toogleDirectory.bind(this) },
          _react2.default.createElement('i', { className: this.state.iconFolderClass }),
          this.props.name
        ),
        _react2.default.createElement(
          'ul',
          null,
          rows
        )
      );
    }
  }]);

  return Directory;
}(_react2.default.Component);

exports.default = Directory;

},{"./file.jsx":8,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KFile = function (_React$Component) {
  _inherits(KFile, _React$Component);

  function KFile() {
    _classCallCheck(this, KFile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(KFile).call(this));
  }

  _createClass(KFile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fileStyle = {
        display: 'inline',
        padding: '4px 8px',
        color: 'gray'
      };

      var href = "uploads/" + this.props.path.split(kFManager.uploadPath)[1];

      return _react2.default.createElement(
        'li',
        { style: { margin: '5px' } },
        function () {
          var chunkNames = _this2.props.name.split(".");
          var ext = chunkNames[chunkNames.length - 1];

          switch (ext) {
            case "pdf":
              fileStyle.color = "#D20000";return _react2.default.createElement('i', { className: 'fa fa-file-pdf-o', style: fileStyle });
            case "svg":
              fileStyle.color = "green";return _react2.default.createElement('i', { className: 'fa fa-file-image-o', style: fileStyle });
            case "rar":
              fileStyle.color = "#D08938";return _react2.default.createElement('i', { className: 'fa fa-file-zip-o', style: fileStyle });
            default:
              return _react2.default.createElement('i', { className: 'fa fa-file-text-o', style: fileStyle });
          }
        }(),
        _react2.default.createElement(
          'a',
          { href: href, className: 'clickable', style: { color: 'black', textDecoration: 'none' }, target: '_blank' },
          this.props.name
        )
      );
    }
  }]);

  return KFile;
}(_react2.default.Component);

exports.default = KFile;

},{"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _directory = require('./directory.jsx');

var _directory2 = _interopRequireDefault(_directory);

var _file = require('./file.jsx');

var _file2 = _interopRequireDefault(_file);

var _kFileManagerService = require('./kFileManagerService.jsx');

var _kFileManagerService2 = _interopRequireDefault(_kFileManagerService);

var _kFileManager = require('./kFileManager.jsx');

var _kFileManager2 = _interopRequireDefault(_kFileManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FsTree = function (_React$Component) {
  _inherits(FsTree, _React$Component);

  function FsTree() {
    _classCallCheck(this, FsTree);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FsTree).call(this));
  }

  _createClass(FsTree, [{
    key: 'handleOnClickBranch',
    value: function handleOnClickBranch(files, path, ref) {
      this.props.onClickBranch(files, path, ref);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.files.length > 0) {
        return _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(_directory2.default, { name: '/', key: 'root', files: this.props.files, onClickBranch: this.handleOnClickBranch.bind(this), path: kFManager.uploadPath })
        );
      } else return _react2.default.createElement('ul', null);
    }
  }]);

  return FsTree;
}(_react2.default.Component);

exports.default = FsTree;

},{"./directory.jsx":7,"./file.jsx":8,"./kFileManager.jsx":10,"./kFileManagerService.jsx":11,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsTree = require('./fsTree.jsx');

var _fsTree2 = _interopRequireDefault(_fsTree);

var _searchBar = require('./searchBar.jsx');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _visualizer = require('./visualizer.jsx');

var _visualizer2 = _interopRequireDefault(_visualizer);

var _kFileManagerService = require('./kFileManagerService.jsx');

var _kFileManagerService2 = _interopRequireDefault(_kFileManagerService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KFileManager = function (_React$Component) {
  _inherits(KFileManager, _React$Component);

  function KFileManager() {
    _classCallCheck(this, KFileManager);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KFileManager).call(this));

    _this.state = {
      currentBranchFiles: [],
      currentTreeReference: null,
      currentPath: "",
      showVisualize: false,
      files: []
    };
    return _this;
  }

  _createClass(KFileManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.get('/fsread').then(function (result) {
        _this2.setState({ files: result.children });
      });
    }
  }, {
    key: 'handleUserInput',
    value: function handleUserInput(filterText) {
      this.setState({ filterText: filterText });
    }
  }, {
    key: 'handleClickBranch',
    value: function handleClickBranch(branchFiles, path, reference) {
      this.setState({ currentBranchFiles: branchFiles, currentTreeReference: reference, currentPath: path, showVisualize: true });
    }
  }, {
    key: 'handleRemoveFile',
    value: function handleRemoveFile(name, path) {
      this.state.currentTreeReference.forceUpdate();
    }
  }, {
    key: 'handleAddFile',
    value: function handleAddFile() {
      this.state.currentTreeReference.forceUpdate();
    }
  }, {
    key: 'handleVisualizeClickDirectory',
    value: function handleVisualizeClickDirectory(props) {

      var newCurrentBranch = "";

      this.setState(function (previousState) {
        for (var i = 0; i < previousState.currentBranchFiles.length; i++) {
          if (previousState.currentBranchFiles[i].path === props.path) {
            newCurrentBranch = previousState.currentBranchFiles[i].children;
            break;
          }
        }
        // changes the currentBranchFiles to newCurrentBranch;
        // set the current path
        // TODO: check why dos not need to set currentTreeReference;
        previousState.currentBranchFiles = newCurrentBranch;
        previousState.currentPath = props.path;
      });
    }
  }, {
    key: 'backHome',
    value: function backHome() {
      this.setState({ showVisualize: false });
    }
  }, {
    key: 'render',
    value: function render() {

      var visualizerWrapperCss = {
        minHeight: '500px'
      };

      var sideBarWrapperCss = {
        height: '100%',
        zIndex: 5,
        width: '23%',
        minWidth: '200px',
        float: 'left',
        borderRight: '1px solid rgba(0,0,0,0.06)',
        backgroundColor: '#F7F7F7',
        overflowX: 'auto'
      };

      return _react2.default.createElement(
        'div',
        { className: 'full-wh' },
        _react2.default.createElement(
          'div',
          { style: sideBarWrapperCss },
          _react2.default.createElement(_fsTree2.default, { onClickBranch: this.handleClickBranch.bind(this), files: this.state.files })
        ),
        _react2.default.createElement(
          'div',
          { style: visualizerWrapperCss },
          this.state.showVisualize ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_visualizer2.default, { branchFiles: this.state.currentBranchFiles, currentPath: this.state.currentPath, onRemoveFile: this.handleRemoveFile.bind(this), onAddFile: this.handleAddFile.bind(this), onBackHome: this.backHome.bind(this), onDoubleClickDirectory: this.handleVisualizeClickDirectory.bind(this) })
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'main-logo' },
              _react2.default.createElement(
                'div',
                null,
                'k-filemanager'
              )
            ),
            _react2.default.createElement(_searchBar2.default, null)
          )
        )
      );
    }
  }]);

  return KFileManager;
}(_react2.default.Component);

exports.default = KFileManager;

},{"./fsTree.jsx":9,"./kFileManagerService.jsx":11,"./searchBar.jsx":12,"./visualizer.jsx":13,"react":"react"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instanceKFileManagerService = null;

var KFileManagerService = function () {
  function KFileManagerService(branchFiles) {
    _classCallCheck(this, KFileManagerService);

    if (!instanceKFileManagerService) {
      instanceKFileManagerService = this;
      return instanceKFileManagerService;
    }

    this.currentBranchFiles = branchFiles || [];

    return instanceKFileManagerService;
  }

  _createClass(KFileManagerService, [{
    key: "setCurrentBranchFiles",
    value: function setCurrentBranchFiles(branchFiles) {
      this.currentBranchFiles = branchFiles;
    }
  }, {
    key: "getCurrentBranchFiles",
    value: function getCurrentBranchFiles() {
      return this.currentBranchFiles;
    }
  }]);

  return KFileManagerService;
}();

exports.default = KFileManagerService;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _kFileManager = require('./kFileManager.jsx');

var _kFileManager2 = _interopRequireDefault(_kFileManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this));

    _this.state = {
      files: [],
      filterValue: ""
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'handleChange',
    value: function handleChange() {
      this.setState({ filterValue: this.refs.filterTextInput.value });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $.get('/fsfiles').then(function (result) {
        _this2.setState({ files: result });
      });
    }
  }, {
    key: 'openFile',
    value: function openFile(path) {
      var _path = "uploads/" + path.split(kFManager.uploadPath)[1];
      window.open(_path, '_blank');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var itemStyle = {
        cursor: 'pointer'
      };

      var rows = this.state.files.map(function (file) {
        if (_this3.state.filterValue !== "" && file.name.toUpperCase().indexOf(_this3.state.filterValue.toUpperCase()) !== -1) {

          var fileStyle = {
            color: 'gray'
          };
          var chunkNames = file.name.split(".");
          var ext = chunkNames[chunkNames.length - 1];

          switch (ext) {
            case "pdf":
              fileStyle.color = "#D20000";
              return _react2.default.createElement(
                'li',
                { onClick: _this3.openFile.bind(_this3, file.path), style: itemStyle, key: file.path },
                _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-pdf-o fa-1x' }),
                ' ',
                file.name
              );
            case "svg":
              fileStyle.color = "green";
              return _react2.default.createElement(
                'li',
                { onClick: _this3.openFile.bind(_this3, file.path), style: itemStyle, key: file.path },
                _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-image-o fa-1x' }),
                ' ',
                file.name
              );
            case "rar":
              fileStyle.color = "#D08938";
              return _react2.default.createElement(
                'li',
                { onClick: _this3.openFile.bind(_this3, file.path), style: itemStyle, key: file.path },
                _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-zip-o fa-1x' }),
                ' ',
                file.name
              );
            default:
              return _react2.default.createElement(
                'li',
                { onClick: _this3.openFile.bind(_this3, file.path), style: itemStyle, key: file.path },
                _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-text-o fa-1x' }),
                ' ',
                file.name
              );
          }
        }
      }).filter(function (e) {
        return !!e;
      });

      var listBoxStyle = {
        maxHeight: '500px',
        overflowY: 'auto',
        border: '1px solid rgba(0,0,0,0.09)'
      };

      var wrapperSeacher = {
        position: 'absolute',
        top: '40vh',
        left: '38%'
      };

      var wrapperInputSearch = {
        textAlign: 'center'
      };

      return _react2.default.createElement(
        'div',
        { style: wrapperSeacher },
        _react2.default.createElement(
          'div',
          { style: wrapperInputSearch, className: 'inputSearchBar' },
          _react2.default.createElement('input', { style: { width: '100%', padding: '8px' }, type: 'text', placeholder: 'Pesquisar...', ref: 'filterTextInput', onChange: this.handleChange.bind(this) })
        ),
        _react2.default.createElement(
          'div',
          { className: 'listSearchBar', style: listBoxStyle },
          this.state.filterValue !== "" ? rows.length > 0 ? _react2.default.createElement(
            'ul',
            null,
            rows
          ) : _react2.default.createElement(
            'ul',
            null,
            'Nenhum arquivo encontrado...'
          ) : null
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

},{"./kFileManager.jsx":10,"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _visualizerElement = require('./visualizerElement.jsx');

var _visualizerElement2 = _interopRequireDefault(_visualizerElement);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visualizer = function (_React$Component) {
  _inherits(Visualizer, _React$Component);

  function Visualizer() {
    _classCallCheck(this, Visualizer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Visualizer).call(this));

    _this.state = {
      showDirectoryInput: false,
      dirName: "",
      currentPath: "",
      currentDir: "/",
      files: []
    };
    return _this;
  }

  _createClass(Visualizer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ files: this.props.branchFiles });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ files: nextProps.branchFiles });
    }
  }, {
    key: 'handleElementRemove',
    value: function handleElementRemove(name, path) {
      var self = this;
      if (confirm('Deseja realmente remover ' + name + '?')) {
        $.ajax({
          type: 'POST',
          url: '/remove',
          data: {
            path: path
          }
        }).done(function () {

          var objIndex = -1;

          self.state.files.forEach(function (obj, index) {
            if (obj.name === name) {
              objIndex = index;
            }
          });

          if (objIndex >= 0) {
            self.setState(function (previousState) {
              previousState.files.splice(objIndex, 1);
              self.props.onRemoveFile(name, path);
            });
          }
        });
      }
    }
  }, {
    key: 'createDirectory',
    value: function createDirectory() {
      var self = this;
      name = this.state.dirName;
      $.ajax({
        type: 'POST',
        url: '/mkdir',
        data: {
          path: this.props.currentPath + "/" + name
        }
      }).done(function (result) {
        self.setState(function (previousState) {
          previousState.dirName = "";
          previousState.showDirectoryInput = false;
          previousState.files.push(result);
          self.props.onAddFile();
        });
      });
    }
  }, {
    key: 'onAddFile',
    value: function onAddFile(files) {
      this.setState({ sendFiles: files });
    }
  }, {
    key: 'sendFiles',
    value: function sendFiles() {
      var _this2 = this;

      var self = this;

      var req = _superagent2.default.post('/upload');
      this.state.sendFiles.forEach(function (file) {
        req.field('path', _this2.props.currentPath);
        req.attach(file.name, file);
      });
      req.end(function (err, res) {
        if (err) {
          console.log(err);
        } else {
          self.setState(function (previousState) {
            previousState.sendFiles = null;
            previousState.files.push(res.body);
            self.props.onAddFile();
          });
        }
      });
    }
  }, {
    key: 'handleDirInputChange',
    value: function handleDirInputChange(event) {
      this.setState({ dirName: event.target.value });
    }
  }, {
    key: 'toogleDirectoryInput',
    value: function toogleDirectoryInput() {
      this.setState(function (previousState) {
        previousState.showDirectoryInput = previousState.showDirectoryInput ? false : true;
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var cDir = nextProps.currentPath.split(kFManager.uploadPath)[1];
      cDir = cDir === "" ? "/" : cDir;

      this.setState({ currentPath: nextProps.currentPath, currentDir: cDir, files: nextProps.branchFiles });
    }
  }, {
    key: 'backHome',
    value: function backHome() {
      this.props.onBackHome();
    }
  }, {
    key: 'onDoubleClickElement',
    value: function onDoubleClickElement(props) {
      this.props.onDoubleClickDirectory(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var elements = this.state.files.map(function (file) {
        if (!!file.children) return _react2.default.createElement(_visualizerElement2.default, { key: file.name, name: file.name, path: file.path, onRemoveElement: _this3.handleElementRemove.bind(_this3), onDoubleClickElement: _this3.onDoubleClickElement.bind(_this3), type: 'directory' });else return _react2.default.createElement(_visualizerElement2.default, { key: file.name, name: file.name, path: file.path, onRemoveElement: _this3.handleElementRemove.bind(_this3), type: 'file' });
      });

      var dropZoneStyle = {
        margin: '5px',
        display: 'inline-block',
        float: 'right'
      };

      var toolbarStyle = {
        zIndex: 10,
        boxShadow: '0px 0px 7px rgba(0,0,0,0.04)',
        height: '100px',
        right: '0',
        bottom: '10px',
        position: 'fixed',
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.09)',
        borderRadius: '5px'
      };

      var fileUploadStyle = {
        color: 'rgb(61, 172, 208)',
        float: 'right',
        display: 'inline-block',
        padding: '20px'
      };

      var folderCreateStyle = {
        display: 'inline-block',
        float: 'right',
        color: 'rgb(61, 172, 208)',
        padding: '15px',
        margin: '5px'
      };

      var plusIconStyle = {
        color: 'lightslategray'
      };

      var uploadNameFilesStyle = {
        backgroundColor: 'white',
        float: 'right',
        maxWidth: '50%',
        marginTop: '30px'
      };

      var inputDirNameStyle = {
        backgroundColor: 'white',
        display: 'inline-block',
        float: 'right',
        marginTop: '35px'
      };

      var BtnSendStyle = {
        margin: '5px'
      };

      var nameFiles = this.state.sendFiles ? this.state.sendFiles.map(function (file) {
        return file.name;
      }) : null;

      var navigatorDisplay = {
        height: '30px',
        width: '100%',
        backgroundColor: '#ECECEC',
        boxShadow: '0px 0 3px gray'
      };

      var navigatorTextDisplay = {
        textAlign: 'center',
        lineHeight: '1.5',
        fontSize: '17px'
      };

      var wrapperVisualizer = {
        overflow: 'auto',
        marginBottom: '90px'
      };

      var render = _react2.default.createElement(
        'div',
        { style: wrapperVisualizer },
        _react2.default.createElement(
          'div',
          { style: navigatorDisplay },
          _react2.default.createElement(
            'div',
            { style: navigatorTextDisplay },
            this.state.currentDir
          )
        ),
        _react2.default.createElement(
          'div',
          { style: toolbarStyle },
          this.state.showDirectoryInput ? _react2.default.createElement(
            'div',
            { style: inputDirNameStyle },
            _react2.default.createElement('input', { type: 'text', value: this.state.dirName, placeholder: 'nome do diretório...', onChange: this.handleDirInputChange.bind(this) }),
            _react2.default.createElement(
              'button',
              { onClick: this.createDirectory.bind(this) },
              'Ok'
            )
          ) : null,
          _react2.default.createElement(
            'div',
            { onClick: this.toogleDirectoryInput.bind(this), className: 'item-clickable item-toolbar', title: 'Criar diretório', style: folderCreateStyle },
            _react2.default.createElement('i', { className: 'fa fa-folder fa-3x item-clickable' }),
            _react2.default.createElement('i', { className: 'fa fa-plus fa-1x item-clickable', style: plusIconStyle })
          ),
          _react2.default.createElement(
            'div',
            { style: uploadNameFilesStyle },
            this.state.sendFiles ? _react2.default.createElement(
              'div',
              null,
              nameFiles,
              _react2.default.createElement(
                'button',
                { style: BtnSendStyle, onClick: this.sendFiles.bind(this) },
                'Enviar arquivo'
              )
            ) : null
          ),
          _react2.default.createElement(
            _reactDropzone2.default,
            { style: dropZoneStyle, onDrop: this.onAddFile.bind(this), title: 'Upload arquivo' },
            _react2.default.createElement('i', { className: 'fa fa-upload fa-3x item-clickable item-toolbar', style: fileUploadStyle })
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.backHome.bind(this), className: 'item-clickable item-toolbar', title: 'Buscar arquivo', style: folderCreateStyle },
            _react2.default.createElement('i', { className: 'fa fa-search fa-3x item-clickable' })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          elements
        )
      );

      return render;
    }
  }]);

  return Visualizer;
}(_react2.default.Component);

exports.default = Visualizer;

},{"./visualizerElement.jsx":14,"react":"react","react-dropzone":2,"superagent":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VizualizerElement = function (_React$Component) {
  _inherits(VizualizerElement, _React$Component);

  function VizualizerElement() {
    _classCallCheck(this, VizualizerElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VizualizerElement).call(this));

    _this.state = {
      showRemoveIcon: false
    };
    return _this;
  }

  _createClass(VizualizerElement, [{
    key: 'openFile',
    value: function openFile(path) {
      var _path = "uploads/" + path.split(kFManager.uploadPath)[1];
      window.open(_path, '_blank');
    }
  }, {
    key: 'removeFile',
    value: function removeFile(name, path) {
      this.props.onRemoveElement(name, path);
    }
  }, {
    key: 'doubleClickDirectory',
    value: function doubleClickDirectory(props) {
      this.props.onDoubleClickElement(props);
    }
  }, {
    key: 'showRemoveIcon',
    value: function showRemoveIcon() {
      this.setState({ showRemoveIcon: true });
    }
  }, {
    key: 'hideRemoveIcon',
    value: function hideRemoveIcon() {
      this.setState({ showRemoveIcon: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var directoryStyle = {
        padding: '10px',
        color: '#3DACD0'
      };

      var fileStyle = {
        padding: '10px',
        color: 'gray'
      };

      var elementStyle = {
        float: 'left',
        padding: '30px 0',
        textAlign: 'center',
        width: '175px',
        position: 'relative'
      };

      var iconTrash = {
        position: 'absolute',
        top: '30px',
        right: '30px',
        cursor: 'pointer'
      };

      var nameStyle = {
        cursor: 'default',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        padding: '5px',
        whiteSpace: 'nowrap'
      };

      if (this.props.type === 'file') {
        return _react2.default.createElement(
          'div',
          { style: elementStyle, onMouseOver: this.showRemoveIcon.bind(this), onMouseLeave: this.hideRemoveIcon.bind(this) },
          function () {
            var chunkNames = _this2.props.name.split(".");
            var ext = chunkNames[chunkNames.length - 1];
            switch (ext) {
              case "pdf":
                fileStyle.color = "#D20000";
                return _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-pdf-o fa-4x', title: _this2.props.name, onDoubleClick: _this2.openFile.bind(_this2, _this2.props.path) });
              case "svg":
                fileStyle.color = "green";
                return _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-image-o fa-4x', title: _this2.props.name, onDoubleClick: _this2.openFile.bind(_this2, _this2.props.path) });
              case "rar":
                fileStyle.color = "#D08938";
                return _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-zip-o fa-4x', title: _this2.props.name, onDoubleClick: _this2.openFile.bind(_this2, _this2.props.path) });
              default:
                return _react2.default.createElement('i', { style: fileStyle, className: 'fa fa-file-text-o fa-4x', title: _this2.props.name, onDoubleClick: _this2.openFile.bind(_this2, _this2.props.path) });
            }
          }(),
          _react2.default.createElement(
            'div',
            { style: nameStyle },
            this.props.name
          ),
          this.state.showRemoveIcon ? _react2.default.createElement('i', { className: 'fa fa-trash', style: iconTrash, onClick: this.removeFile.bind(this, this.props.name, this.props.path) }) : null
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: elementStyle, onDoubleClick: this.doubleClickDirectory.bind(this, this.props), onMouseOver: this.showRemoveIcon.bind(this), onMouseLeave: this.hideRemoveIcon.bind(this) },
          _react2.default.createElement('i', { style: directoryStyle, title: this.props.name, className: 'fa fa-folder fa-4x' }),
          _react2.default.createElement(
            'div',
            { style: nameStyle },
            this.props.name
          ),
          this.state.showRemoveIcon ? _react2.default.createElement('i', { className: 'fa fa-trash', style: iconTrash, onClick: this.removeFile.bind(this, this.props.name, this.props.path) }) : null
        );
      }
    }
  }]);

  return VizualizerElement;
}(_react2.default.Component);

exports.default = VizualizerElement;

},{"react":"react"}],15:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _kFileManager = require('./components/kFileManager.jsx');

var _kFileManager2 = _interopRequireDefault(_kFileManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_kFileManager2.default, null), document.getElementById('mount-point'));

},{"./components/kFileManager.jsx":10,"react":"react","react-dom":"react-dom"}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtZHJvcHpvbmUvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvaXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3JlcXVlc3QtYmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9yZXF1ZXN0LmpzIiwicHVibGljL2NvbXBvbmVudHMvZGlyZWN0b3J5LmpzeCIsInB1YmxpYy9jb21wb25lbnRzL2ZpbGUuanN4IiwicHVibGljL2NvbXBvbmVudHMvZnNUcmVlLmpzeCIsInB1YmxpYy9jb21wb25lbnRzL2tGaWxlTWFuYWdlci5qc3giLCJwdWJsaWMvY29tcG9uZW50cy9rRmlsZU1hbmFnZXJTZXJ2aWNlLmpzeCIsInB1YmxpYy9jb21wb25lbnRzL3NlYXJjaEJhci5qc3giLCJwdWJsaWMvY29tcG9uZW50cy92aXN1YWxpemVyLmpzeCIsInB1YmxpYy9jb21wb25lbnRzL3Zpc3VhbGl6ZXJFbGVtZW50LmpzeCIsInB1YmxpYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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b250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJvcHpvbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJvcHpvbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblx0XG5cdHZhciBfYXR0ckFjY2VwdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2F0dHJBY2NlcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFjY2VwdCk7XG5cdFxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblx0XG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKiBlc2xpbnQgcHJlZmVyLXRlbXBsYXRlOiAwICovXG5cdFxuXHR2YXIgc3VwcG9ydE11bHRpcGxlID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID8gJ211bHRpcGxlJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIDogdHJ1ZTtcblx0XG5cdHZhciBEcm9wem9uZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgX2luaGVyaXRzKERyb3B6b25lLCBfUmVhY3QkQ29tcG9uZW50KTtcblx0XG5cdCAgZnVuY3Rpb24gRHJvcHpvbmUocHJvcHMsIGNvbnRleHQpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wem9uZSk7XG5cdFxuXHQgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3B6b25lKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cdFxuXHQgICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyYWdTdGFydCA9IF90aGlzLm9uRHJhZ1N0YXJ0LmJpbmQoX3RoaXMpO1xuXHQgICAgX3RoaXMub25EcmFnRW50ZXIgPSBfdGhpcy5vbkRyYWdFbnRlci5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJhZ0xlYXZlID0gX3RoaXMub25EcmFnTGVhdmUuYmluZChfdGhpcyk7XG5cdCAgICBfdGhpcy5vbkRyYWdPdmVyID0gX3RoaXMub25EcmFnT3Zlci5iaW5kKF90aGlzKTtcblx0ICAgIF90aGlzLm9uRHJvcCA9IF90aGlzLm9uRHJvcC5iaW5kKF90aGlzKTtcblx0XG5cdCAgICBfdGhpcy5zdGF0ZSA9IHtcblx0ICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZVxuXHQgICAgfTtcblx0ICAgIHJldHVybiBfdGhpcztcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhEcm9wem9uZSwgW3tcblx0ICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0ICAgICAgdGhpcy5lbnRlckNvdW50ZXIgPSAwO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJhZ1N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG5cdCAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdTdGFydC5jYWxsKHRoaXMsIGUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25EcmFnRW50ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0VudGVyKGUpIHtcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0ICAgICAgLy8gQ291bnQgdGhlIGRyb3B6b25lIGFuZCBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgZW50ZXJlZC5cblx0ICAgICAgKyt0aGlzLmVudGVyQ291bnRlcjtcblx0XG5cdCAgICAgIC8vIFRoaXMgaXMgdHJpY2t5LiBEdXJpbmcgdGhlIGRyYWcgZXZlbiB0aGUgZGF0YVRyYW5zZmVyLmZpbGVzIGlzIG51bGxcblx0ICAgICAgLy8gQnV0IENocm9tZSBpbXBsZW1lbnRzIHNvbWUgZHJhZyBzdG9yZSwgd2hpY2ggaXMgYWNjZXNpYmxlIHZpYSBkYXRhVHJhbnNmZXIuaXRlbXNcblx0ICAgICAgdmFyIGRhdGFUcmFuc2Zlckl0ZW1zID0gZS5kYXRhVHJhbnNmZXIgJiYgZS5kYXRhVHJhbnNmZXIuaXRlbXMgPyBlLmRhdGFUcmFuc2Zlci5pdGVtcyA6IFtdO1xuXHRcblx0ICAgICAgLy8gTm93IHdlIG5lZWQgdG8gY29udmVydCB0aGUgRGF0YVRyYW5zZmVyTGlzdCB0byBBcnJheVxuXHQgICAgICB2YXIgYWxsRmlsZXNBY2NlcHRlZCA9IHRoaXMuYWxsRmlsZXNBY2NlcHRlZChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhVHJhbnNmZXJJdGVtcykpO1xuXHRcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgaXNEcmFnQWN0aXZlOiBhbGxGaWxlc0FjY2VwdGVkLFxuXHQgICAgICAgIGlzRHJhZ1JlamVjdDogIWFsbEZpbGVzQWNjZXB0ZWRcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdFbnRlcikge1xuXHQgICAgICAgIHRoaXMucHJvcHMub25EcmFnRW50ZXIuY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJhZ092ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ092ZXIoZSkge1xuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvbkRyYWdMZWF2ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnTGVhdmUoZSkge1xuXHQgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHQgICAgICAvLyBPbmx5IGRlYWN0aXZhdGUgb25jZSB0aGUgZHJvcHpvbmUgYW5kIGFsbCBjaGlsZHJlbiB3YXMgbGVmdC5cblx0ICAgICAgaWYgKC0tdGhpcy5lbnRlckNvdW50ZXIgPiAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB0aGlzLnNldFN0YXRlKHtcblx0ICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuXHQgICAgICAgIGlzRHJhZ1JlamVjdDogZmFsc2Vcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdMZWF2ZSkge1xuXHQgICAgICAgIHRoaXMucHJvcHMub25EcmFnTGVhdmUuY2FsbCh0aGlzLCBlKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ29uRHJvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25Ecm9wKGUpIHtcblx0ICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0ICAgICAgLy8gUmVzZXQgdGhlIGNvdW50ZXIgYWxvbmcgd2l0aCB0aGUgZHJhZyBvbiBhIGRyb3AuXG5cdCAgICAgIHRoaXMuZW50ZXJDb3VudGVyID0gMDtcblx0XG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoe1xuXHQgICAgICAgIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG5cdCAgICAgICAgaXNEcmFnUmVqZWN0OiBmYWxzZVxuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIHZhciBkcm9wcGVkRmlsZXMgPSBlLmRhdGFUcmFuc2ZlciA/IGUuZGF0YVRyYW5zZmVyLmZpbGVzIDogZS50YXJnZXQuZmlsZXM7XG5cdCAgICAgIHZhciBtYXggPSB0aGlzLnByb3BzLm11bHRpcGxlID8gZHJvcHBlZEZpbGVzLmxlbmd0aCA6IE1hdGgubWluKGRyb3BwZWRGaWxlcy5sZW5ndGgsIDEpO1xuXHQgICAgICB2YXIgZmlsZXMgPSBbXTtcblx0XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcblx0ICAgICAgICB2YXIgZmlsZSA9IGRyb3BwZWRGaWxlc1tpXTtcblx0ICAgICAgICAvLyBXZSBtaWdodCB3YW50IHRvIGRpc2FibGUgdGhlIHByZXZpZXcgY3JlYXRpb24gdG8gc3VwcG9ydCBiaWcgZmlsZXNcblx0ICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZVByZXZpZXcpIHtcblx0ICAgICAgICAgIGZpbGUucHJldmlldyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAodGhpcy5hbGxGaWxlc0FjY2VwdGVkKGZpbGVzKSkge1xuXHQgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJvcCkge1xuXHQgICAgICAgICAgdGhpcy5wcm9wcy5vbkRyb3AuY2FsbCh0aGlzLCBmaWxlcywgZSk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyb3BBY2NlcHRlZCkge1xuXHQgICAgICAgICAgdGhpcy5wcm9wcy5vbkRyb3BBY2NlcHRlZC5jYWxsKHRoaXMsIGZpbGVzLCBlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKHRoaXMucHJvcHMub25Ecm9wUmVqZWN0ZWQpIHtcblx0ICAgICAgICAgIHRoaXMucHJvcHMub25Ecm9wUmVqZWN0ZWQuY2FsbCh0aGlzLCBmaWxlcywgZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnb25DbGljaycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljaygpIHtcblx0ICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVDbGljaykge1xuXHQgICAgICAgIHRoaXMub3BlbigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnYWxsRmlsZXNBY2NlcHRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYWxsRmlsZXNBY2NlcHRlZChmaWxlcykge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblx0XG5cdCAgICAgIHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkge1xuXHQgICAgICAgIHJldHVybiAoMCwgX2F0dHJBY2NlcHQyLmRlZmF1bHQpKGZpbGUsIF90aGlzMi5wcm9wcy5hY2NlcHQpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdvcGVuJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuXHQgICAgICB0aGlzLmZpbGVJbnB1dEVsLnZhbHVlID0gbnVsbDtcblx0ICAgICAgdGhpcy5maWxlSW5wdXRFbC5jbGljaygpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuXHQgICAgICB2YXIgYWNjZXB0ID0gX3Byb3BzLmFjY2VwdDtcblx0ICAgICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcy5hY3RpdmVDbGFzc05hbWU7XG5cdCAgICAgIHZhciBpbnB1dFByb3BzID0gX3Byb3BzLmlucHV0UHJvcHM7XG5cdCAgICAgIHZhciBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZTtcblx0ICAgICAgdmFyIG5hbWUgPSBfcHJvcHMubmFtZTtcblx0ICAgICAgdmFyIHJlamVjdENsYXNzTmFtZSA9IF9wcm9wcy5yZWplY3RDbGFzc05hbWU7XG5cdFxuXHQgICAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnYWNjZXB0JywgJ2FjdGl2ZUNsYXNzTmFtZScsICdpbnB1dFByb3BzJywgJ211bHRpcGxlJywgJ25hbWUnLCAncmVqZWN0Q2xhc3NOYW1lJ10pO1xuXHRcblx0ICAgICAgdmFyIGFjdGl2ZVN0eWxlID0gcmVzdC5hY3RpdmVTdHlsZTtcblx0ICAgICAgdmFyIGNsYXNzTmFtZSA9IHJlc3QuY2xhc3NOYW1lO1xuXHQgICAgICB2YXIgcmVqZWN0U3R5bGUgPSByZXN0LnJlamVjdFN0eWxlO1xuXHQgICAgICB2YXIgc3R5bGUgPSByZXN0LnN0eWxlO1xuXHRcblx0ICAgICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJlc3QsIFsnYWN0aXZlU3R5bGUnLCAnY2xhc3NOYW1lJywgJ3JlamVjdFN0eWxlJywgJ3N0eWxlJ10pO1xuXHRcblx0ICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdCAgICAgIHZhciBpc0RyYWdBY3RpdmUgPSBfc3RhdGUuaXNEcmFnQWN0aXZlO1xuXHQgICAgICB2YXIgaXNEcmFnUmVqZWN0ID0gX3N0YXRlLmlzRHJhZ1JlamVjdDtcblx0XG5cdFxuXHQgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgJyc7XG5cdFxuXHQgICAgICBpZiAoaXNEcmFnQWN0aXZlICYmIGFjdGl2ZUNsYXNzTmFtZSkge1xuXHQgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY3RpdmVDbGFzc05hbWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGlzRHJhZ1JlamVjdCAmJiByZWplY3RDbGFzc05hbWUpIHtcblx0ICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgcmVqZWN0Q2xhc3NOYW1lO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoIWNsYXNzTmFtZSAmJiAhc3R5bGUgJiYgIWFjdGl2ZVN0eWxlICYmICFyZWplY3RTdHlsZSkge1xuXHQgICAgICAgIHN0eWxlID0ge1xuXHQgICAgICAgICAgd2lkdGg6IDIwMCxcblx0ICAgICAgICAgIGhlaWdodDogMjAwLFxuXHQgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG5cdCAgICAgICAgICBib3JkZXJDb2xvcjogJyM2NjYnLFxuXHQgICAgICAgICAgYm9yZGVyU3R5bGU6ICdkYXNoZWQnLFxuXHQgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBhY3RpdmVTdHlsZSA9IHtcblx0ICAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHQgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZSdcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJlamVjdFN0eWxlID0ge1xuXHQgICAgICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdCAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZkZGRkJ1xuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBhcHBsaWVkU3R5bGUgPSB2b2lkIDA7XG5cdCAgICAgIGlmIChhY3RpdmVTdHlsZSAmJiBpc0RyYWdBY3RpdmUpIHtcblx0ICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFjdGl2ZVN0eWxlKTtcblx0ICAgICAgfSBlbHNlIGlmIChyZWplY3RTdHlsZSAmJiBpc0RyYWdSZWplY3QpIHtcblx0ICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlamVjdFN0eWxlKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgaW5wdXRBdHRyaWJ1dGVzID0ge1xuXHQgICAgICAgIGFjY2VwdDogYWNjZXB0LFxuXHQgICAgICAgIHR5cGU6ICdmaWxlJyxcblx0ICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcblx0ICAgICAgICBtdWx0aXBsZTogc3VwcG9ydE11bHRpcGxlICYmIG11bHRpcGxlLFxuXHQgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG5cdCAgICAgICAgICByZXR1cm4gX3RoaXMzLmZpbGVJbnB1dEVsID0gZWw7XG5cdCAgICAgICAgfSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHQgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uRHJvcFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgaWYgKG5hbWUgJiYgbmFtZS5sZW5ndGgpIHtcblx0ICAgICAgICBpbnB1dEF0dHJpYnV0ZXMubmFtZSA9IG5hbWU7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIFJlbW92ZSBjdXN0b20gcHJvcGVydGllcyBiZWZvcmUgcGFzc2luZyB0aGVtIHRvIHRoZSB3cmFwcGVyIGRpdiBlbGVtZW50XG5cdCAgICAgIHZhciBjdXN0b21Qcm9wcyA9IFsnZGlzYWJsZVByZXZpZXcnLCAnZGlzYWJsZUNsaWNrJywgJ29uRHJvcEFjY2VwdGVkJywgJ29uRHJvcFJlamVjdGVkJ107XG5cdCAgICAgIHZhciBkaXZQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cdCAgICAgIGN1c3RvbVByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcblx0ICAgICAgICByZXR1cm4gZGVsZXRlIGRpdlByb3BzW3Byb3BdO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAnZGl2Jyxcblx0ICAgICAgICBfZXh0ZW5kcyh7XG5cdCAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0ICAgICAgICAgIHN0eWxlOiBhcHBsaWVkU3R5bGVcblx0ICAgICAgICB9LCBkaXZQcm9wcyAvKiBleHBhbmQgdXNlciBwcm92aWRlZCBwcm9wcyBmaXJzdCBzbyBldmVudCBoYW5kbGVycyBhcmUgbmV2ZXIgb3ZlcnJpZGRlbiAqLywge1xuXHQgICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuXHQgICAgICAgICAgb25EcmFnU3RhcnQ6IHRoaXMub25EcmFnU3RhcnQsXG5cdCAgICAgICAgICBvbkRyYWdFbnRlcjogdGhpcy5vbkRyYWdFbnRlcixcblx0ICAgICAgICAgIG9uRHJhZ092ZXI6IHRoaXMub25EcmFnT3Zlcixcblx0ICAgICAgICAgIG9uRHJhZ0xlYXZlOiB0aGlzLm9uRHJhZ0xlYXZlLFxuXHQgICAgICAgICAgb25Ecm9wOiB0aGlzLm9uRHJvcFxuXHQgICAgICAgIH0pLFxuXHQgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG5cdCAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMgLyogZXhwYW5kIHVzZXIgcHJvdmlkZWQgaW5wdXRQcm9wcyBmaXJzdCBzbyBpbnB1dEF0dHJpYnV0ZXMgb3ZlcnJpZGUgdGhlbSAqLywgaW5wdXRBdHRyaWJ1dGVzKSlcblx0ICAgICAgKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBEcm9wem9uZTtcblx0fShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblx0XG5cdERyb3B6b25lLmRlZmF1bHRQcm9wcyA9IHtcblx0ICBkaXNhYmxlUHJldmlldzogZmFsc2UsXG5cdCAgZGlzYWJsZUNsaWNrOiBmYWxzZSxcblx0ICBtdWx0aXBsZTogdHJ1ZVxuXHR9O1xuXHRcblx0RHJvcHpvbmUucHJvcFR5cGVzID0ge1xuXHQgIC8vIE92ZXJyaWRpbmcgZHJvcCBiZWhhdmlvclxuXHQgIG9uRHJvcDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuXHQgIG9uRHJvcEFjY2VwdGVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG5cdCAgb25Ecm9wUmVqZWN0ZWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcblx0XG5cdCAgLy8gT3ZlcnJpZGluZyBkcmFnIGJlaGF2aW9yXG5cdCAgb25EcmFnU3RhcnQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcblx0ICBvbkRyYWdFbnRlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuXHQgIG9uRHJhZ0xlYXZlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG5cdFxuXHQgIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm5vZGUsIC8vIENvbnRlbnRzIG9mIHRoZSBkcm9wem9uZVxuXHQgIHN0eWxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCwgLy8gQ1NTIHN0eWxlcyB0byBhcHBseVxuXHQgIGFjdGl2ZVN0eWxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCwgLy8gQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSBhY2NlcHRlZFxuXHQgIHJlamVjdFN0eWxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCwgLy8gQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSByZWplY3RlZFxuXHQgIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIC8vIE9wdGlvbmFsIGNsYXNzTmFtZVxuXHQgIGFjdGl2ZUNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgYWNjZXB0ZWQgc3RhdGVcblx0ICByZWplY3RDbGFzc05hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHJlamVjdGVkIHN0YXRlXG5cdFxuXHQgIGRpc2FibGVQcmV2aWV3OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsIC8vIEVuYWJsZS9kaXNhYmxlIHByZXZpZXcgZ2VuZXJhdGlvblxuXHQgIGRpc2FibGVDbGljazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLCAvLyBEaXNhbGxvdyBjbGlja2luZyBvbiB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIG9wZW4gZmlsZSBkaWFsb2dcblx0XG5cdCAgaW5wdXRQcm9wczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsIC8vIFBhc3MgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIHRvIHRoZSA8aW5wdXQgdHlwZT1cImZpbGVcIi8+IHRhZ1xuXHQgIG11bHRpcGxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsIC8vIEFsbG93IGRyb3BwaW5nIG11bHRpcGxlIGZpbGVzXG5cdCAgYWNjZXB0OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZywgLy8gQWxsb3cgc3BlY2lmaWMgdHlwZXMgb2YgZmlsZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vb2tvbmV0L2F0dHItYWNjZXB0IGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdCAgbmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcgLy8gbmFtZSBhdHRyaWJ1dGUgZm9yIHRoZSBpbnB1dCB0YWdcblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IERyb3B6b25lO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7aWYocltlXSlyZXR1cm4gcltlXS5leHBvcnRzO3ZhciBvPXJbZV09e2V4cG9ydHM6e30saWQ6ZSxsb2FkZWQ6ITF9O3JldHVybiB0W2VdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gbi5tPXQsbi5jPXIsbi5wPVwiXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAscig4KSxyKDkpLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYodCYmbil7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgcj1uLnNwbGl0KFwiLFwiKSxlPXQubmFtZXx8XCJcIixvPXQudHlwZXx8XCJcIixpPW8ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTtyZXR1cm57djpyLnNvbWUoZnVuY3Rpb24odCl7dmFyIG49dC50cmltKCk7cmV0dXJuXCIuXCI9PT1uLmNoYXJBdCgwKT9lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgobi50b0xvd2VyQ2FzZSgpKTovXFwvXFwqJC8udGVzdChuKT9pPT09bi5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpOm89PT1ufSl9fSgpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiByKXJldHVybiByLnZ9cmV0dXJuITB9LHQuZXhwb3J0cz1uW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9e3ZlcnNpb246XCIxLjIuMlwifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPXIpfSxmdW5jdGlvbih0LG4pe3ZhciByPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPXIpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPXIoMSksaT1yKDQpLHU9cigxOSksYz1cInByb3RvdHlwZVwiLGY9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fSxzPWZ1bmN0aW9uKHQsbixyKXt2YXIgYSxwLGwsZCx5PXQmcy5HLGg9dCZzLlAsdj15P2U6dCZzLlM/ZVtuXXx8KGVbbl09e30pOihlW25dfHx7fSlbY10seD15P286b1tuXXx8KG9bbl09e30pO3kmJihyPW4pO2ZvcihhIGluIHIpcD0hKHQmcy5GKSYmdiYmYSBpbiB2LGw9KHA/djpyKVthXSxkPXQmcy5CJiZwP2YobCxlKTpoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2YoRnVuY3Rpb24uY2FsbCxsKTpsLHYmJiFwJiZ1KHYsYSxsKSx4W2FdIT1sJiZpKHgsYSxkKSxoJiYoKHhbY118fCh4W2NdPXt9KSlbYV09bCl9O2UuY29yZT1vLHMuRj0xLHMuRz0yLHMuUz00LHMuUD04LHMuQj0xNixzLlc9MzIsdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDUpLG89cigxOCk7dC5leHBvcnRzPXIoMjIpP2Z1bmN0aW9uKHQsbixyKXtyZXR1cm4gZS5zZXREZXNjKHQsbixvKDEscikpfTpmdW5jdGlvbih0LG4scil7cmV0dXJuIHRbbl09cix0fX0sZnVuY3Rpb24odCxuKXt2YXIgcj1PYmplY3Q7dC5leHBvcnRzPXtjcmVhdGU6ci5jcmVhdGUsZ2V0UHJvdG86ci5nZXRQcm90b3R5cGVPZixpc0VudW06e30ucHJvcGVydHlJc0VudW1lcmFibGUsZ2V0RGVzYzpyLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixzZXREZXNjOnIuZGVmaW5lUHJvcGVydHksc2V0RGVzY3M6ci5kZWZpbmVQcm9wZXJ0aWVzLGdldEtleXM6ci5rZXlzLGdldE5hbWVzOnIuZ2V0T3duUHJvcGVydHlOYW1lcyxnZXRTeW1ib2xzOnIuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGVhY2g6W10uZm9yRWFjaH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9MCxlPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrcitlKS50b1N0cmluZygzNikpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjApKFwid2tzXCIpLG89cigyKS5TeW1ib2w7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfHwoZVt0XT1vJiZvW3RdfHwob3x8cig2KSkoXCJTeW1ib2wuXCIrdCkpfX0sZnVuY3Rpb24odCxuLHIpe3IoMjYpLHQuZXhwb3J0cz1yKDEpLkFycmF5LnNvbWV9LGZ1bmN0aW9uKHQsbixyKXtyKDI1KSx0LmV4cG9ydHM9cigxKS5TdHJpbmcuZW5kc1dpdGh9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt2YXIgcj17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIuY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDEwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIpe2lmKGUodCksdm9pZCAwPT09bilyZXR1cm4gdDtzd2l0Y2gocil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdC5jYWxsKG4scil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gdC5jYWxsKG4scixlKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihyLGUsbyl7cmV0dXJuIHQuY2FsbChuLHIsZSxvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuPS8uLzt0cnl7XCIvLi9cIlt0XShuKX1jYXRjaChlKXt0cnl7cmV0dXJuIG5bcig3KShcIm1hdGNoXCIpXT0hMSwhXCIvLi9cIlt0XShuKX1jYXRjaChvKXt9fXJldHVybiEwfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNiksbz1yKDExKSxpPXIoNykoXCJtYXRjaFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIGUodCkmJih2b2lkIDAhPT0obj10W2ldKT8hIW46XCJSZWdFeHBcIj09byh0KSl9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTpufX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89cig0KSxpPXIoNikoXCJzcmNcIiksdT1cInRvU3RyaW5nXCIsYz1GdW5jdGlvblt1XSxmPShcIlwiK2MpLnNwbGl0KHUpO3IoMSkuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbih0KXtyZXR1cm4gYy5jYWxsKHQpfSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyLHUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihvKHIsaSx0W25dP1wiXCIrdFtuXTpmLmpvaW4oU3RyaW5nKG4pKSksXCJuYW1lXCJpbiByfHwoci5uYW1lPW4pKSx0PT09ZT90W25dPXI6KHV8fGRlbGV0ZSB0W25dLG8odCxuLHIpKX0pKEZ1bmN0aW9uLnByb3RvdHlwZSx1LGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcyYmdGhpc1tpXXx8Yy5jYWxsKHRoaXMpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPWVbb118fChlW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlbdF18fChpW3RdPXt9KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE3KSxvPXIoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7aWYoZShuKSl0aHJvdyBUeXBlRXJyb3IoXCJTdHJpbmcjXCIrcitcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7cmV0dXJuIFN0cmluZyhvKHQpKX19LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9IXIoMTUpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4pe3ZhciByPU1hdGguY2VpbCxlPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpc05hTih0PSt0KT8wOih0PjA/ZTpyKSh0KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIzKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28oZSh0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMyksbz1yKDI0KSxpPXIoMjEpLHU9XCJlbmRzV2l0aFwiLGM9XCJcIlt1XTtlKGUuUCtlLkYqcigxNCkodSksXCJTdHJpbmdcIix7ZW5kc1dpdGg6ZnVuY3Rpb24odCl7dmFyIG49aSh0aGlzLHQsdSkscj1hcmd1bWVudHMsZT1yLmxlbmd0aD4xP3JbMV06dm9pZCAwLGY9byhuLmxlbmd0aCkscz12b2lkIDA9PT1lP2Y6TWF0aC5taW4obyhlKSxmKSxhPVN0cmluZyh0KTtyZXR1cm4gYz9jLmNhbGwobixhLHMpOm4uc2xpY2Uocy1hLmxlbmd0aCxzKT09PWF9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDUpLG89cigzKSxpPXIoMSkuQXJyYXl8fEFycmF5LHU9e30sYz1mdW5jdGlvbih0LG4pe2UuZWFjaC5jYWxsKHQuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKHQpe3ZvaWQgMD09biYmdCBpbiBpP3VbdF09aVt0XTp0IGluW10mJih1W3RdPXIoMTIpKEZ1bmN0aW9uLmNhbGwsW11bdF0sbikpfSl9O2MoXCJwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzXCIsMSksYyhcImluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXNcIiwzKSxjKFwiam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLHJlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGxcIiksbyhvLlMsXCJBcnJheVwiLHUpfV0pO1xuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyAvLyBCcm93c2VyIHdpbmRvd1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gV2ViIFdvcmtlclxuICByb290ID0gc2VsZjtcbn0gZWxzZSB7IC8vIE90aGVyIGVudmlyb25tZW50c1xuICBjb25zb2xlLndhcm4oXCJVc2luZyBicm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGluIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuICByb290ID0gdGhpcztcbn1cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVxdWVzdEJhc2UgPSByZXF1aXJlKCcuL3JlcXVlc3QtYmFzZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxudmFyIHJlcXVlc3QgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcmVxdWVzdCcpLmJpbmQobnVsbCwgUmVxdWVzdCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICB0aHJvdyBFcnJvcihcIkJyb3dzZXItb25seSB2ZXJpc29uIG9mIHN1cGVyYWdlbnQgY291bGQgbm90IGZpbmQgWEhSXCIpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIG9ialtrZXldKTtcbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEhlbHBzICdzZXJpYWxpemUnIHdpdGggc2VyaWFsaXppbmcgYXJyYXlzLlxuICogTXV0YXRlcyB0aGUgcGFpcnMgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFpcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICovXG5cbmZ1bmN0aW9uIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHZhbCkge1xuICBpZiAodmFsICE9IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHYpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBmb3IodmFyIHN1YmtleSBpbiB2YWwpIHtcbiAgICAgICAgcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsIGtleSArICdbJyArIHN1YmtleSArICddJywgdmFsW3N1YmtleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpKTtcbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYWlyO1xuICB2YXIgcG9zO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwb3MgPSBwYWlyLmluZGV4T2YoJz0nKTtcbiAgICBpZiAocG9zID09IC0xKSB7XG4gICAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXIpXSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXIuc2xpY2UoMCwgcG9zKSldID1cbiAgICAgICAgZGVjb2RlVVJJQ29tcG9uZW50KHBhaXIuc2xpY2UocG9zICsgMSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogRXhwb3NlIHBhcnNlci5cbiAqL1xuXG5yZXF1ZXN0LnBhcnNlU3RyaW5nID0gcGFyc2VTdHJpbmc7XG5cbi8qKlxuICogRGVmYXVsdCBNSU1FIHR5cGUgbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqL1xuXG5yZXF1ZXN0LnR5cGVzID0ge1xuICBodG1sOiAndGV4dC9odG1sJyxcbiAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB4bWw6ICdhcHBsaWNhdGlvbi94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbiB9O1xuXG4gLyoqXG4gICogRGVmYXVsdCBwYXJzZXJzLlxuICAqXG4gICogICAgIHN1cGVyYWdlbnQucGFyc2VbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24oc3RyKXtcbiAgKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gICogICAgIH07XG4gICpcbiAgKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdmFyIGluZGV4O1xuICB2YXIgbGluZTtcbiAgdmFyIGZpZWxkO1xuICB2YXIgdmFsO1xuXG4gIGxpbmVzLnBvcCgpOyAvLyB0cmFpbGluZyBDUkxGXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGluZGV4KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHRyaW0obGluZS5zbGljZShpbmRleCArIDEpKTtcbiAgICBmaWVsZHNbZmllbGRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgbWltZWAgaXMganNvbiBvciBoYXMgK2pzb24gc3RydWN0dXJlZCBzeW50YXggc3VmZml4LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtaW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNKU09OKG1pbWUpIHtcbiAgcmV0dXJuIC9bXFwvK11qc29uXFxiLy50ZXN0KG1pbWUpO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKSxcbiAgICAgICAga2V5ID0gcGFydHMuc2hpZnQoKSxcbiAgICAgICAgdmFsID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsKSBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZShyZXEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgLy8gcmVzcG9uc2VUZXh0IGlzIGFjY2Vzc2libGUgb25seSBpZiByZXNwb25zZVR5cGUgaXMgJycgb3IgJ3RleHQnIGFuZCBvbiBvbGRlciBicm93c2Vyc1xuICB0aGlzLnRleHQgPSAoKHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyAmJiAodGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAnJyB8fCB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JykpIHx8IHR5cGVvZiB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnKVxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dFxuICAgICA6IG51bGw7XG4gIHRoaXMuc3RhdHVzVGV4dCA9IHRoaXMucmVxLnhoci5zdGF0dXNUZXh0O1xuICB0aGlzLl9zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5fc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMuX3BhcnNlQm9keSh0aGlzLnRleHQgPyB0aGlzLnRleHQgOiB0aGlzLnhoci5yZXNwb25zZSlcbiAgICA6IG51bGw7XG59XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5fc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gIC8vIGNvbnRlbnQtdHlwZVxuICB2YXIgY3QgPSB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gIHRoaXMudHlwZSA9IHR5cGUoY3QpO1xuXG4gIC8vIHBhcmFtc1xuICB2YXIgb2JqID0gcGFyYW1zKGN0KTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgdGhpc1trZXldID0gb2JqW2tleV07XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLl9wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIGlmICghcGFyc2UgJiYgaXNKU09OKHRoaXMudHlwZSkpIHtcbiAgICBwYXJzZSA9IHJlcXVlc3QucGFyc2VbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgfVxuICByZXR1cm4gcGFyc2UgJiYgc3RyICYmIChzdHIubGVuZ3RoIHx8IHN0ciBpbnN0YW5jZW9mIE9iamVjdClcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5fc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9OyAvLyBwcmVzZXJ2ZXMgaGVhZGVyIG5hbWUgY2FzZVxuICB0aGlzLl9oZWFkZXIgPSB7fTsgLy8gY29lcmNlcyBoZWFkZXIgbmFtZXMgdG8gbG93ZXJjYXNlXG4gIHRoaXMub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVyciA9IG51bGw7XG4gICAgdmFyIHJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgICAvLyBpc3N1ZSAjNjc1OiByZXR1cm4gdGhlIHJhdyByZXNwb25zZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgZXJyLnJhd1Jlc3BvbnNlID0gc2VsZi54aHIgJiYgc2VsZi54aHIucmVzcG9uc2VUZXh0ID8gc2VsZi54aHIucmVzcG9uc2VUZXh0IDogbnVsbDtcbiAgICAgIC8vIGlzc3VlICM4NzY6IHJldHVybiB0aGUgaHR0cCBzdGF0dXMgY29kZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgZXJyLnN0YXR1c0NvZGUgPSBzZWxmLnhociAmJiBzZWxmLnhoci5zdGF0dXMgPyBzZWxmLnhoci5zdGF0dXMgOiBudWxsO1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIHZhciBuZXdfZXJyO1xuICAgIHRyeSB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA8IDIwMCB8fCByZXMuc3RhdHVzID49IDMwMCkge1xuICAgICAgICBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgICAgICBuZXdfZXJyLm9yaWdpbmFsID0gZXJyO1xuICAgICAgICBuZXdfZXJyLnJlc3BvbnNlID0gcmVzO1xuICAgICAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBuZXdfZXJyID0gZTsgLy8gIzk4NSB0b3VjaGluZyByZXMgbWF5IGNhdXNlIElOVkFMSURfU1RBVEVfRVJSIG9uIG9sZCBBbmRyb2lkXG4gICAgfVxuXG4gICAgLy8gIzEwMDAgZG9uJ3QgY2F0Y2ggZXJyb3JzIGZyb20gdGhlIGNhbGxiYWNrIHRvIGF2b2lkIGRvdWJsZSBjYWxsaW5nIGl0XG4gICAgaWYgKG5ld19lcnIpIHtcbiAgICAgIHNlbGYuY2FsbGJhY2sobmV3X2VyciwgcmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5jYWxsYmFjayhudWxsLCByZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgIGFuZCBgcmVxdWVzdEJhc2VgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuZm9yICh2YXIga2V5IGluIHJlcXVlc3RCYXNlKSB7XG4gIFJlcXVlc3QucHJvdG90eXBlW2tleV0gPSByZXF1ZXN0QmFzZVtrZXldO1xufVxuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCByZXNwb25zZVR5cGUgdG8gYHZhbGAuIFByZXNlbnRseSB2YWxpZCByZXNwb25zZVR5cGVzIGFyZSAnYmxvYicgYW5kXG4gKiAnYXJyYXlidWZmZXInLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnJlc3BvbnNlVHlwZSgnYmxvYicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKHZhbCl7XG4gIHRoaXMuX3Jlc3BvbnNlVHlwZSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB3aXRoICd0eXBlJyBwcm9wZXJ0eSAnYXV0bycgb3IgJ2Jhc2ljJyAoZGVmYXVsdCAnYmFzaWMnKVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzLCBvcHRpb25zKXtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6ICdiYXNpYydcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKG9wdGlvbnMudHlwZSkge1xuICAgIGNhc2UgJ2Jhc2ljJzpcbiAgICAgIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgICAgIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYXV0byc6XG4gICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcjtcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzO1xuICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2NvbnRlbnQnLCBuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgZmlsZW5hbWUpe1xuICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChmaWVsZCwgZmlsZSwgZmlsZW5hbWUgfHwgZmlsZS5uYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbigpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB9XG4gIHJldHVybiB0aGlzLl9mb3JtRGF0YTtcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdSZXF1ZXN0IGhhcyBiZWVuIHRlcm1pbmF0ZWRcXG5Qb3NzaWJsZSBjYXVzZXM6IHRoZSBuZXR3b3JrIGlzIG9mZmxpbmUsIE9yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4sIHRoZSBwYWdlIGlzIGJlaW5nIHVubG9hZGVkLCBldGMuJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG5cbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gdGhpcy5tZXRob2Q7XG4gIGVyci51cmwgPSB0aGlzLnVybDtcblxuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuX3RpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogQ29tcG9zZSBxdWVyeXN0cmluZyB0byBhcHBlbmQgdG8gcmVxLnVybFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLl9hcHBlbmRRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IHJlcXVlc3QuZ2V0WEhSKCk7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBzdGF0ZSBjaGFuZ2VcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKDQgIT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcblxuICAgIC8vIEluIElFOSwgcmVhZHMgdG8gYW55IHByb3BlcnR5IChlLmcuIHN0YXR1cykgb2ZmIG9mIGFuIGFib3J0ZWQgWEhSIHdpbGxcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVycm9yIFwiQ291bGQgbm90IGNvbXBsZXRlIHRoZSBvcGVyYXRpb24gZHVlIHRvIGVycm9yIGMwMGMwMjNmXCJcbiAgICB2YXIgc3RhdHVzO1xuICAgIHRyeSB7IHN0YXR1cyA9IHhoci5zdGF0dXMgfSBjYXRjaChlKSB7IHN0YXR1cyA9IDA7IH1cblxuICAgIGlmICgwID09IHN0YXR1cykge1xuICAgICAgaWYgKHNlbGYudGltZWRvdXQpIHJldHVybiBzZWxmLl90aW1lb3V0RXJyb3IoKTtcbiAgICAgIGlmIChzZWxmLl9hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIGUuZGlyZWN0aW9uID0gJ2Rvd25sb2FkJztcbiAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gIH07XG4gIGlmICh0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3M7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAoeGhyLnVwbG9hZCAmJiB0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3M7XG4gICAgfVxuICB9IGNhdGNoKGUpIHtcbiAgICAvLyBBY2Nlc3NpbmcgeGhyLnVwbG9hZCBmYWlscyBpbiBJRSBmcm9tIGEgd2ViIHdvcmtlciwgc28ganVzdCBwcmV0ZW5kIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgLy8gUmVwb3J0ZWQgaGVyZTpcbiAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgzNzI0NS94bWxodHRwcmVxdWVzdC11cGxvYWQtdGhyb3dzLWludmFsaWQtYXJndW1lbnQtd2hlbi11c2VkLWZyb20td2ViLXdvcmtlci1jb250ZXh0XG4gIH1cblxuICAvLyB0aW1lb3V0XG4gIGlmICh0aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi50aW1lZG91dCA9IHRydWU7XG4gICAgICBzZWxmLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICAvLyBxdWVyeXN0cmluZ1xuICB0aGlzLl9hcHBlbmRRdWVyeVN0cmluZygpO1xuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgaWYgKHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCkge1xuICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSwgdGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gIH0gZWxzZSB7XG4gICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgfVxuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgY29udGVudFR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIHZhciBzZXJpYWxpemUgPSB0aGlzLl9zZXJpYWxpemVyIHx8IHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICBpZiAoIXNlcmlhbGl6ZSAmJiBpc0pTT04oY29udGVudFR5cGUpKSBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICBpZiAodGhpcy5fcmVzcG9uc2VUeXBlKSB7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG5cbiAgLy8gSUUxMSB4aHIuc2VuZCh1bmRlZmluZWQpIHNlbmRzICd1bmRlZmluZWQnIHN0cmluZyBhcyBQT1NUIHBheWxvYWQgKGluc3RlYWQgb2Ygbm90aGluZylcbiAgLy8gV2UgbmVlZCBudWxsIGhlcmUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgeGhyLnNlbmQodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnID8gZGF0YSA6IG51bGwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0dFVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogT1BUSU9OUyBxdWVyeSB0byBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3Qub3B0aW9ucyA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkZWwodXJsLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxucmVxdWVzdFsnZGVsJ10gPSBkZWw7XG5yZXF1ZXN0WydkZWxldGUnXSA9IGRlbDtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucHV0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcbiIsIi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG51bGwgIT09IG9iaiAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogTW9kdWxlIG9mIG1peGVkLWluIGZ1bmN0aW9ucyBzaGFyZWQgYmV0d2VlbiBub2RlIGFuZCBjbGllbnQgY29kZVxuICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzLW9iamVjdCcpO1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gX2NsZWFyVGltZW91dCgpe1xuICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgcmVzcG9uc2UgYm9keSBwYXJzZXJcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIGNvbnZlcnQgaW5jb21pbmcgZGF0YSBpbnRvIHJlcXVlc3QuYm9keVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiBwYXJzZShmbil7XG4gIHRoaXMuX3BhcnNlciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXF1ZXN0IGJvZHkgc2VyaWFsaXplclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBkYXRhIHNldCB2aWEgLnNlbmQgb3IgLmF0dGFjaCBpbnRvIHBheWxvYWQgdG8gc2VuZFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGZuKXtcbiAgdGhpcy5fc2VyaWFsaXplciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnRpbWVvdXQgPSBmdW5jdGlvbiB0aW1lb3V0KG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICovXG5cbmV4cG9ydHMudGhlbiA9IGZ1bmN0aW9uIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmICghdGhpcy5fZnVsbGZpbGxlZFByb21pc2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5fZnVsbGZpbGxlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihpbm5lclJlc29sdmUsIGlubmVyUmVqZWN0KXtcbiAgICAgIHNlbGYuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgICAgICAgaWYgKGVycikgaW5uZXJSZWplY3QoZXJyKTsgZWxzZSBpbm5lclJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG59XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cbmV4cG9ydHMudXNlID0gZnVuY3Rpb24gdXNlKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuXG4vKipcbiAqIEdldCByZXF1ZXN0IGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGhlYWRlciBgZmllbGRgIHZhbHVlLlxuICogVGhpcyBpcyBhIGRlcHJlY2F0ZWQgaW50ZXJuYWwgQVBJLiBVc2UgYC5nZXQoZmllbGQpYCBpbnN0ZWFkLlxuICpcbiAqIChnZXRIZWFkZXIgaXMgbm8gbG9uZ2VyIHVzZWQgaW50ZXJuYWxseSBieSB0aGUgc3VwZXJhZ2VudCBjb2RlIGJhc2UpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqIEBkZXByZWNhdGVkXG4gKi9cblxuZXhwb3J0cy5nZXRIZWFkZXIgPSBleHBvcnRzLmdldDtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICovXG5leHBvcnRzLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZXxCdWZmZXJ8ZnMuUmVhZFN0cmVhbX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMuYWJvcnQgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2Fib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhociAmJiB0aGlzLnhoci5hYm9ydCgpOyAvLyBicm93c2VyXG4gIHRoaXMucmVxICYmIHRoaXMucmVxLmFib3J0KCk7IC8vIG5vZGVcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpe1xuICAvLyBUaGlzIGlzIGJyb3dzZXItb25seSBmdW5jdGlvbmFsaXR5LiBOb2RlIHNpZGUgaXMgbm8tb3AuXG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heCByZWRpcmVjdHMgdG8gYG5gLiBEb2VzIG5vdGluZyBpbiBicm93c2VyIFhIUiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucmVkaXJlY3RzID0gZnVuY3Rpb24obil7XG4gIHRoaXMuX21heFJlZGlyZWN0cyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRvIGEgcGxhaW4gamF2YXNjcmlwdCBvYmplY3QgKG5vdCBKU09OIHN0cmluZykgb2Ygc2NhbGFyIHByb3BlcnRpZXMuXG4gKiBOb3RlIGFzIHRoaXMgbWV0aG9kIGlzIGRlc2lnbmVkIHRvIHJldHVybiBhIHVzZWZ1bCBub24tdGhpcyB2YWx1ZSxcbiAqIGl0IGNhbm5vdCBiZSBjaGFpbmVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVzY3JpYmluZyBtZXRob2QsIHVybCwgYW5kIGRhdGEgb2YgdGhpcyByZXF1ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMudG9KU09OID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgIHVybDogdGhpcy51cmwsXG4gICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJcbiAgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqIHdlIGRvbid0IHdhbnQgdG8gc2VyaWFsaXplIHRoZXNlIDopXG4gKlxuICogVE9ETzogZnV0dXJlIHByb29mLCBtb3ZlIHRvIGNvbXBvZW50IGxhbmRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5faXNIb3N0ID0gZnVuY3Rpb24gX2lzSG9zdChvYmopIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxuICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZW5kIGBkYXRhYCBhcyB0aGUgcmVxdWVzdCBib2R5LCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0nKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKG9iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgLy8gZGVmYXVsdCB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIGlmICgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyA9PSB0eXBlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YVxuICAgICAgICA/IHRoaXMuX2RhdGEgKyAnJicgKyBkYXRhXG4gICAgICAgIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFvYmogfHwgdGhpcy5faXNIb3N0KGRhdGEpKSByZXR1cm4gdGhpcztcblxuICAvLyBkZWZhdWx0IHRvIGpzb25cbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuIiwiLy8gVGhlIG5vZGUgYW5kIGJyb3dzZXIgbW9kdWxlcyBleHBvc2UgdmVyc2lvbnMgb2YgdGhpcyB3aXRoIHRoZVxuLy8gYXBwcm9wcmlhdGUgY29uc3RydWN0b3IgZnVuY3Rpb24gYm91bmQgYXMgZmlyc3QgYXJndW1lbnRcbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KFJlcXVlc3RDb25zdHJ1Y3RvciwgbWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdENvbnN0cnVjdG9yKCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmICgyID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3RDb25zdHJ1Y3RvcignR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdENvbnN0cnVjdG9yKG1ldGhvZCwgdXJsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBLRmlsZSBmcm9tICcuL2ZpbGUuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVuZGVyQ2hpbGQ6IGZhbHNlLFxuICAgICAgaWNvbkZvbGRlckNsYXNzOiAnZmEgZmEtZm9sZGVyIGstZm9sZGVyLWljb24nLFxuICAgICAgaWNvbkFycm93Q2xhc3M6ICdmYSBmYS1jYXJldC1yaWdodCdcbiAgICB9XG4gIH1cbiAgdG9vZ2xlRGlyZWN0b3J5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUsIGN1cnJlbnRQcm9wcykgPT4ge1xuICAgICAgaWYgKHByZXZpb3VzU3RhdGUucmVuZGVyQ2hpbGQpIHtcbiAgICAgICAgcHJldmlvdXNTdGF0ZS5yZW5kZXJDaGlsZCA9IGZhbHNlO1xuICAgICAgICBwcmV2aW91c1N0YXRlLmljb25BcnJvd0NsYXNzID0gJ2ZhIGZhLWNhcmV0LXJpZ2h0JztcbiAgICAgICAgcHJldmlvdXNTdGF0ZS5pY29uRm9sZGVyQ2xhc3MgPSAnZmEgZmEtZm9sZGVyIGstZm9sZGVyLWljb24nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlvdXNTdGF0ZS5yZW5kZXJDaGlsZCA9IHRydWU7XG4gICAgICAgIHByZXZpb3VzU3RhdGUuaWNvbkFycm93Q2xhc3MgPSAnZmEgZmEtY2FyZXQtZG93bic7XG4gICAgICAgIHByZXZpb3VzU3RhdGUuaWNvbkZvbGRlckNsYXNzID0gJ2ZhIGZhLWZvbGRlci1vcGVuIGstZm9sZGVyLWljb24nO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlQ2xpY2tEaXJlY3RvcnkoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrQnJhbmNoKHRoaXMucHJvcHMuZmlsZXMsIHRoaXMucHJvcHMucGF0aCwgdGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXG4gICAgLyogY3JlYXRlIGFycmF5IG9mIGNvbXBvbmVudHMgYmFzZWQgb24gZmlsZXMsIGNoZWNrIGlmIHJlbmRlciBjaGlsZCBub2RlIGFuZCBhbHNvIGNoZWNrXG4gICAgICAgaXQgdHlwZXMgYnkgY2hlY2tpbmcgaWYgbm9kZSBoYXMgYSBjaGlsZCBub2RlXG4gICAgKi9cbiAgICB2YXIgcm93cyA9IHRoaXMucHJvcHMuZmlsZXMubWFwKChyb3cpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlckNoaWxkKSB7XG4gICAgICAgIGlmICghIXJvdy5jaGlsZHJlbilcbiAgICAgICAgICByZXR1cm4gKDxEaXJlY3RvcnkgbmFtZT17cm93Lm5hbWV9IGtleT17cm93Lm5hbWV9IGZpbGVzPXtyb3cuY2hpbGRyZW59IHBhdGg9e3Jvdy5wYXRofSBvbkNsaWNrQnJhbmNoPXt0aGlzLnByb3BzLm9uQ2xpY2tCcmFuY2h9Lz4pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gKDxLRmlsZSBuYW1lPXtyb3cubmFtZX0ga2V5PXtyb3cubmFtZX0gcGF0aD17cm93LnBhdGh9IGZpbHRlclRleHQ9e3RoaXMucHJvcHMuZmlsdGVyVGV4dH0vPilcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pY29uQXJyb3dDbGFzc30gb25DbGljaz17dGhpcy50b29nbGVEaXJlY3RvcnkuYmluZCh0aGlzKX0+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNhYmxlLXNlbGVjdCBoaWdobGlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrRGlyZWN0b3J5LmJpbmQodGhpcyl9IG9uRG91YmxlQ2xpY2s9e3RoaXMudG9vZ2xlRGlyZWN0b3J5LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pY29uRm9sZGVyQ2xhc3N9PjwvaT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHVsPntyb3dzfTwvdWw+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtGaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgZmlsZVN0eWxlID0ge1xuICAgICAgZGlzcGxheTonaW5saW5lJyxcbiAgICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICAgIGNvbG9yOiAnZ3JheSdcbiAgICB9O1xuXG4gICAgdmFyIGhyZWYgPSBcInVwbG9hZHMvXCIgKyB0aGlzLnByb3BzLnBhdGguc3BsaXQoa0ZNYW5hZ2VyLnVwbG9hZFBhdGgpWzFdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZT17e21hcmdpbjogJzVweCd9fT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgdmFyIGNodW5rTmFtZXMgPSB0aGlzLnByb3BzLm5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIHZhciBleHQgPSBjaHVua05hbWVzW2NodW5rTmFtZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBzd2l0Y2ggKGV4dCkge1xuICAgICAgICAgICAgY2FzZSBcInBkZlwiOiBmaWxlU3R5bGUuY29sb3I9XCIjRDIwMDAwXCI7IHJldHVybiA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLXBkZi1vXCIgc3R5bGU9e2ZpbGVTdHlsZX0+PC9pPjtcbiAgICAgICAgICAgIGNhc2UgXCJzdmdcIjogZmlsZVN0eWxlLmNvbG9yPVwiZ3JlZW5cIjsgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtaW1hZ2Utb1wiIHN0eWxlPXtmaWxlU3R5bGV9PjwvaT47XG4gICAgICAgICAgICBjYXNlIFwicmFyXCI6IGZpbGVTdHlsZS5jb2xvcj1cIiNEMDg5MzhcIjsgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtemlwLW9cIiBzdHlsZT17ZmlsZVN0eWxlfT48L2k+O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtdGV4dC1vXCIgc3R5bGU9e2ZpbGVTdHlsZX0+PC9pPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiIHN0eWxlPXt7Y29sb3I6J2JsYWNrJyx0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0gdGFyZ2V0PVwiX2JsYW5rXCI+e3RoaXMucHJvcHMubmFtZX08L2E+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnLi9kaXJlY3RvcnkuanN4JztcbmltcG9ydCBLRmlsZSBmcm9tICcuL2ZpbGUuanN4JztcbmltcG9ydCBLRmlsZU1hbmFnZXJTZXJ2aWNlIGZyb20gJy4va0ZpbGVNYW5hZ2VyU2VydmljZS5qc3gnO1xuaW1wb3J0IGtGaWxlTWFuYWdlciBmcm9tICcuL2tGaWxlTWFuYWdlci5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGc1RyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGhhbmRsZU9uQ2xpY2tCcmFuY2goZmlsZXMscGF0aCxyZWYpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0JyYW5jaChmaWxlcyxwYXRoLHJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmKHRoaXMucHJvcHMuZmlsZXMubGVuZ3RoID4gMCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPERpcmVjdG9yeSBuYW1lPXsnLyd9IGtleT17J3Jvb3QnfSBmaWxlcz17dGhpcy5wcm9wcy5maWxlc30gb25DbGlja0JyYW5jaD17dGhpcy5oYW5kbGVPbkNsaWNrQnJhbmNoLmJpbmQodGhpcyl9IHBhdGg9e2tGTWFuYWdlci51cGxvYWRQYXRofS8+XG4gICAgICAgIDwvdWw+XG4gICAgICApO1xuICAgIH1lbHNlXG4gICAgICByZXR1cm4oPHVsPjwvdWw+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGc1RyZWUgZnJvbSAnLi9mc1RyZWUuanN4JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXIuanN4JztcbmltcG9ydCBWaXN1YWxpemVyIGZyb20gJy4vdmlzdWFsaXplci5qc3gnO1xuaW1wb3J0IEtGaWxlTWFuYWdlclNlcnZpY2UgZnJvbSAnLi9rRmlsZU1hbmFnZXJTZXJ2aWNlLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtGaWxlTWFuYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudEJyYW5jaEZpbGVzOiBbXSxcbiAgICAgIGN1cnJlbnRUcmVlUmVmZXJlbmNlOiBudWxsLFxuICAgICAgY3VycmVudFBhdGg6IFwiXCIsXG4gICAgICBzaG93VmlzdWFsaXplOiBmYWxzZSxcbiAgICAgIGZpbGVzOiBbXVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAkLmdldCgnL2ZzcmVhZCcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZXM6IHJlc3VsdC5jaGlsZHJlbn0pO1xuICAgIH0pXG4gIH1cbiAgaGFuZGxlVXNlcklucHV0KGZpbHRlclRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJUZXh0OiBmaWx0ZXJUZXh0fSk7XG4gIH1cbiAgaGFuZGxlQ2xpY2tCcmFuY2goYnJhbmNoRmlsZXMsIHBhdGgsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRCcmFuY2hGaWxlczogYnJhbmNoRmlsZXMsIGN1cnJlbnRUcmVlUmVmZXJlbmNlOiByZWZlcmVuY2UsIGN1cnJlbnRQYXRoOiBwYXRoLCBzaG93VmlzdWFsaXplOiB0cnVlfSlcbiAgfVxuICBoYW5kbGVSZW1vdmVGaWxlKG5hbWUsIHBhdGgpIHtcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRUcmVlUmVmZXJlbmNlLmZvcmNlVXBkYXRlKCk7XG4gIH1cbiAgaGFuZGxlQWRkRmlsZSgpIHtcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRUcmVlUmVmZXJlbmNlLmZvcmNlVXBkYXRlKCk7XG4gIH1cbiAgaGFuZGxlVmlzdWFsaXplQ2xpY2tEaXJlY3RvcnkocHJvcHMpIHtcblxuICAgIHZhciBuZXdDdXJyZW50QnJhbmNoID0gXCJcIjtcblxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+IHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldmlvdXNTdGF0ZS5jdXJyZW50QnJhbmNoRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUuY3VycmVudEJyYW5jaEZpbGVzW2ldLnBhdGggPT09IHByb3BzLnBhdGgpIHtcbiAgICAgICAgICBuZXdDdXJyZW50QnJhbmNoID0gcHJldmlvdXNTdGF0ZS5jdXJyZW50QnJhbmNoRmlsZXNbaV0uY2hpbGRyZW47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGNoYW5nZXMgdGhlIGN1cnJlbnRCcmFuY2hGaWxlcyB0byBuZXdDdXJyZW50QnJhbmNoO1xuICAgICAgLy8gc2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICAgIC8vIFRPRE86IGNoZWNrIHdoeSBkb3Mgbm90IG5lZWQgdG8gc2V0IGN1cnJlbnRUcmVlUmVmZXJlbmNlO1xuICAgICAgcHJldmlvdXNTdGF0ZS5jdXJyZW50QnJhbmNoRmlsZXMgPSBuZXdDdXJyZW50QnJhbmNoO1xuICAgICAgcHJldmlvdXNTdGF0ZS5jdXJyZW50UGF0aCA9IHByb3BzLnBhdGg7XG4gICAgfSlcbiAgfVxuICBiYWNrSG9tZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93VmlzdWFsaXplOiBmYWxzZX0pO1xuICB9XG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB2aXN1YWxpemVyV3JhcHBlckNzcyA9IHtcbiAgICAgIG1pbkhlaWdodDogJzUwMHB4J1xuICAgIH1cblxuICAgIHZhciBzaWRlQmFyV3JhcHBlckNzcyA9IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgekluZGV4OiA1LFxuICAgICAgd2lkdGg6ICcyMyUnLFxuICAgICAgbWluV2lkdGg6ICcyMDBweCcsXG4gICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjA2KScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtd2hcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17c2lkZUJhcldyYXBwZXJDc3N9PlxuICAgICAgICAgIDxGc1RyZWUgb25DbGlja0JyYW5jaD17dGhpcy5oYW5kbGVDbGlja0JyYW5jaC5iaW5kKHRoaXMpfSBmaWxlcz17dGhpcy5zdGF0ZS5maWxlc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17dmlzdWFsaXplcldyYXBwZXJDc3N9PlxuICAgICAgICAgIHsodGhpcy5zdGF0ZS5zaG93VmlzdWFsaXplKVxuICAgICAgICAgICAgPyA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaXN1YWxpemVyIGJyYW5jaEZpbGVzPXt0aGlzLnN0YXRlLmN1cnJlbnRCcmFuY2hGaWxlc30gY3VycmVudFBhdGg9e3RoaXMuc3RhdGUuY3VycmVudFBhdGh9IG9uUmVtb3ZlRmlsZT17dGhpcy5oYW5kbGVSZW1vdmVGaWxlLmJpbmQodGhpcyl9IG9uQWRkRmlsZT17dGhpcy5oYW5kbGVBZGRGaWxlLmJpbmQodGhpcyl9IG9uQmFja0hvbWU9e3RoaXMuYmFja0hvbWUuYmluZCh0aGlzKX0gb25Eb3VibGVDbGlja0RpcmVjdG9yeT17dGhpcy5oYW5kbGVWaXN1YWxpemVDbGlja0RpcmVjdG9yeS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbG9nb1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+ay1maWxlbWFuYWdlcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlYXJjaEJhcj48L1NlYXJjaEJhcj5cbiAgICAgICAgICAgIDwvZGl2PlxufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG4iLCJcbmxldCBpbnN0YW5jZUtGaWxlTWFuYWdlclNlcnZpY2UgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLRmlsZU1hbmFnZXJTZXJ2aWNle1xuICBjb25zdHJ1Y3RvcihicmFuY2hGaWxlcyl7XG4gICAgaWYoIWluc3RhbmNlS0ZpbGVNYW5hZ2VyU2VydmljZSl7XG4gICAgICBpbnN0YW5jZUtGaWxlTWFuYWdlclNlcnZpY2UgPSB0aGlzO1xuICAgICAgcmV0dXJuIGluc3RhbmNlS0ZpbGVNYW5hZ2VyU2VydmljZTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRCcmFuY2hGaWxlcyA9IGJyYW5jaEZpbGVzIHx8IFtdO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlS0ZpbGVNYW5hZ2VyU2VydmljZTtcbiAgfVxuICBzZXRDdXJyZW50QnJhbmNoRmlsZXMoYnJhbmNoRmlsZXMpe1xuICAgIHRoaXMuY3VycmVudEJyYW5jaEZpbGVzID0gYnJhbmNoRmlsZXM7XG4gIH1cbiAgZ2V0Q3VycmVudEJyYW5jaEZpbGVzKCl7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEJyYW5jaEZpbGVzO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGtGaWxlTWFuYWdlciBmcm9tICcuL2tGaWxlTWFuYWdlci5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlPXtcbiAgICAgIGZpbGVzOltdLFxuICAgICAgZmlsdGVyVmFsdWU6XCJcIlxuICAgIH1cbiAgfVxuICBoYW5kbGVDaGFuZ2UoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJWYWx1ZTp0aGlzLnJlZnMuZmlsdGVyVGV4dElucHV0LnZhbHVlfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAkLmdldCgnL2ZzZmlsZXMnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGVzOiByZXN1bHR9KTtcbiAgICB9KVxuICB9XG4gIG9wZW5GaWxlKHBhdGgpe1xuICAgIHZhciBfcGF0aCA9IFwidXBsb2Fkcy9cIiArIHBhdGguc3BsaXQoa0ZNYW5hZ2VyLnVwbG9hZFBhdGgpWzFdO1xuICAgIHdpbmRvdy5vcGVuKF9wYXRoLCAnX2JsYW5rJyk7XG4gIH1cbiAgcmVuZGVyKCl7XG5cbiAgICB2YXIgaXRlbVN0eWxlID0ge1xuICAgICAgY3Vyc29yOidwb2ludGVyJ1xuICAgIH07XG5cbiAgICB2YXIgcm93cyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKChmaWxlKT0+e1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgIT09XCJcIiAmJiBmaWxlLm5hbWUudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUudG9VcHBlckNhc2UoKSkgIT09IC0xKSB7XG5cbiAgICAgICAgdmFyIGZpbGVTdHlsZT17XG4gICAgICAgICAgY29sb3I6J2dyYXknXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjaHVua05hbWVzID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdmFyIGV4dCA9IGNodW5rTmFtZXNbY2h1bmtOYW1lcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBzd2l0Y2ggKGV4dCkge1xuICAgICAgICAgIGNhc2UgXCJwZGZcIjpcbiAgICAgICAgICAgIGZpbGVTdHlsZS5jb2xvciA9IFwiI0QyMDAwMFwiO1xuICAgICAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyxmaWxlLnBhdGgpfSBzdHlsZT17aXRlbVN0eWxlfSBrZXk9e2ZpbGUucGF0aH0+PGkgc3R5bGU9e2ZpbGVTdHlsZX0gY2xhc3NOYW1lPSdmYSBmYS1maWxlLXBkZi1vIGZhLTF4Jz48L2k+IHtmaWxlLm5hbWV9PC9saT47XG4gICAgICAgICAgY2FzZSBcInN2Z1wiOlxuICAgICAgICAgICAgZmlsZVN0eWxlLmNvbG9yPVwiZ3JlZW5cIjtcbiAgICAgICAgICAgIHJldHVybiA8bGkgb25DbGljaz17dGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMsZmlsZS5wYXRoKX0gc3R5bGU9e2l0ZW1TdHlsZX0ga2V5PXtmaWxlLnBhdGh9PjxpIHN0eWxlPXtmaWxlU3R5bGV9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS1pbWFnZS1vIGZhLTF4Jz48L2k+IHtmaWxlLm5hbWV9PC9saT47XG4gICAgICAgICAgY2FzZSBcInJhclwiOlxuICAgICAgICAgICAgZmlsZVN0eWxlLmNvbG9yPVwiI0QwODkzOFwiO1xuICAgICAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyxmaWxlLnBhdGgpfSBzdHlsZT17aXRlbVN0eWxlfSBrZXk9e2ZpbGUucGF0aH0+PGkgc3R5bGU9e2ZpbGVTdHlsZX0gY2xhc3NOYW1lPSdmYSBmYS1maWxlLXppcC1vIGZhLTF4JyA+PC9pPiB7ZmlsZS5uYW1lfTwvbGk+O1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZpbGUuYmluZCh0aGlzLGZpbGUucGF0aCl9IHN0eWxlPXtpdGVtU3R5bGV9IGtleT17ZmlsZS5wYXRofT48aSBzdHlsZT17ZmlsZVN0eWxlfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtdGV4dC1vIGZhLTF4Jz48L2k+IHtmaWxlLm5hbWV9PC9saT47XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmZpbHRlcigoZSkgPT4hIWUpXG5cbiAgICB2YXIgbGlzdEJveFN0eWxlID0ge1xuICAgICAgbWF4SGVpZ2h0Oic1MDBweCcsXG4gICAgICBvdmVyZmxvd1k6J2F1dG8nLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wOSknXG4gICAgfTtcblxuICAgIHZhciB3cmFwcGVyU2VhY2hlciA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNDB2aCcsXG4gICAgICBsZWZ0OiAnMzglJ1xuICAgIH07XG5cbiAgICB2YXIgd3JhcHBlcklucHV0U2VhcmNoID0ge1xuICAgICAgdGV4dEFsaWduOidjZW50ZXInXG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTZWFjaGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17d3JhcHBlcklucHV0U2VhcmNofSBjbGFzc05hbWU9XCJpbnB1dFNlYXJjaEJhclwiPlxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgcGFkZGluZzonOHB4J319IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXIuLi5cIiByZWY9XCJmaWx0ZXJUZXh0SW5wdXRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFNlYXJjaEJhclwiIHN0eWxlPXtsaXN0Qm94U3R5bGV9PlxuICAgICAgICAgIHsodGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSE9PVwiXCIpID9cbiAgICAgICAgICAocm93cy5sZW5ndGggPiAwKSA/IDx1bD57cm93c308L3VsPiA6IDx1bD5OZW5odW0gYXJxdWl2byBlbmNvbnRyYWRvLi4uPC91bD4gOlxuICAgICAgICAgIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpc3VhbGl6ZXJFbGVtZW50IGZyb20gJy4vdmlzdWFsaXplckVsZW1lbnQuanN4JztcbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlzdWFsaXplciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dEaXJlY3RvcnlJbnB1dDogZmFsc2UsXG4gICAgICBkaXJOYW1lOiBcIlwiLFxuICAgICAgY3VycmVudFBhdGg6IFwiXCIsXG4gICAgICBjdXJyZW50RGlyOiBcIi9cIixcbiAgICAgIGZpbGVzOiBbXVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZXM6IHRoaXMucHJvcHMuYnJhbmNoRmlsZXN9KTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGVzOiBuZXh0UHJvcHMuYnJhbmNoRmlsZXN9KTtcbiAgfVxuICBoYW5kbGVFbGVtZW50UmVtb3ZlKG5hbWUsIHBhdGgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGNvbmZpcm0oJ0Rlc2VqYSByZWFsbWVudGUgcmVtb3ZlciAnICsgbmFtZSArICc/JykpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnL3JlbW92ZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIH0pLmRvbmUoKCkgPT4ge1xuXG4gICAgICAgIHZhciBvYmpJbmRleCA9IC0xO1xuXG4gICAgICAgIHNlbGYuc3RhdGUuZmlsZXMuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChvYmoubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgb2JqSW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvYmpJbmRleCA+PSAwKSB7XG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcHJldmlvdXNTdGF0ZS5maWxlcy5zcGxpY2Uob2JqSW5kZXgsIDEpO1xuICAgICAgICAgICAgc2VsZi5wcm9wcy5vblJlbW92ZUZpbGUobmFtZSwgcGF0aCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBjcmVhdGVEaXJlY3RvcnkoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hbWUgPSB0aGlzLnN0YXRlLmRpck5hbWU7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9ta2RpcicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhdGg6IHRoaXMucHJvcHMuY3VycmVudFBhdGggKyBcIi9cIiArIG5hbWVcbiAgICAgIH1cbiAgICB9KS5kb25lKChyZXN1bHQpID0+IHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+IHtcbiAgICAgICAgcHJldmlvdXNTdGF0ZS5kaXJOYW1lID0gXCJcIjtcbiAgICAgICAgcHJldmlvdXNTdGF0ZS5zaG93RGlyZWN0b3J5SW5wdXQgPSBmYWxzZTtcbiAgICAgICAgcHJldmlvdXNTdGF0ZS5maWxlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIHNlbGYucHJvcHMub25BZGRGaWxlKClcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbiAgb25BZGRGaWxlKGZpbGVzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VuZEZpbGVzOiBmaWxlc30pO1xuICB9XG4gIHNlbmRGaWxlcygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcmVxID0gcmVxdWVzdC5wb3N0KCcvdXBsb2FkJyk7XG4gICAgdGhpcy5zdGF0ZS5zZW5kRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgcmVxLmZpZWxkKCdwYXRoJywgdGhpcy5wcm9wcy5jdXJyZW50UGF0aClcbiAgICAgIHJlcS5hdHRhY2goZmlsZS5uYW1lLCBmaWxlKTtcbiAgICB9KTtcbiAgICByZXEuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgICAgICAgIHByZXZpb3VzU3RhdGUuc2VuZEZpbGVzID0gbnVsbDtcbiAgICAgICAgICBwcmV2aW91c1N0YXRlLmZpbGVzLnB1c2gocmVzLmJvZHkpO1xuICAgICAgICAgIHNlbGYucHJvcHMub25BZGRGaWxlKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBoYW5kbGVEaXJJbnB1dENoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Rpck5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHRvb2dsZURpcmVjdG9yeUlucHV0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+IHtcbiAgICAgIHByZXZpb3VzU3RhdGUuc2hvd0RpcmVjdG9yeUlucHV0ID0gcHJldmlvdXNTdGF0ZS5zaG93RGlyZWN0b3J5SW5wdXRcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgY0RpciA9IG5leHRQcm9wcy5jdXJyZW50UGF0aC5zcGxpdChrRk1hbmFnZXIudXBsb2FkUGF0aClbMV07XG4gICAgY0RpciA9IChjRGlyID09PSBcIlwiKVxuICAgICAgPyBcIi9cIlxuICAgICAgOiBjRGlyO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhdGg6IG5leHRQcm9wcy5jdXJyZW50UGF0aCwgY3VycmVudERpcjogY0RpciwgZmlsZXM6IG5leHRQcm9wcy5icmFuY2hGaWxlc30pO1xuICB9XG4gIGJhY2tIb21lKCkge1xuICAgIHRoaXMucHJvcHMub25CYWNrSG9tZSgpO1xuICB9XG4gIG9uRG91YmxlQ2xpY2tFbGVtZW50KHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRvdWJsZUNsaWNrRGlyZWN0b3J5KHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgZWxlbWVudHMgPSB0aGlzLnN0YXRlLmZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKCEhZmlsZS5jaGlsZHJlbilcbiAgICAgICAgcmV0dXJuICg8VmlzdWFsaXplckVsZW1lbnQga2V5PXtmaWxlLm5hbWV9IG5hbWU9e2ZpbGUubmFtZX0gcGF0aD17ZmlsZS5wYXRofSBvblJlbW92ZUVsZW1lbnQ9e3RoaXMuaGFuZGxlRWxlbWVudFJlbW92ZS5iaW5kKHRoaXMpfSBvbkRvdWJsZUNsaWNrRWxlbWVudD17dGhpcy5vbkRvdWJsZUNsaWNrRWxlbWVudC5iaW5kKHRoaXMpfSB0eXBlPVwiZGlyZWN0b3J5XCIvPik7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAoPFZpc3VhbGl6ZXJFbGVtZW50IGtleT17ZmlsZS5uYW1lfSBuYW1lPXtmaWxlLm5hbWV9IHBhdGg9e2ZpbGUucGF0aH0gb25SZW1vdmVFbGVtZW50PXt0aGlzLmhhbmRsZUVsZW1lbnRSZW1vdmUuYmluZCh0aGlzKX0gdHlwZT1cImZpbGVcIi8+KTtcbiAgICAgIH1cbiAgICApXG5cbiAgICB2YXIgZHJvcFpvbmVTdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogJzVweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZsb2F0OiAncmlnaHQnXG4gICAgfTtcblxuICAgIHZhciB0b29sYmFyU3R5bGUgPSB7XG4gICAgICB6SW5kZXg6IDEwLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDBweCA3cHggcmdiYSgwLDAsMCwwLjA0KScsXG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICByaWdodDogJzAnLFxuICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDkpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCdcbiAgICB9XG5cbiAgICB2YXIgZmlsZVVwbG9hZFN0eWxlID0ge1xuICAgICAgY29sb3I6ICdyZ2IoNjEsIDE3MiwgMjA4KScsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcGFkZGluZzogJzIwcHgnXG4gICAgfVxuXG4gICAgdmFyIGZvbGRlckNyZWF0ZVN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIGNvbG9yOiAncmdiKDYxLCAxNzIsIDIwOCknLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgICAgbWFyZ2luOiAnNXB4J1xuICAgIH1cblxuICAgIHZhciBwbHVzSWNvblN0eWxlID0ge1xuICAgICAgY29sb3I6ICdsaWdodHNsYXRlZ3JheSdcbiAgICB9XG5cbiAgICB2YXIgdXBsb2FkTmFtZUZpbGVzU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIG1heFdpZHRoOiAnNTAlJyxcbiAgICAgIG1hcmdpblRvcDogJzMwcHgnXG4gICAgfVxuXG4gICAgdmFyIGlucHV0RGlyTmFtZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIG1hcmdpblRvcDogJzM1cHgnXG4gICAgfVxuXG4gICAgdmFyIEJ0blNlbmRTdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogJzVweCdcbiAgICB9XG5cbiAgICB2YXIgbmFtZUZpbGVzID0gKHRoaXMuc3RhdGUuc2VuZEZpbGVzKVxuICAgICAgPyB0aGlzLnN0YXRlLnNlbmRGaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbGUubmFtZTtcbiAgICAgIH0pXG4gICAgICA6IG51bGw7XG5cbiAgICB2YXIgbmF2aWdhdG9yRGlzcGxheSA9IHtcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFQ0VDRUMnLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDAgM3B4IGdyYXknXG4gICAgfVxuXG4gICAgdmFyIG5hdmlnYXRvclRleHREaXNwbGF5ID0ge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgICAgZm9udFNpemU6ICcxN3B4J1xuICAgIH1cblxuICAgIHZhciB3cmFwcGVyVmlzdWFsaXplciA9IHtcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICBtYXJnaW5Cb3R0b206ICc5MHB4J1xuICAgIH1cblxuICAgIHZhciByZW5kZXIgPSAoXG4gICAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyVmlzdWFsaXplcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e25hdmlnYXRvckRpc3BsYXl9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e25hdmlnYXRvclRleHREaXNwbGF5fT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnREaXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt0b29sYmFyU3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEaXJlY3RvcnlJbnB1dFxuICAgICAgICAgICAgPyA8ZGl2IHN0eWxlPXtpbnB1dERpck5hbWVTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZGlyTmFtZX0gcGxhY2Vob2xkZXI9XCJub21lIGRvIGRpcmV0w7NyaW8uLi5cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVEaXJJbnB1dENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZURpcmVjdG9yeS5iaW5kKHRoaXMpfT5PazwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudG9vZ2xlRGlyZWN0b3J5SW5wdXQuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiaXRlbS1jbGlja2FibGUgaXRlbS10b29sYmFyXCIgdGl0bGU9XCJDcmlhciBkaXJldMOzcmlvXCIgc3R5bGU9e2ZvbGRlckNyZWF0ZVN0eWxlfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZvbGRlciBmYS0zeCBpdGVtLWNsaWNrYWJsZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMgZmEtMXggaXRlbS1jbGlja2FibGVcIiBzdHlsZT17cGx1c0ljb25TdHlsZX0+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3VwbG9hZE5hbWVGaWxlc1N0eWxlfT5cbiAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zZW5kRmlsZXMpXG4gICAgICAgICAgICAgID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgIHtuYW1lRmlsZXN9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtCdG5TZW5kU3R5bGV9IG9uQ2xpY2s9e3RoaXMuc2VuZEZpbGVzLmJpbmQodGhpcyl9PkVudmlhciBhcnF1aXZvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDogbnVsbFxufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEcm9wem9uZSBzdHlsZT17ZHJvcFpvbmVTdHlsZX0gb25Ecm9wPXt0aGlzLm9uQWRkRmlsZS5iaW5kKHRoaXMpfSB0aXRsZT1cIlVwbG9hZCBhcnF1aXZvXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11cGxvYWQgZmEtM3ggaXRlbS1jbGlja2FibGUgaXRlbS10b29sYmFyXCIgc3R5bGU9e2ZpbGVVcGxvYWRTdHlsZX0+PC9pPlxuICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmJhY2tIb21lLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cIml0ZW0tY2xpY2thYmxlIGl0ZW0tdG9vbGJhclwiIHRpdGxlPVwiQnVzY2FyIGFycXVpdm9cIiBzdHlsZT17Zm9sZGVyQ3JlYXRlU3R5bGV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoIGZhLTN4IGl0ZW0tY2xpY2thYmxlXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtlbGVtZW50c31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlbmRlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVml6dWFsaXplckVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UmVtb3ZlSWNvbjogZmFsc2VcbiAgICB9XG4gIH1cbiAgb3BlbkZpbGUocGF0aCkge1xuICAgIHZhciBfcGF0aCA9IFwidXBsb2Fkcy9cIiArIHBhdGguc3BsaXQoa0ZNYW5hZ2VyLnVwbG9hZFBhdGgpWzFdO1xuICAgIHdpbmRvdy5vcGVuKF9wYXRoLCAnX2JsYW5rJyk7XG4gIH1cbiAgcmVtb3ZlRmlsZShuYW1lLCBwYXRoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlbW92ZUVsZW1lbnQobmFtZSwgcGF0aCk7XG4gIH1cbiAgZG91YmxlQ2xpY2tEaXJlY3RvcnkocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzLm9uRG91YmxlQ2xpY2tFbGVtZW50KHByb3BzKVxuICB9XG4gIHNob3dSZW1vdmVJY29uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dSZW1vdmVJY29uOiB0cnVlfSk7XG4gIH1cbiAgaGlkZVJlbW92ZUljb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1JlbW92ZUljb246IGZhbHNlfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHZhciBkaXJlY3RvcnlTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAnIzNEQUNEMCdcbiAgICB9O1xuXG4gICAgdmFyIGZpbGVTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAnZ3JheSdcbiAgICB9O1xuXG4gICAgdmFyIGVsZW1lbnRTdHlsZSA9IHtcbiAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICBwYWRkaW5nOiAnMzBweCAwJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzE3NXB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfTtcblxuICAgIHZhciBpY29uVHJhc2ggPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzMwcHgnLFxuICAgICAgcmlnaHQ6ICczMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfTtcblxuICAgIHZhciBuYW1lU3R5bGUgPSB7XG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6ICc1cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtlbGVtZW50U3R5bGV9IG9uTW91c2VPdmVyPXt0aGlzLnNob3dSZW1vdmVJY29uLmJpbmQodGhpcyl9IG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlUmVtb3ZlSWNvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgIHZhciBjaHVua05hbWVzID0gdGhpcy5wcm9wcy5uYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgIHZhciBleHQgPSBjaHVua05hbWVzW2NodW5rTmFtZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBzd2l0Y2ggKGV4dCkge1xuICAgICAgICAgICAgICBjYXNlIFwicGRmXCI6XG4gICAgICAgICAgICAgICAgZmlsZVN0eWxlLmNvbG9yID0gXCIjRDIwMDAwXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpIHN0eWxlPXtmaWxlU3R5bGV9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS1wZGYtbyBmYS00eCcgdGl0bGU9e3RoaXMucHJvcHMubmFtZX0gb25Eb3VibGVDbGljaz17dGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMsIHRoaXMucHJvcHMucGF0aCl9PjwvaT47XG4gICAgICAgICAgICAgIGNhc2UgXCJzdmdcIjpcbiAgICAgICAgICAgICAgICBmaWxlU3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpIHN0eWxlPXtmaWxlU3R5bGV9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS1pbWFnZS1vIGZhLTR4JyB0aXRsZT17dGhpcy5wcm9wcy5uYW1lfSBvbkRvdWJsZUNsaWNrPXt0aGlzLm9wZW5GaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5wYXRoKX0+PC9pPjtcbiAgICAgICAgICAgICAgY2FzZSBcInJhclwiOlxuICAgICAgICAgICAgICAgIGZpbGVTdHlsZS5jb2xvciA9IFwiI0QwODkzOFwiO1xuICAgICAgICAgICAgICAgIHJldHVybiA8aSBzdHlsZT17ZmlsZVN0eWxlfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtemlwLW8gZmEtNHgnIHRpdGxlPXt0aGlzLnByb3BzLm5hbWV9IG9uRG91YmxlQ2xpY2s9e3RoaXMub3BlbkZpbGUuYmluZCh0aGlzLCB0aGlzLnByb3BzLnBhdGgpfT48L2k+O1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiA8aSBzdHlsZT17ZmlsZVN0eWxlfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtdGV4dC1vIGZhLTR4JyB0aXRsZT17dGhpcy5wcm9wcy5uYW1lfSBvbkRvdWJsZUNsaWNrPXt0aGlzLm9wZW5GaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5wYXRoKX0+PC9pPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e25hbWVTdHlsZX0+e3RoaXMucHJvcHMubmFtZX08L2Rpdj5cbiAgICAgICAgICB7KHRoaXMuc3RhdGUuc2hvd1JlbW92ZUljb24pXG4gICAgICAgICAgICA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgc3R5bGU9e2ljb25UcmFzaH0gb25DbGljaz17dGhpcy5yZW1vdmVGaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5uYW1lLCB0aGlzLnByb3BzLnBhdGgpfT48L2k+XG4gICAgICAgICAgICA6IG51bGxcbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtlbGVtZW50U3R5bGV9IG9uRG91YmxlQ2xpY2s9e3RoaXMuZG91YmxlQ2xpY2tEaXJlY3RvcnkuYmluZCh0aGlzLCB0aGlzLnByb3BzKX0gb25Nb3VzZU92ZXI9e3RoaXMuc2hvd1JlbW92ZUljb24uYmluZCh0aGlzKX0gb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVSZW1vdmVJY29uLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxpIHN0eWxlPXtkaXJlY3RvcnlTdHlsZX0gdGl0bGU9e3RoaXMucHJvcHMubmFtZX0gY2xhc3NOYW1lPSdmYSBmYS1mb2xkZXIgZmEtNHgnPjwvaT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtuYW1lU3R5bGV9Pnt0aGlzLnByb3BzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgeyh0aGlzLnN0YXRlLnNob3dSZW1vdmVJY29uKVxuICAgICAgICAgICAgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiIHN0eWxlPXtpY29uVHJhc2h9IG9uQ2xpY2s9e3RoaXMucmVtb3ZlRmlsZS5iaW5kKHRoaXMsIHRoaXMucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5wYXRoKX0+PC9pPlxuICAgICAgICAgICAgOiBudWxsXG59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBLRmlsZU1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL2tGaWxlTWFuYWdlci5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEtGaWxlTWFuYWdlci8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91bnQtcG9pbnQnKSApO1xuIl19
