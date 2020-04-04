const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var s=2;
  var t=3;
for(var i=1;i<a;i++){
    t=t+1;
    s=s+t;
}
console.log(s);
});
