type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer First, ...infer REST]
  ? First extends S
    ? [R, ...REST]
    : [First, ...ReplaceFirst<REST, S, R>]
  : T;
