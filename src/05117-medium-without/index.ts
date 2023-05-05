/**
 * @description 转换为联合类型
 */
type toUnion<T extends unknown [] | unknown> = T extends unknown[] ? T[number] : T
/**
 * @description 删除元组中的指定元素
 */
type Without<T, U> = T extends [infer First, ...infer Rest]
  ? First extends toUnion<U>
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : T
