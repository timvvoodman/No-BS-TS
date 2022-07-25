// interface Database{
//   get(id: string): string;
//   set(id: string, value: string): void
// }

// // can read and write state from a string
// interface Persistable {
//   saveToString(): string;
//   restoreFromString(storedState: string): void;
// }

// // MEMBER VISIBILITY OPTIONS
//   // private: only this class can see it
//   // protected: only this class and any decendants can see it
//   // public: default if not set. anyone can see and use

// class InMemoryDatabase implements Database {
//   protected db: Record<string, string> = {}
//   get(id: string): string {
//     return this.db[id]
//   }
//   set(id: string, value: string): void {
//     this.db[id] = value
//   }
// }

// class PersistantMemoryDB extends InMemoryDatabase implements Persistable {
//   saveToString(): string {
//     return JSON.stringify(this.db); // need to make db in InMemoryDatabase protected to share with decendants
//   }
//   restoreFromString(storedState: string): void {
//     this.db = JSON.parse(storedState);
//   }
// }

// const myPersistantDB = new PersistantMemoryDB();
// myPersistantDB.set('foo', 'bar')
// console.log(38, myPersistantDB.get('foo'))
// const saved = (myPersistantDB.saveToString())

// const myPersistantDB2 = new PersistantMemoryDB()
// myPersistantDB2.restoreFromString(saved)
// console.log(43, myPersistantDB2.get('foo'))


// const myDb = new InMemoryDatabase();
// myDb.set('foo', 'bar')
// // myDb.db['foo'] = 'baz' can do this without the inmemory db knowing without member visibility configured, which is bad
// console.log(49, myDb.get('foo'))