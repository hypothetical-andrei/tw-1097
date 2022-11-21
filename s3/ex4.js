const orderCoffee = (type) => {
  const types = {
    REGULAR: 'REGULAR',
    SPECIAL: 'SPECIAL'
  }

  if (type in types) {
    console.log('here is your coffee')
  } else {
    throw new Error('unsupported coffee error')
  }
}

try {
  console.log(orderCoffee('REGULAR'))
  console.log(orderCoffee('WACKY'))
} catch (error) {
  console.warn(error)  
}