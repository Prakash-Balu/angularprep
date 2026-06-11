
const a = [];

for (var i of ['a', 'b', 'c']) {
  a.push(() => i);
}


for (const i of [1, 2, 3]) {
  a.push(() => i);
}

console.log(a.map(x => x()));
