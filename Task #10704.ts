
function reverseTuple<T extends any[]>(arr: T): ReverseTuple<T> {
    return arr.reverse() as ReverseTuple<T>;
  }
  
  type ReverseTuple<T extends any[]> = T extends [infer F, ...infer Rest] 
    ? [...ReverseTuple<Rest>, F] 
    : T;
  
  const arr: [number,string,boolean] = [42, 'hello', true]; 
  
  // Reversed tuple
  const reversedTuple = reverseTuple(arr);
  
  console.log(reversedTuple); 
  
  
  
  const arr2 = [42, 'hello', true] as const; 
  
//   const reversedTuple2 = reverseTuple(arr2);
  
//   console.log(reversedTuple2); 
  