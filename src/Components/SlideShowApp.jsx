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
        <div className="row">
          <div className="col-md-6">
            <SlideShowButton className="btn btn-primary"/>
            <textarea
            rows="25"
            className="form-control"
            onChange={this._handleChange}
            />
          </div>
          <div className="col-md-6">
            <LivePreview text={this.state.text}/>
          </div>
        </div>
    );
  }

}

SlideShowApp.defaultProps = {

}
