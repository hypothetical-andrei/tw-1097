const sampleList = [{
  name: 'a1',
  ram: 8,
  cpu: 'i3'
}, {
  name: 'a2',
  ram: 12,
  cpu: 'i3'
}, {
  name: 'a3',
  ram: 16,
  cpu: 'i3'
}]

const sampleMask = {
  ram: 12,
  cpu: 'i3'
}

function find (list, mask) {
  return list.filter(e => {
    let found = true
    for (const prop in mask) {
      if (e[prop] !== mask[prop]) {
        found = false
      } 
    }
    return found
  })
}

console.log(find(sampleList, sampleMask))