import React, { Component } from 'react';

export class SlideShowButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this._handleClick = this._handleClick.bind(this);
  }

  componentWillUnmount(){

  }

  componentDidMount(){


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
        className={this.props.className}
        onClick={this._handleClick}>播放</button>
      );
  }
}

SlideShowButton.defaultProps ={

}
