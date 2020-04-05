const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var sum=0;
  var arr1=[];
 var arr=n[1].split(" ").map(x=>+x);
for(var i=0;i<=arr.length-2;i++){
        sum=arr[i]+arr[i+1];
        arr1.push(sum);
    }
console.log(Math.max.apply(null, arr1)); 

});
