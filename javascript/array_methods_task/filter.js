const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var a=n[0].split(" ").map(x=>+x)
var arr=n[1].split(" ").map(x=>+x);
var s=[];
console.log(arr);
    function filters(){
      for(var i=0;i<arr.length;i++)
      {
         if(arr[i]>5)
         {
             s.push(arr[i]);
         }
      }
      return s.join(" ");
    }
    var result=filters();
    console.log(result);
});

