import React, { Component } from 'react';
import { LivePreview } from './LivePreview';
import { SlideShowButton } from './SlideShowButton';

export class SlideShowApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        text: ''
    };

    this._handleChange = this._handleChange.bind(this);
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }

  _handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
        <div>
          <SlideShowButton />
          <textarea
          rows="30"
          onChange={this._handleChange}
          />
          <LivePreview text={this.state.text}/>
        </div>
    );
  }

}

SlideShowApp.defaultProps = {

}
