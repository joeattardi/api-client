import React from 'react';

function formatHeaderName(headerName) {
  const components = headerName.split('-');
  return components.map(component => component[0].toUpperCase() + component.substring(1)).join('-');
}

export default function Headers({ headers }) {
  const listItems = Object.keys(headers).map(header => {
    return (
      <li key={header}><strong>{formatHeaderName(header)}</strong>: {headers[header]}</li>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
