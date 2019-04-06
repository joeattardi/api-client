import React, { Component } from 'react';

import AddNameValuePairForm from './AddNameValuePairForm';
import NameValuePair from './NameValuePair';

export default class NameValueList extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(header, index) {
    return (
      <NameValuePair
        key={index}
        index={index}
        name={header.name}
        value={header.value} 
        onChange={this.props.onChangeItem}
        onDelete={this.props.onDeleteItem} />
    );
  }

  render() {
    return (
      <div>
        {this.props.items.map(this.renderItem)}
        <AddNameValuePairForm onAddItem={this.props.onAddItem} />
      </div>
    );
  }
}
