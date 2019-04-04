export function getContentType(response) {
  let [contentType] = response.headers['content-type'];
  if (contentType.includes(';')) {
    contentType = contentType.substring(0, contentType.indexOf(';'));
  }

  return contentType;
}
