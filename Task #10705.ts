type DeepMerge<T1, T2> = {
    [K in keyof (T1 & T2)]: 
      K extends keyof T2 
        ? K extends keyof T1 
          ? T1[K] extends object 
            ? T2[K] extends object 
              ? DeepMerge<T1[K], T2[K]> 
              : T2[K] 
            : T2[K] 
          : T2[K] 
        : K extends keyof T1
          ? T1[K] 
          : never;
  };
  
  function deepMerge<T1 extends object, T2 extends object>(obj1: T1, obj2: T2): DeepMerge<T1, T2> {
    const result: any = { ...obj1 };
  
    for (const key in obj2) {
      if (key in obj1 && typeof obj1[key ]  === 'object' && typeof obj2[key] === 'object') {
        result[key] = deepMerge(obj1[key], obj2[key]); 
      } else {
        result[key] = obj2[key]; 
      }
    }
  
    return result;
  }
  
  // Example Usage:
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { d: 3 }, e: 4 };
  const merged = deepMerge(obj1, obj2);
  
  // Resulting type:
  // {
  //   a: number;
  //   b: { c: number; d: number; };
  //   e: number;
  // }
  
  console.log(merged); // Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
  
  export{}
  
  
  
  
  