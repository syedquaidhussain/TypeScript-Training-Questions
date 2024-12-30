const originalObject = { a: 1, b: 2, c: 3 };

// const mappedObject = mapObject(originalObject, (value) => value.toString());https://www.typescriptlang.org/play/?#$0

function mapObject<T extends object,U>(obj:T,callback:(arg:T[keyof T])=>U):{ [key in keyof T]:U}
{
    let result:{[key in keyof T ]:U}={} as {[key in keyof T ]:U};
  
 for(let key in obj){

    console.log(key);
    result[key]=callback(obj[key]);

 }
return result ;

} 

const mappedObject = mapObject(originalObject, (value) => value.toString());
console.log(mappedObject);

