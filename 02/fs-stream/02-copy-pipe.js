// Копирование файлов
// Проблема - какая? Зачем pipe?
const fs = require('fs');

// try to create readstream from file
const fileIn = fs.createReadStream(__filename, {highWaterMark: 100});

const fileOut = fs.createWriteStream(__filename + ".out", {highWaterMark: 40});
// response
fileIn.on('data', data => {
  console.log(fileOut.write(data));
});

fileIn.on('close', () => {
  fileOut.close();
});


//fileIn.pipe(fileOut);
