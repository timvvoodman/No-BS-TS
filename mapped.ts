type myFlexibleDog = {
  name: string;
  [key: string]: string | number

} 

const dog: myFlexibleDog = {
  name: 'charlie',
  breed: 'mutt',
  age: 22,
}

interface DogInfo {
  name: string;
  age: number;
}

type OptionalFlags<Type> = {
  [Property in keyof Type]: boolean
}

type DogInfoOptions = OptionalFlags<DogInfo>

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void
} & {[Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void }

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "needs to be implemented"
}


const lg:DogInfo = {
  name: 'LG',
  age: 13
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
})