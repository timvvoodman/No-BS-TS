interface Coordinate {
  x: number;
  y: number;
}

// Feels weird to have two seperate funcitons for this, lets make one with function overloading
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;

// unknown is like any but requires a type to be casted, so like a safe any
// :? indicates an optional param
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coordinate: Coordinate = {
    x: 0,
    y: 0
  }

  if(typeof arg1 === 'object') {
    coordinate = {
      ...(arg1 as Coordinate)
    }
  } else if (typeof arg1 === 'string'){
    (arg1 as string).split(',').forEach(str => {
      const[key, value] = str.split(':')
      coordinate[key as 'x' | 'y'] = parseInt(value, 10)
    })
  } else {
    coordinate = {
      x: arg1 as number,
      y: arg2 as number
    }
  }

  return coordinate
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({x: 52, y:35}))
console.log(parseCoordinate('x:12,y:13'))


