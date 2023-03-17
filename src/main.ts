/*
* 节流
*
* @params {Function} fn 函数
* @params {number} time 时间
* */

function throttle(fn: Function, time: number) {
  let timer: any
  return (...args: any[]) => {
    if(timer) return
    fn.call(undefined, ...args)
    timer = setTimeout(() => {
      timer = null
    }, time)
  }
}

/*
* 防抖
*
* @params {Function} fn 函数
* @params {number} time 时间
* */
function debounce(fn: Function, time: number) {
  let timer: any
  return (...args: any[]) => {
    if(timer !== null) clearTimeout(timer)
    timer = setTimeout(()=> {
      fn.call(undefined, ...args)
      timer = null
    }, time)
  }
}



function throttleTest (fn: Function, time: number) {
  let timer: any
  return (...args: any[]) => {
    if(timer) return
    fn.call(undefined, args)
    timer = setTimeout(() => {
      timer = null
    }, time)
  }
}

function debounceTest (fn: Function, time: number) {
  let timer:any
  return (...args: any[]) => {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(undefined, args)
      timer = null
    }, time)
  }
}


