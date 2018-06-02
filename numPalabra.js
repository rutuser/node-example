const fs = require('fs');
fs.readFile('./palabras.txt', 'utf8',(err ,data) => {
    if(err){
        console.log("Error " + err);
    } else {
        console.log("Los datos del fichero son ", data);
    }
});
