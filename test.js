const loadsh = require('loadsh')
const xx = loadsh.sortBy([{ a: 1, c: 2 },{ a: 3, c: 1 },{ a: 1, c:4 }], ['a'])
const type = xx[0].a
// console.log(xx)
const ss = loadsh.filter(xx, (x) => x.a === type)
const xe = loadsh.sortBy(ss, ['c'])
console.log(xe[xe.length -1])