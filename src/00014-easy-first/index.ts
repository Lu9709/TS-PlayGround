// T extends [] 可以表示 空数组
type First<T extends any[]> = T extends [] ? never : T[0]
