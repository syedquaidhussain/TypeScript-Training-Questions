type User = {
    id: number;
    name: string;
    age?: number; 
  };
  
  const user = {
    id: 1,
    name: "John Doe",
    isAdmin: true, 
  } satisfies User;
  
  console.log(user.id);    
  console.log(user.name);  
  
  console.log(user.isAdmin); 



  // eg of as 
  type UnionType = string|number;

  let  a:unknown =  "Hello" ;

 const b = (a as string).toLocaleLowerCase();




 const inputElement = document.querySelector("input") as HTMLInputElement;

 inputElement.value = "TypeScript is awesome";
 
 console.log(inputElement.value);
 


export {}  