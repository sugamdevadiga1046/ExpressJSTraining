function displayMessage(msg) {
    return new Promise((resolve,reject)=>{
        console.log(msg);
        resolve();
    });
}
displayMessage('Welcome to NodeJS!...').then(()=>{
    console.log('Promise has been Resolved');
})
.catch((error)=>{
    console.error(error);
})
const fs = require('fs');
const { resolve } = require('path');

function createFile(fileName,data) {
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName, data, (error)=>{
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

(async function(){
    try {
        await createFile('File1.txt','Welcome to NodeJS fresher training');
        console.log('Successfully file has been created');
    } catch (error) {
        console.error(error);
    }
})();

