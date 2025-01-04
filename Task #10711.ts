
// Helper types for transform function
type KeyMap<T> = {
    [K in keyof T]?: string;
  };
  
  // Get transformed type based on the key mapping
  type TransformedType<T, M extends KeyMap<T>> = {
    [K in keyof T as K extends keyof M 
      ? M[K] extends string 
        ? M[K] 
        : K 
      : K]: T[K];
  };
  
  function transformKeys<T extends object, M extends KeyMap<T>>(
    obj: T,
    mapping: M
  ): TransformedType<T, M> {
    const result: any = {};
    
    for (const key in obj) {
      const newKey = mapping[key] || key;
      result[newKey] = obj[key];
    }
    
    return result ;
  }
  
  const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54 
  };
  
  const transformedUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
  export{}