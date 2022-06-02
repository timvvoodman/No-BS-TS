interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

// Rater than repeating ourselves in the above commented interface a partial type will make all the fields
// of MyUser optional

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

console.log(merge({
  name: "Jack",
  id: "12345",
  email: "jack@foo.com"
}, {
  email: "jack@bar.com"
}))

// Oposite of Partial Required utility makes all fields in MyUser required
type RequiredMyUser = Required<MyUser>;

// Pick utiliy preserves requires/optional status but only uses the keys specified
type JustEmailAndName = Pick<MyUser, "name" | "email">

// MAP EXAMPLE 
// Record utility Constructs an object type whose property keys are Keys and whose property values are Type. 
//This utility can be used to map the properties of a type to another type.

// Omit utility is the opisite of Pick, specified Keys are removed


const mapByID = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id" >> => {
  return users.reduce((a, v) => {
    const {id, ...other} = v
    return {
      ...a,
      [id]: other
    }
  }, {})
}

console.log(mapByID([
  {
    id: "foo",
    name: "Mr Foo"
  },
  {
    id: "bar",
    name: "Mr Bar"
  }
]))