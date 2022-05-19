// Optional Params
function printIngredient(quantity: string, ingredient: string, instruction?: string){ // cannot put another required param after an optional one, they go at the end.
  console.log(`${quantity} ${ingredient} ${instruction ? `${instruction}` : ''}`)
}

printIngredient('1C', 'flour')
printIngredient('1C', 'flour', 'sifted')

// Optional Fields
interface User {
  id: string;
  info?: {
    email?: string;
  }
}

function getEmail(user: User): string {
  if(user.info) {
    return user.info.email!;
  }
  return ''
}

function getEmailEz(user: User): string {
  return user.info?.email ?? ''
}

// Optional Callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // if (callback) {
  //   callback();
  // } 

  // OR THE SHORT WAY
  callback?.();
}

addWithCallback(1,2)