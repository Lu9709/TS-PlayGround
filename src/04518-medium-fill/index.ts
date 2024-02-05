type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Result extends unknown[] = [],
  > = T extends [infer L, ...infer Rest]
  ? Result['length'] extends Start
    ? Start extends End
      ? [...Result, ...T]
      : Fill<Rest, N, [...Result, N]['length'] & number, End, [...Result, N]>
    : Fill<Rest, N, Start, End, [...Result, L]>
  : Result
