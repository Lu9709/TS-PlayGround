// type MyAwaited<T extends Promise<any>> = T extends PromiseLike<infer R> ? R : never
// 方法一 递归
type MyAwaited<T> = T extends Promise<infer Result> ? MyAwaited<Result> : T
// 方法二 使用Awaited类
// type MyAwaited<T extends Promise<any>> = Awaited<T>;
