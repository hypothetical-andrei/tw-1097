String.prototype.capitalizeAll = function () {
  return this.replace(/\b[a-z]/g, match => match.toUpperCase())
}

console.log('i will be capitalized'.capitalizeAll())