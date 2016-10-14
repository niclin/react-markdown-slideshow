import React, { Component } from 'react';

export class LivePreview extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        html: ''
    };

    this.converter = new showdown.Converter();
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    document.getElementById('livePreview').innerHTML = this.state.html;
  }

  componentWillReceiveProps(props) {
    console.log(this.props.text)
    var html = this.converter.makeHtml(props.text);

    this.setState({
        html: html
    });
  }

  render() {
    return (
        <div id="livePreview">
        </div>
    );
  }

}

LivePreview.defaultProps = {
    text: ''
}
