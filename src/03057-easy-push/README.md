### Push

在类型系统里实现通用的`Array.push`

举例如下：
```ts
type Result = Push<[1,2], '3'> // expected to be [1, 2,'3']
```
