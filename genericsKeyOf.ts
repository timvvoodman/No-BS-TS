// Pluck function example



function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[], 
  key: KeyType
  ): DataType[KeyType][] {
    return items.map(item => item[key])
}


const dogs = [
  {
    name: 'Mimi',
    age: 12,
  },
  {
    name: 'Charlie',
    age: 6
  }
]
 
console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

// DataType is infered by the "items" param, dog so then KeyType needs to match one of the KeyTypes in DataType


// Event Map Example,  think site analytics

interface BaseEvent {
  time: number;
  user: string;
};

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string};
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name, 
  data: EventMap[Name] 
  ): void {
  console.log([name, data])
}

sendEvent("addToCart", {productID: 'foo', user: 'baz', quantity: 1, time: 10 })
sendEvent("checkout", {time: 20, user: 'bob'})
