const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'assets/info.txt');

const config = {
    encoding: 'UTF-8'
}
const inputStream = fs.createReadStream(fileName, config);

//register listener in order to listen for data,error..
//data event is emitted by os for each chunk of data
let data = ''
inputStream.on('data', chunk=> {
    console.log(`Received ${chunk.length} bytes of data.`)
    data += chunk;
})

//end event is called , no more chunk of data is availble.
inputStream.on('end', () => {
    console.log('There will be no more data to read!');
    console.log(data);
})

//error event: for error handling
inputStream.on('error', err => {
    console.log(`Some thing went wrong! ${err}`)
});