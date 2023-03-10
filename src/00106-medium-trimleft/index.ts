type TrimLeft<S extends string> = S extends `${whiteSpace}${infer W}` ?  TrimLeft<W> : S
