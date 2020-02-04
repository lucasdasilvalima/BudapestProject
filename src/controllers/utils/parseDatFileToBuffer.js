const fs = require('fs');

module.exports = function (file) {
  if (!file)
    return { data: undefined, contentType: undefined };
  const buffer = {
    data: fs.readFileSync(file.path),
    contentType: file.mimetype
  };
  return buffer;
}
