type whiteSpace = ' ' | '\t' | '\n';
type Trim<S extends string> = S extends `${whiteSpace}${infer W}` | `${infer W}${whiteSpace}` ? Trim<W> : S
