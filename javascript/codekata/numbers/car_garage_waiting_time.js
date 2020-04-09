const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var nc=a[0];
  var x=a[1];
  var t=10;
  var wt=0;
  for(var i=1;i<nc;i++){
    wt=wt+(t-x);
  }
console.log(wt);
});
