/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceFirst<[1, 2, 3], 3, 4>, [1, 2, 4]>>,
  Expect<Equal<ReplaceFirst<['A', 'B', 'C'], 'C', 'D'>, ['A', 'B', 'D']>>,
  Expect<Equal<ReplaceFirst<[true, true, true], true, false>, [false, true, true]>>,
  Expect<Equal<ReplaceFirst<[string, boolean, number], boolean, string>, [string, string, number]>>,
  Expect<Equal<ReplaceFirst<[1, 'two', 3], string, 2>, [1, 2, 3]>>,
  Expect<Equal<ReplaceFirst<['six', 'eight', 'ten'], 'eleven', 'twelve'>, ['six', 'eight', 'ten']>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/25170/answer
  > View solutions: https://tsch.js.org/25170/solutions
  > More Challenges: https://tsch.js.org
*/
