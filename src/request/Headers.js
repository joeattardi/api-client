import React, { Component } from 'react';

import AddHeaderForm from './AddHeaderForm';
import Header from './Header';

export default class Headers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: []
    };

    this.handleAddHeader = this.handleAddHeader.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.deleteHeader = this.deleteHeader.bind(this);
  }

  handleAddHeader({ name, value }) {
    this.setState({
      headers: [
        ...this.state.headers,
        { name, value }
      ]
    }, () => {
      this.props.onChange(this.state.headers);
    });
  }

  deleteHeader(index) {
    this.setState({
      headers: this.state.headers.filter((header, i) => i !== index)
    }, () => this.props.onChange(this.state.headers));
  }

  updateHeader({ name, value, index }) {
    this.setState({
      headers: this.state.headers.map((header, i) => {
        if (i === index) {
          return { name, value };
        }

        return header;
      })
    }, () => {
      this.props.onChange(this.state.headers);
    });
  }

  renderHeader(header, index) {
    return (
      <Header
        key={index}
        index={index}
        name={header.name}
        value={header.value} 
        onChange={this.updateHeader}
        onDelete={this.deleteHeader} />
    );
  }

  render() {
    return (
      <div>
        {this.state.headers.map(this.renderHeader)}
        <AddHeaderForm onAddHeader={this.handleAddHeader} />
      </div>
    );
  }
}
