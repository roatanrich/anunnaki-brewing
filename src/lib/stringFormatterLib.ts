import formatter from '../lib/currencyLib';

function format(item: any, index: string): string {
  const name = item.data[index].name;
  const price = formatter.format(item.data[index].quote.USD.price);

  return `${name} = ${price}`;
}

export default format;
