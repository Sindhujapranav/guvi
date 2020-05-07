const every1=(array,callback)=>{
var count=0;
    for(let i=0;i<array.length;i++)
    {
      if(callback(array[i]))
         {count+=1;}
if(count==array.length)
{return true;}
else
{return false;}
} 
}
const condition=(x)=> x>18;
const input=[10,50,70]
console.log(every1(input,condition)); 
