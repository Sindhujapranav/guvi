const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var a=n[0].split(" ").map(x=>+x)
var arr=n[1].split(" ").map(x=>+x);
var b;
console.log(arr);
  function map(x){
      for(var i=0;i<arr.length;i++){
          arr[i]=arr[i]*x;
      }
      return arr;
  }
  console.log(map(3));
});
