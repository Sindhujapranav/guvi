const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var s=n[1];
  var count=0;
  for(var i=0;i<=a.length;i++){
      if(a[i]===s){
          count=count+1;
      }
  }
  if(count>=1){console.log(count)}
  else{console.log("-1")}
});
