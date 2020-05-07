const filter1=(array,callback)=>{
   var arr=[];
    for(let i=0;i<array.length;i++)
    {
       if(callback(array[i]))
       {
           arr.push(array[i]);
       }
    }
return arr
}    
const condition=(x)=> x%2===0
const input=[1,2,3,6,20]
console.log(filter1(input,condition));
