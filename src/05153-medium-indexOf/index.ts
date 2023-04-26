/**
 * @description judge whether U is equal to T
 */
type isEqual<U, T> = U extends T ? (T extends U ? true : false) : false;

/**
 * @description 获取元组中指定元素的索引
 * @param T 元组
 * @param U 指定元素
 * @param Length 相当于一个计数器，每次递归都会将当前元素推入其中，最后返回Length的长度
 */
type IndexOf<T, U, Length extends unknown[] = []> = T extends [infer First, ...infer Rest]
  ? isEqual<First, U> extends true
    ? Length['length']
    : IndexOf<Rest, U, [...Length, First]>
  : -1;
