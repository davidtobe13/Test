const { Transform } = require('stream');

class UppercaseTransform extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    // Convert the chunk to uppercase
    const uppercasedChunk = chunk.toString().toUpperCase();
    this.push(uppercasedChunk);
    callback();
  }
}
const uppercaseStream = new UppercaseTransform();

uppercaseStream.on('data', (data) => {
  console.log(data.toString());
});

uppercaseStream.write('hello\n');
uppercaseStream.write('world\n');
uppercaseStream.end();
