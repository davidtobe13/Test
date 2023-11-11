const { Duplex } = require('stream');

const myDuplexStream = new Duplex({
  read(size) {
    this.push('Hello, '); 
    this.push('World!');
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log('Received data to write:', chunk.toString());
    callback();
  }
});

myDuplexStream.on('data', (data) => {
  console.log('Read data:', data.toString());
});

myDuplexStream.write('This is data to write.', 'utf8', () => {
  console.log('Data written.');
});

myDuplexStream.end('This is the end of the stream.', 'utf8', () => {
  console.log('Stream ended.');
});
