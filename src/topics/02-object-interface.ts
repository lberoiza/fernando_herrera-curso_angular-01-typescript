console.log('\n---- 02-object-interfaces ----\n');

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter', 'Healing']
}

strider.hometown = 'Riverdell';


console.table(strider);