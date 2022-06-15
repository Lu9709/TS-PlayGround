### 获取函数返回类型

不使用`ReturnType`实现TypeScript的`ReturnType<T>`泛型。

例如：
```ts
const fn = (v: boolean) => {
    return v ? 1 : 2
}
type a = MyReturnType<typeof fn> // 应推导出 "1 | 2" 
```
