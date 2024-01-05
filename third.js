const fs = require('fs');

fs.readFile('./text.txt', (err, data) => {
    if(err) console.log("Error!", err)
    let cleanData = JSON.parse(data);
    console.log("Here is your data", cleanData)
})