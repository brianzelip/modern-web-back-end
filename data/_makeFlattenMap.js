// Call this program on the command line,
// passing space delimited filenames from the same directory.

const fs = require('fs');

const filePaths = process.argv.slice(2);
console.log('filePaths entered: ', filePaths);

const OUTPUT = [];

filePaths.forEach(file => {
  const resource = file.split('.')[0];
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const output = data.results.map(result => [
    result.url,
    resource === 'films' ? result.title : result.name
  ]);
  OUTPUT.push({ [`${resource}`]: output });
});

fs.writeFileSync('_FLATTENED.json', JSON.stringify(OUTPUT, null, 2));
