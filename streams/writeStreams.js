const fs = require('fs');

const writeStream = fs.createWriteStream('./text.txt', 'utf8');

writeStream.on('open', () => {
  console.log('This file is open for writing.');
});

writeStream.write('Hello, World');

writeStream.on('finish', () => {
  console.log('Writing finished.');
});
writeStream.end(() => {
  console.log('Stream closed');
});
