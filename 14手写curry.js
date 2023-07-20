// function.length是指形参个数
function curry(fn, len = fn.length) {
    console.log(len, 'len');
    console.log(fn.toString(), 'fn');
    return _curry.call(this, fn, len);
}

function _curry(fn, len, ...args) {
    return function (...params) {
        let _args = [...args, ...params];
        console.log(args, 'args');
        console.log(params, 'params')
        console.log(_args, '_args');
        if (_args.length >= len) {
            // 把fn执行一次，绑定this
            return fn.apply(this, _args);
        } else {
            // 将
            return _curry.call(this, fn, len, ..._args);
        }
    }
}

let _fn = curry(function (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
})

_fn(1, 2, 3, 4, 5, 6);
_fn(1)(2)(3, 4, 5, 6, 7, 8, 9, 10);
_fn(1, 2)(3, 4)(5);