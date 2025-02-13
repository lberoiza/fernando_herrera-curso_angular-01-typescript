console.log('\n---- 04-homework-types ----\n');

interface Address {
  street: string;
  country: string;
  city: string;
}

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

const superHeroe: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'USA',
    city: 'NY'
  },
  showAddress() {
    return `${this.name} vive en: ${this.address.street}, ${this.address.city}, ${this.address.country}`;
  }
}


const address = superHeroe.showAddress();
console.log( address );