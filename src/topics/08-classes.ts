console.log('\n---- 08-classes ----\n');

// Clases
export class Person {
  constructor(public name: string, private address: string = 'Unknown') {
  }
}

// Composition
export class Superhero {

  constructor(private person: Person, private alterEgo: string, private age: number) {

  }
}

const tony = new Person('Tony Stark', 'New York');
const bruce = new Person('Bruce Banner');
console.log({tony, bruce});


// usando composition
const peterParker = new Person('Peter Parker', 'New York');
const spiderman = new Superhero(peterParker, 'Spiderman', 17);

const wandaMaximoff = new Person('Wanda Maximoff', 'Sokovia');
const scarletWitch = new Superhero(wandaMaximoff, 'Scarlet Witch', 29);

console.log({spiderman, scarletWitch});