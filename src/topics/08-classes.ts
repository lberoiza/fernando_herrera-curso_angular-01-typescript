console.log('\n---- 08-classes ----\n');


export class Person {
  constructor(public name: string, private address: string = 'Unknown') {
  }
}

export class Superhero extends Person {
  constructor(realName: string, address: string, private alterEgo: string, private age: number) {
    super(realName, address);
  }
}

const ironman = new Person('Tony Stark', 'New York');
const hulk = new Person('Bruce Banner');

console.log({ironman, hulk});

const spiderman = new Superhero('Peter Parker', 'New York', 'Spiderman', 17);
const scarletWitch = new Superhero('Wanda Maximoff', 'Sokovia', 'Scarlet Witch', 29);

console.log({spiderman, scarletWitch});