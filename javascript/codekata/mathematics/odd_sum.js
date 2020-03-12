const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
 var a=n[0].split(" ")
  var l=parseInt(a[0]);
  var r=parseInt(a[1]);
  var odd=[];
  var sum=0;
  for(var i=l;i<=r;i++)
  {
      if(i%2!==0)
      {
       odd.push(i);
       sum=sum+i;
      }
  }
  console.log(sum)
});
