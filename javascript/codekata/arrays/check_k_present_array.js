  
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ").map(x=>+x);
  var s=n[1].split(" ").map(x=>+x);
  var count=0;
  var k=a[1];
  for(var i=0;i<=s.length-1;i++){
      if(s[i]===k){
          count=count+1;
      }
  }
  if(count==1){console.log("yes")}
  else{console.log("no")}
});
