import fetch from 'node-fetch'

function getObjectFromUrl (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.text())
      .then(text => resolve(JSON.parse(text)))
      .catch(error => reject(error))
  })
}

function getTodo (id) {
  return new Promise((resolve, reject) => {
    getObjectFromUrl(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(object => {
        resolve(object)
      })
      .catch(error => reject(error))
  })
}

function main () {
  getTodo(4)
    .then(bounds => console.log(bounds))
}

main()