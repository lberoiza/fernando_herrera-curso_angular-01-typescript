console.log('\n---- 06-function-destructuring ----\n');

interface Product {
  desc: string;
  price: number;
}

const phone: Product = {
  desc: 'Nokia phone',
  price: 150
}

const tablet: Product = {
  desc: 'Samsung tablet',
  price: 200
}


interface TaxConfigurationOptions {
  tax: number;
  products: Product[];
}


function calculateTax(options: TaxConfigurationOptions): [number, number] {
  let total = 0;

  options.products.forEach(({price}) => {
    total += price;
  });

  return [total, total * options.tax];
}


// ejemplo
const shoppingCart: Product[] = [phone, tablet];
const tax = 0.16;

const result = calculateTax({tax, products: shoppingCart});
console.log(`Total ${result[0]}, Tax ${result[1]}`); // Total 350, Tax 56