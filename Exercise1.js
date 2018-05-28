Array.prototype.isDual = function() {
  let sum = 0;
  for (let i = 0; i < this.length; i = i + 2) {
    if (sum === 0)
      sum = this[i] + this[i + 1];
    if (this[i] + this[i + 1] !== sum)
      return 0;
  }
  return 1;
}

console.log([1,2,3,0].isDual());
console.log([1,2,2,1,3,0].isDual());
console.log([1,1,2,2].isDual());
console.log([1,2,3].isDual());
console.log([].isDual());

