console.log('\n---- 07-import-export ----\n');

import { Product, calculateTax } from './06-function-destructuring';

const phone: Product = {
  desc: 'Nokia phone',
  price: 150
}

const tablet: Product = {
  desc: 'Samsung tablet',
  price: 200
}


// ejemplo
const shoppingCart: Product[] = [phone, tablet];
const tax = 0.16;

const [total, taxResult] = calculateTax({tax, products: shoppingCart});
console.log(`Total ${total}, Tax ${taxResult}`); // Total 350, Tax 56