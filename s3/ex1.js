class Robot {
  constructor (name) {
    this.name = name
  }
  move (distance) {
    console.log(`${this.name} moved ${distance} meters`)
  }
}

const r0 = new Robot('first robot')
r0.move(10)

class Weapon {
  constructor (name) {
    this.name = name
  }
  fire () {
    console.log(`${this.name} is firing`)
  }
}

const w0 = new Weapon('pew pew lazor')

class CombatRobot extends Robot {
  constructor (name) {
    super(name)
    this.weapons = []
  }
  addWeapon (weapon) {
    this.weapons.push(weapon)
  }
  fire () {
    this.weapons.forEach(e => e.fire())
  }
}

const c0 = new CombatRobot('first combat robot')
c0.addWeapon(w0)
c0.fire()