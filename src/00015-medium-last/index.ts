// 使用解构的方法取得最后一位
type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never
// 另一种方法 把any和元组T组成一个新元组类型,这样就能直接得到最后一位
// type Last<T extends any[]> = [any, ...T][T['length']]
