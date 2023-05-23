const fs = require('fs');

function parseLine(line) {
  // Remove extra spaces using regular expressions
  const cleanedLine = line.replace(/\s+/g, ' ');

  // Split the line by spaces
  const [id, spanishWord, englishWord] = cleanedLine.trim().split(' ');

  // Return an object with the extracted values
  return {
    id,
    spanishWord,
    englishWord
  };
}

// Read the input.txt file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Split the file content by new lines
  const lines = data.trim().split('\n');

  // Process each line
  const output = lines.map((line) => parseLine(line));

  // Prepare the output API data
  const apiData = output.map((item) => ({
    id: item.id,
    spanish: item.spanishWord,
    english: item.englishWord
  }));

  // Convert the API data to a string
  const outputString = `const apiData = ${JSON.stringify(apiData, null, 2)};`;

  // Write the output to the words.js file
  fs.writeFile('words.js', outputString, (err) => {
    if (err) throw err;
    console.log('Parsing complete. Output saved to words.js file.');
  });
});