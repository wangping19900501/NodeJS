var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
});
fs.readFile('sample.txt', 'utf8', (err, data)=>{
    console.log(data);
});