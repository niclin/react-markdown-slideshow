import React, { Component } from 'react';
import { LivePreview } from './LivePreview';
import { SlideShowButton } from './SlideShowButton';

export class SlideShowApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  componentWillUnmount() {

  }

  componentDidMount() {

  }

  render() {
    return (
        <div>
          <SlideShowButton />
          <textarea />
          <LivePreview />
        </div>
    );
  }

}

SlideShowApp.defaultProps = {

}
