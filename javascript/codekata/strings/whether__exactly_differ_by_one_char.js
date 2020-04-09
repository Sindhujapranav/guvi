const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var k=a[1];
  var s=a[0];
  var c=1;
  for(var i=0;i<=k.length;i++){
    for(var j=0;j<=s.length-1;j++){
      if(k[i]===s[j])
      {

        c+=1;
      }
  }
  }
  if(c>1)console.log("yes")
  else console.log("no")
});
