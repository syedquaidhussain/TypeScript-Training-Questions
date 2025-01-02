

const obj = {
    name: "Alice",
    age: 30,
    address: {
      city: "Wonderland",
      zip: 12345,
      location: {
        country: "Fantasy",
      },
    },
    isActive: {
      name:"Aman",
      age:22,
      employed:true
    }
  };
  
  
  
  
  function updateValuesWithPrefix<T>(obj:T,prefix:string):T {
  function update(value:any):any {
   if(typeof value === "string") {
     return prefix+value;
   }
   else if(typeof value === "object" && value!==null){
    if(Array.isArray(value)){
     return value.map(update);
    }
  
    else{
      const result :any = {}  ;
      for(let key in value){
        result[key]  = update(value[key])
  
      }
      return result;
    }
   }
  
   else{
    return value;
   }
  
   
  }
  
  
  return update(obj) ;
  }
  
  const updatedObj = updateValuesWithPrefix(obj, "Hello, ");
  
  console.log(updatedObj);
  
export{};