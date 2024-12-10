const stringify = (parameter:string|number):string =>{
return `"${parameter}"`;
}
console.log(stringify(123)); 
console.log(stringify("hello")); 