console.log('\n---- 10-decorators ----\n');

function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  console.log(`==> [DECORATOR CLASS] Decorando clase ${constructor.name}`);
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  }
}

function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`==> [DECORATOR METHOD] Decorando método ${propertyKey}`);

  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log("Ejecutando el decorador de método.");
    return originalMethod.apply(this, args); // Llamamos al método original
  };

  return descriptor;
}


// TODO: No funciona del todo bien, no se llaman los getter y setter al ejecutar el codigo
function propertyDecorator(): Function {
  console.log(`==> [DECORATOR PEROPERTY] Decorando propiedad`);
  return function (target: any, propertyKey: string): PropertyDescriptor {
    console.log({target, propertyKey});
    return {
      get(): any {
        console.log(this);
        console.log(`obteniendo el valor de la variable ${propertyKey}`);
        return 'TestValue';
      },
      set(this, val: any) {
        console.log(`seteando el valor de la variable ${propertyKey}`);
        Object.defineProperty(this, propertyKey, {
          value: val
        })
      }

    };
  }
}


@classDecorator
export class SuperClass {

  @propertyDecorator()
  myProperty: string;

  constructor(myProperty: string) {
    this.myProperty = myProperty;
  }

  @methodDecorator
  print() {
    console.log(this.myProperty);
  }
}

const myClass = new SuperClass("prop");
console.log(myClass);
myClass.myProperty = "new value";
myClass.print();