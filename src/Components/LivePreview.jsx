import React, { Component } from 'react';

export class LivePreview extends Component {
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
          {this.props.text}
        </div>
    );
  }

}

LivePreview.defaultProps = {

}
