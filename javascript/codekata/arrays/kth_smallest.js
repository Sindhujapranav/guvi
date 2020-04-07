const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data)})
inp.on("close",()=>{
  var a=n[0].split(" ").map(x=>+x);
  var k1=a[1];
  var k=k1-1;
  var arr=n[1].split(" ").map(x=>+x);
  arr.sort((a,b)=>a-b)
  if(arr[k]>arr[0]){console.log(arr[k])}
  else{console.log("-1")}
});
