// ReadFile.js
const fs = require('fs');
const fileName = process.argv[2]; // Get the filename from the command line argument

if (!fileName) {
    console.log("Please provide a file name as an argument.");
    process.exit(1);
}

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data);
});
