{
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function MyPromise(fn) {
    const _this = this
    _this.state = PENDING
    _this.value = null
    _this.resolvedCallbacks = []
    _this.rejectedCallbacks = []
    // 待完善 resolve 和 reject 函数
    function resolve(value) {
      if (_this.state === PENDING) {
        _this.state = RESOLVED
        _this.value = value
        _this.resolvedCallbacks.map(cb => cb(_this.value))
      }
    }

    function reject(value) {
      if (_this.state === PENDING) {
        _this.state = REJECTED
        _this.value = value
        _this.rejectedCallbacks.map(cb => cb(_this.value))
      }
    }
  }
  // 待完善执行 fn 函数
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const _this = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : r => {
          throw r
        }
  if (_this.state === PENDING) {
    _this.resolvedCallbacks.push(onFulfilled)
    _this.rejectedCallbacks.push(onRejected)
  }
  if (_this.state === RESOLVED) {
    onFulfilled(_this.value)
  }
  if (_this.state === REJECTED) {
    onRejected(_this.value)
  }
}

{
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function promise(fn) {
    let _this = this
    _this.state = PENDING
    _this.value = null
    _this.resCb = []
    _this.rejCb = []
    function resolve(value) {
      if (_this.state === PENDING) {
        _this.state = RESOLVED
        _this.value = value
        _this.resCb.map(cb => cb(_this.value))
      }
    }
    function reject(value) {
      if (_this.state === PENDING) {
        _this.state = REJECTED
        _this.value = value
        _this.rejCb.map(cb => cb(_this.value))
      }
    }
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  promise.prototype.then = function(onFulfilled, onRejected) {
    let _this = this
    if (_this.state === RESOLVED) {
      onFulfilled(_this.value)
    }
    if (_this.state === REJECTED) {
      onRejected(_this.value)
    }
  }
}

function _new() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
