const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ")
  var arr=n[1].split(" ").map(x=>+x)
  var arr1=n[2].split(" ").map(x=>+x)
  var z=[];
  for(var i=0;i<arr1.length;i++){
    arr.push(arr1[i])
    var max1=Math.max.apply(null,arr);
    z.push(max1)
  }
  console.log(z.join(" "))
});
