let user: string = 'jack';
let hasLoggedIn: boolean = true;

user += " herrington"

console.log(user);

let myRegex: RegExp = /foo/;

const names: string[] = user.split(' ')
const myValues: Array<number> = [1, 2 ,3]

interface Person {
  first: string;
  last: string;
} 

const MyPerson: Person = {
  first: 'Tim',
  last: 'Woodman',
}

const ids: Record<number, string> = {
  10: 'a',
  20: 'b'
}

ids[30] = 'c';

if (ids[30] === 'c'){}

// TS is infering i
for (let i = 0; i < 10; i++){
  console.log(i)
}

// TS infering v as number
[1,2,3].forEach(v => {
  console.log(v)
});

// TS will infer out is a number based on the array types and operation
const out = [4,5,6].map((v) => v * 10);