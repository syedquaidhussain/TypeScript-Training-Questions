

// function updateObject<T extends object, U extends keyof T> (obj:T,prop:U,updateValue: T[U]):T{
//   const result :T = {} as T;
//   for(let key in obj ) { 
//     if(key === prop) {
//       result[key as keyof T] = updateValue;
//     }
//     else{
//       result[key] = obj[key];
//     } 
//   }

//   return result;
// }

function updateObject<T extends object, K extends keyof T>(
    obj: T,
    prop: K,
    updateValue: T[K] // Ensure the value type matches the property type
  ): T {
    const result = { ...obj }; // Copy the original object
  
    result[prop] = updateValue; // Update the specific property
    return result;
  }
  
  
  const obj = { a: 1, b: 'hello', c: true };
  const updated = updateObject(obj, 'b', "hello");
  console.log(updated)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  type UpdateObject<T> = <K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]
  ) => T;
  
  const updateObject: UpdateObject<typeof obj> = (obj, key, value) => {
    return {
      ...obj,
      [key]: value,
    };
  };
  
  // Example Usage:
  const obj = { a: 1, b: 'hello', c: true };
  const updated = updateObject(obj, 'b', 2); // Works fine
  // const invalid = updateObject(obj, 'b', 123); // Error: Type '123' is not assignable to type 'string'
  
  console.log(updated); // { a: 1, b: 'world', c: true }
  */