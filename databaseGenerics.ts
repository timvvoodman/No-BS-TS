//generics extension of database.ts file

interface Database<T, K>{
  get(id: K): T;
  set(id: K, value: T): void
}


interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;



class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>
  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}

class PersistantMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db); 
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myPersistantDB = new PersistantMemoryDB<number, string>();
myPersistantDB.set('foo', 4)
console.log(38, myPersistantDB.get('foo'))
const saved = (myPersistantDB.saveToString())

const myPersistantDB2 = new PersistantMemoryDB()
myPersistantDB2.restoreFromString(saved)
console.log(43, myPersistantDB2.get('foo'))


const myDb = new InMemoryDatabase();
myDb.set('foo', 'bar')
console.log(49, myDb.get('foo'))

