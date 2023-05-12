import fs from 'fs'

let list = [1, 2, 3]

console.log(list.map((num) => num + 1))

fs.readFileSync('lines')
  .toString()
  .split('\n')
  .filter((_, i) => i % 2 === 0)
  .filter((_, i) => i > 1 && i < 4)
  .forEach((line) => {
    console.log(line)
  })
