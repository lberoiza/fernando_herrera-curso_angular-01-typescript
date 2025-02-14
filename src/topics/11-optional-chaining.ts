console.log('\n---- 11-optional-chaining ----\n');

interface Passenger {
  name: string;
  children?: string[];
}

const john: Passenger = {
  name: 'John'
};

const jane: Passenger = {
  name: 'Jane',
  children: ['Alice', 'Bob']
};

// Optional chaining
function printChildren(passenger: Passenger): string {
  // option1 : si la cadena es vacía se imprime '' en lugar de 'no children'
  // return passenger.children?.join(', ') ?? 'no children';

  // option2: si la cadena es vacía se imprime 'no children'
  return passenger.children?.join(', ') ?? 'no children';


}


function printPassengerDetails(passenger: Passenger){
  console.log(`${passenger.name} travels with ${printChildren(passenger)}`);
}

printPassengerDetails(john);
printPassengerDetails(jane);
