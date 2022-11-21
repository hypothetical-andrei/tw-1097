class Software {
  constructor (name) {
    this.name = name
  }
  run () {
    console.log(`${this.name} is running`)
  }
}

const s0 = new Software('something')
s0.run()

class BrowserPlugin {
  constructor (name) {
    this.name = name
  }
  run () {
    console.log(`${this.name} has been loaded`)
  }
}

const p0 = new BrowserPlugin('adblock')

class Browser extends Software {
  constructor (name) {
    super(name)
    this.plugins = []
  }
  addPlugin (plugin) {
    this.plugins.push(plugin)
  }
  run () {
    console.log(`${this.name} is running with plugins: `)
    this.plugins.forEach(e => e.run())
  }
}

const b0 = new Browser('first combat robot')
b0.addPlugin(p0)
b0.run()