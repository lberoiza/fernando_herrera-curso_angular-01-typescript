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

// opcion 1
// function calculateTax({tax, products}: TaxConfigurationOptions): [number, number] {

// opcion 2: se escogió esta opcion para priorizar la legibilidad del código
function calculateTax(options: TaxConfigurationOptions): [number, number] {
  const {tax, products} = options;
  const total = products.reduce((acc, {price}) => acc + price, 0);
  return [total, total * tax];
}


// ejemplo
const shoppingCart: Product[] = [phone, tablet];
const tax = 0.16;

const [total, taxResult] = calculateTax({tax, products: shoppingCart});
console.log(`Total ${total}, Tax ${taxResult}`); // Total 350, Tax 56