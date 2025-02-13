console.log('\n---- 09-generics ----\n');

export function identityType<T>(arg: T): T {
  return arg;
}

// Inferencia automática de tipo a partir del argumento
const iAmAString = identityType('I am a string');
console.log(iAmAString.split(' '));

const iAmANumber = identityType(42);
console.log(iAmANumber.toFixed(3));

// Explicitando el tipo
const iAmAString2: string = identityType<string>('I am a second string');
console.log(iAmAString2.split(' '));

const iAmANumber2: number = identityType<number>(777);
console.log(iAmANumber2.toFixed(1));
