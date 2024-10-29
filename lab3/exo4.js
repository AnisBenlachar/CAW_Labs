// exo4.js
const fs = require('fs');
const fileName = process.argv[2];
const text = process.argv[3];

if (!fileName || !text) {
    console.log("Usage: node exo4.js <filename> <text>");
    process.exit(1);
}

fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
        console.error("Error saving the file:", err);
        return;
    }
    console.log("The file has been saved!");

    // Display the contents of the file
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        console.log("File contents:");
        console.log(data);
    });
});
