const map1=(array,callback)=>{
    var arr=[];
    for(let i=0;i<array.length;i++)
    {
       arr.push(callback(parseInt(array[i])))
    }
return arr;
    
}
const condition=(x)=> x*10
const input=[5,10,15,20]
console.log(map1(input,condition));
