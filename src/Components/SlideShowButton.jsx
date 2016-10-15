import React, { Component } from 'react';

export class SlideShowButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this._handleClick = this._handleClick.bind(this);
  }

  componentWillUnmount() {

  }

  componentDidMount() {
      $(this.refs.palyback).addClass('disabled');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.canPlay === true)
      $(this.refs.playback).removeClass('disabled');
    else
      $(this.refs.playback).addClass('disabled');
  }

  _handleClick(e) {
    this.setState({
      text: this.props.text
    });

    document.getElementById('source').innerHTML = this.props.text;
    remark.create();
  }

  render() {
      return (
        <button
        ref="playback"
        className={this.props.className}
        onClick={this._handleClick}>播放</button>
      );
  }
}

SlideShowButton.defaultProps = {
  canPlay: true
}
