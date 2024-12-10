interface Person {
name:string,
age:number
}


function describePerson(obj:Person):string{
  return `"Name: ${obj["name"]}, Age: ${obj["age"]}"`;
}

console.log(describePerson({ name: 'Alice', age: 30 })); 