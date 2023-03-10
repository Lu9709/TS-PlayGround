type TrimRight<S extends string> = S extends `${infer W}${whiteSpace}` ? TrimRight<W> : S
