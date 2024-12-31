"use strict";
// function loggerWrapper<T extends (...arg:ReturnType<T>[])=> ReturnType<T>> (func:T)
Object.defineProperty(exports, "__esModule", { value: true });
// {
//    return (...arg:ReturnType<T>[])  =>{
//     console.log(`Calling the function ${func.name} with arguments ${arg} and output is ${func(...arg)}`);
//     return func(...arg);
//   }
// }
// const add = (a:number , b: number): number => a + b;
// const loggedAdd = loggerWrapper(add);
// // console.log(loggedAdd)
// const value = loggedAdd(3, 5);
// console.log(value)
// export{}
function loggerWrapper(func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling the function ".concat(func.name, " with arguments ").concat(args, " and output is ").concat(func.apply(void 0, args)));
        return func.apply(void 0, args);
    };
}
var add = function (a, b) { return a + b; };
var loggedAdd = loggerWrapper(add);
var value = loggedAdd(3, 5);
console.log(value);
