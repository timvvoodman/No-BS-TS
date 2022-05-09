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

function getUser(user: User): string {
  if(user.info) {
    return user.info.email!; 
  }
  return ''
}