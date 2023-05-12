type Custom = {
  age: number
  name: string
}
type Item = number | string | Custom

function append(items: Item[]) {
  items.push('hello fem!')
}
const items: Item[] = []
console.log(items)
append(items)
console.log(items)

const numbers: number[] = []
console.log(numbers)
append(numbers)
console.log(numbers)

/* basic example of enums */

// enum Color {
//   Red,
//   Green,
//   Blue,
//   Yellow,
// }

// function printColor(color: Color) {
//   switch (color) {
//     case Color.Red:
//       console.log('red')
//       break
//     case Color.Blue:
//       console.log('ble')
//       break
//     case Color.Green:
//       console.log('green')
//       break
//   }
// }

// printColor(Color.Yellow)

// import fs from 'fs'

// let list = [1, 2, 3]

// console.log(list.map((num) => num + 1))

// fs.readFileSync('lines')
//   .toString()
//   .split('\n')
//   .filter((_, i) => i % 2 === 0)
//   .filter((_, i) => i > 1 && i < 4)
//   .forEach((line) => {
//     console.log(line)
//   })
