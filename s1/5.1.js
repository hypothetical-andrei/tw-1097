function fib (order) {
  if (order === 0 || order === 1) {
    return 1
  }
  return fib(order - 1) + fib(order - 2)
}

if (process.argv.length < 3) {
  console.log('not enough args')
} else {
  const n = parseInt(process.argv[2])
  console.log(fib(n))
}
