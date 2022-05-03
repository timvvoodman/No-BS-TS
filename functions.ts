//function syntax define types for params and function outputs
function addNumbers(a: number, b: number): number {
    return a + b;
}


export default addNumbers;

//arrow func sytax for defining types for params and function outputs
export const addStrings = (a: string, b: string): string => {
   return `${a} ${b}`;
}

//arrow func sytax with default param
export const addStringsDefParam = (a: string, b: string = 'TypeScript'): string => {
  return `${a} ${b}`;
}

// Union Types
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
}

//  Void functions
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
}

// Promise
export const fetchData= (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// With spread params from Array
export function introduce(salutation: string, ...names:Array<string>): string {
  return `${salutation} ${names.join(' ')}`;
}