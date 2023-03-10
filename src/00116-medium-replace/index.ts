type Replace<T extends string, From extends string, To extends string> = T extends `${infer L}${From extends '' ? never : From}${infer R}` ? `${L}${To}${R}` : T
