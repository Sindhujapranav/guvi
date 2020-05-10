const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var k=n[0];
  var arr=[];
  for(var i=1;i<=k;i++){
    var a=n[i].split(" ");
    for(var j=0;j<a.length;j++){
       arr.push(a[j]);
    }
  }
console.log(arr.sort((a,b)=>a-b).join(" "));
});
