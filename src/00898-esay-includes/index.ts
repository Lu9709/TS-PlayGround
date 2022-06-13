type IEqual<T,U> = (<X>()=>X extends T ? 1:2) extends (<X>()=>X extends U ? 1 : 2) ? true :false

type Includes<T extends readonly any[], U> = T extends [infer V, ...infer R]
    ? IEqual<V, U> extends true
        ? true
        : Includes<R, U>
    : false;
