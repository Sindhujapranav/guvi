const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[];
  a=n[0].split(" ");
  var l=parseInt(a[0].split(" "));
  var r=parseInt(a[1].split(" "));
  var sqr=[];
  var count=0;
  for(var i=l;i<=r;i++)
  {
    if(Math.sqrt(i) % 1 === 0)
        {
          count=count+1;
          sqr.push(i)
        }
  }
  if(count>=1){console.log(count)}
  else{console.log("-1")}
});
