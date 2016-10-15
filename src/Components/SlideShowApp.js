'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideShowApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LivePreview = require('./LivePreview');

var _SlideShowButton = require('./SlideShowButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideShowApp = exports.SlideShowApp = function (_Component) {
  _inherits(SlideShowApp, _Component);

  function SlideShowApp(props, context) {
    _classCallCheck(this, SlideShowApp);

    var _this = _possibleConstructorReturn(this, (SlideShowApp.__proto__ || Object.getPrototypeOf(SlideShowApp)).call(this, props, context));

    _this.state = {
      text: ''
    };

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(SlideShowApp, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: '_handleChange',
    value: function _handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement(_SlideShowButton.SlideShowButton, {
        text: this.state.text,
        className: "btn btn-primary" }), _react2.default.createElement("textarea", {
        rows: "25",
        className: "form-control",
        onChange: this._handleChange })), _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement(_LivePreview.LivePreview, { text: this.state.text })));
    }
  }]);

  return SlideShowApp;
}(_react.Component);

SlideShowApp.defaultProps = {};