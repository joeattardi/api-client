import React, { Component } from 'react';

import AddNameValuePairForm from './AddNameValuePairForm';
import NameValuePair from './NameValuePair';

export default class NameValueList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleAddItem({ name, value }) {
    this.setState({
      items: [
        ...this.state.items,
        { name, value }
      ]
    }, () => {
      this.props.onChange(this.state.items);
    });
  }

  deleteItem(index) {
    this.setState({
      items: this.state.items.filter((header, i) => i !== index)
    }, () => this.props.onChange(this.state.items));
  }

  updateItem({ name, value, index }) {
    this.setState({
      items: this.state.items.map((header, i) => {
        if (i === index) {
          return { name, value };
        }

        return header;
      })
    }, () => {
      this.props.onChange(this.state.items);
    });
  }

  renderItem(header, index) {
    return (
      <NameValuePair
        key={index}
        index={index}
        name={header.name}
        value={header.value} 
        onChange={this.updateItem}
        onDelete={this.deleteItem} />
    );
  }

  render() {
    return (
      <div>
        {this.state.items.map(this.renderItem)}
        <AddNameValuePairForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}
