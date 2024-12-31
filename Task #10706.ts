function loggerWrapper<T extends (...arg:ReturnType<T>[])=> ReturnType<T>> (func:T)


{
   return (...arg:ReturnType<T>[])  =>{
    console.log(`Calling the function ${func.name} with arguments ${arg} and output is ${func(...arg)}`);
    return func(...arg);
  }
 
 
}

const add = (a:number , b: number): number => a + b;
const loggedAdd = loggerWrapper(add);
// console.log(loggedAdd)

const value = loggedAdd(3, 5);
console.log(value)


export{}
// Note Func.name exist in every function that gives the name of the function but in vs code name is giving error