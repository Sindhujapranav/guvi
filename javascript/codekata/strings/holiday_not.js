const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  if(a==='saturday' || a==='sunday'){
      console.log("yes");
  }
  else{
      console.log("no")
  }
});
