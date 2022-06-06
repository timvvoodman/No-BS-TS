interface Cat {
  name: string;
  breed: string
}

// Read only utility to copy the cat interface then make the copy redonly
type ReadOnlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed
  }
}

const usul = makeCat('usel', 'Tabby');

// Changing the name or breed would be possible without the readonly utility designation on line 7, just like any other object.
usul.name = 'Piter'
usul.breed = 'Maine Coon' // now these are not allowed

console.log(usul)


// ReadOnly Tuple example
function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
  return [x,y,z]
}

const c1 = makeCoordinate(10,20,30)
//now this re assingment isn't allowed
c1[0] = 50

//Immuatability//

// can fix an issue with native 'const'
//as const assigns const to each value in the array
const reallyConst = [1,2,3] as const;

// without TS immutability this is allowed so is it REALLY constant?
reallyConst[0] = 50;
