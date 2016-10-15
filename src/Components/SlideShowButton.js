'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideShowButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideShowButton = exports.SlideShowButton = function (_Component) {
  _inherits(SlideShowButton, _Component);

  function SlideShowButton(props, context) {
    _classCallCheck(this, SlideShowButton);

    var _this = _possibleConstructorReturn(this, (SlideShowButton.__proto__ || Object.getPrototypeOf(SlideShowButton)).call(this, props, context));

    _this.state = {};

    _this._handleClick = _this._handleClick.bind(_this);
    return _this;
  }

  _createClass(SlideShowButton, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.palyback).addClass('disabled');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.canPlay === true) $(this.refs.playback).removeClass('disabled');else $(this.refs.playback).addClass('disabled');
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      this.setState({
        text: this.props.text
      });

      document.getElementById('source').innerHTML = this.props.text;
      remark.create();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement("button", {
        ref: "playback",
        className: this.props.className,
        onClick: this._handleClick }, "播放");
    }
  }]);

  return SlideShowButton;
}(_react.Component);

SlideShowButton.defaultProps = {
  canPlay: true
};