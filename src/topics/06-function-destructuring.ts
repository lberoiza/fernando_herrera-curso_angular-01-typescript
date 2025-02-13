console.log('\n---- 06-function-destructuring ----\n');

export interface Product {
  desc: string;
  price: number;
}

interface TaxConfigurationOptions {
  tax: number;
  products: Product[];
}

// opcion 1
// function calculateTax({tax, products}: TaxConfigurationOptions): [number, number] {

// opcion 2: se escogió esta opcion para priorizar la legibilidad del código
export function calculateTax(options: TaxConfigurationOptions): [number, number] {
  const {tax, products} = options;
  const total = products.reduce((acc, {price}) => acc + price, 0);
  return [total, total * tax];
}