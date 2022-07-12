// const beforeLoad = 'beforeLoad'
// const loading = 'loading'
// const loaded = 'loading'

enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loading',
}


const isLoading = (state: LoadingState) => state === LoadingState.loading;


// before the enum this is not notifying an error because dog is a string, but we know this will error out
// with the enum TS shows the error
// console.log(isLoading('dog'))

console.log(isLoading(LoadingState.beforeLoad))
console.log(isLoading(LoadingState.loading))
console.log(isLoading(LoadingState.loaded))

// Literal Types

// numeric literal
function rollDice(dice: 1 | 2 | 3): number{
  let pip = 0;
  for(let i = 0; i < dice; i++) {
    pip += (Math.floor(Math.random() * 5)) + 1
  }
  return pip
}

// now cal only call with 1, 2, or 3 dice
console.log(rollDice(3))

// String Literals ... works well with functional overloading, and used in interfaces
function sendEvent(name: 'addToCart', data: {productId: number}): void
function sendEvent(name: 'checkout', data: {cartCount: number}): void
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`)
}

// Now passing add to cart will hint at the only acceptable data param to be {prodID: number}
sendEvent('addToCart', {productId: 12345})

