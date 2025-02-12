console.log('\n---- 03-functions ----\n');

// Función normal
function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersResult = addNumbers(10, 5);
console.log({addNumbersResult});

// Función de flecha
const addNumbersArrow = (a: number, b: number): number => {
  return a + b;
}
const addNumbersArrowResult = addNumbersArrow(5, 5);
console.log({addNumbersArrowResult});


// Función con argumento opcional y argumento por defecto
function multiplyNumbers(a: number, b?: number, base: number = 2): number {
  if (b === undefined) {
    b = 1;
  }
  return a * base * b;
}

const multiplyNumbersResult = multiplyNumbers(5);
console.log({multiplyNumbersResult});


// Función con Objeto como Argumento
interface CharacterHero {
  name: string;
  hp: number;
  showHp: () => void;
}

function healCharacter(character: CharacterHero, healX: number): void {
  character.hp += healX;
}

const strider: CharacterHero = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Health Points of ${this.name}: ${this.hp}`);
  }
}

healCharacter(strider, 20);
healCharacter(strider, 10);
strider.showHp();


