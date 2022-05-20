// Replace String with a genereic from last example from tuples

function simpleState<T>(
  initalValue: T
  ): [() => T, (value: T) => void]{
  let state: T = initalValue;
  return [
    () => state,
    (value: T) => {
      state = value
    }
  ]
};

// Will accecpt multiple types as long as T is all the same type in implementation
const [st1getter, st1setter] = simpleState(1)
console.log(st1getter())
st1setter(62)
console.log(st1getter())

// Overriding inferred generic type
const [st2getter, st2setter] = simpleState<string | null >(null)
console.log(st2getter())
st2setter('str')
console.log(st2getter())

// Generic interface example
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item => ({
    item,
    rank: rank(item)
  })
  ))

  ranks.sort((a,b) => a.rank - b.rank)

  return ranks.map((rank) => rank.item)
}

interface Pokemon {
  name: string;
  hitPoints: number;
}

const pokemon: Pokemon[] = [
  {
    name: 'bulba',
    hitPoints: 20,
  },
  {
    name: 'charmander',
    hitPoints: 15,
  }
];

const ranks = ranker(pokemon, ({hitPoints}) => hitPoints) 
console.log(ranks)