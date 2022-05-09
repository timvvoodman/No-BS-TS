// function with callback, how to type the callback
export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

// callback example with custom type replacing in-line
export type MutationFunc = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunc): number[]{
  return numbers.map(mutate)
}

console.log(arrayMutate([1,2,3], (v) => v * 10))

// Functions that return functions
export type AdderFunction = (val: number) => number
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val 
}

const addOne = createAdder(1)
console.log(addOne(55))
