// A Tuple is an array, each element in the array can be named and have different types

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
  return [
    c1[0] + c2[0], 
    c1[1] + c2[1], 
    c1[2] + c2[2]   
  ];
}

console.log(add3DCoordinate([1,2,3], [4,5,6]));

// Simple state example, think React
function simpleState(initalValue: string): [() => string, (value: string) => void]{
  let state: string = initalValue;
  return [
    () => state,
    (value: string) => {
      state = value
    }
  ]
};

const [str1getter, str1setter] = simpleState('hello')
console.log(str1getter())
str1setter('goodbye');
console.log(str1getter())