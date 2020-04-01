const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
 var count=0;
 if(a>1)
  for(var i=2;i<a;i++){
      if(a%i===0){
          console.log("yes");
          count=1;
          break;
      }
  }
  
if(count===0) {console.log("no")}
});
