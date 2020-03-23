const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var k1=n[0];
  var a=n[0].split("")
  var s=0;
  var p=1;
  for(var i=0;i<a.length;i++){
      s=s+parseInt(a[i]);
      p=p*parseInt(a[i]);
  }
  var k=s+p;
  if(k==k1)
  {
      console.log("Great")
  }
  else
  {
      console.log("no")
      
  }
});  
