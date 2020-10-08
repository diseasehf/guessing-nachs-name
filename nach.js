const fs = require('fs');

fs.readFileSync('more_names.txt', 'utf8')
  .split("\n")
  .filter(
    name => name[0] == 'A' &&
    name.length === 4
  )
  .forEach(name => console.log(name));