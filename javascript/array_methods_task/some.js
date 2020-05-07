const some1=(array,callback)=>{
    for(let i=0;i<array.length;i++)
    {
     if(callback(array[i]))
       {
           return true;
       }
    }
    
return false;
}  
const condition=(x)=> x>18;
const input=[10,50,70]
console.log(some1(input,condition));

