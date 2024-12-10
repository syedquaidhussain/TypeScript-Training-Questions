
const doubleArray = (numberArray:number[]):number[] =>{
const ans = numberArray.map((element)=>element*2);
return ans;
}

console.log(doubleArray([1, 2, 3]));