const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

/**
 *  实现一个简单 Promise A+ 规范的 Promise 库， 只需支持 then(resolve, reject);
 */
function myPromise(fn) {

  this.value = null;
  this.state = PENDING;
  this.resolveCallbacks = [];
  this.rejectCallbacks = [];
  const that = this;

  const resolve = function (val) {
    if (that.state === PENDING) {
      that.value = val;
      that.state = RESOLVED;
      that.resolveCallbacks.forEach(fn => {
        if (typeof fn === 'function') {
          fn(val);
        }
      });
    }
  }

  const reject = function (val) {
    if (that.state === PENDING) {
      that.value = val;
      that.state = REJECTED;
      that.resolveCallbacks.forEach(fn => {
        if (typeof fn === 'function') {
          fn(val);
        }
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }

}

myPromise.prototype.then = function (resolveFn, rejectFn) {

  resolveFn = typeof resolveFn === 'function' ? resolveFn : v => v;
  rejectFn = typeof rejectFn === 'function' ? rejectFn : v => v;

  if (this.state === PENDING) {
    this.resolveCallbacks.push(resolveFn);
    this.rejectCallbacks.push(rejectFn);
  }

  if (this.state === RESOLVED) {
    resolveFn(this.value);
  }

  if (this.state === REJECTED) {
    rejectFn(this.value);
  }

}

module.exports = myPromise

