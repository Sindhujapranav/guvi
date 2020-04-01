const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[1].split(" ");
  var x=n[0];
  var l=a[0];
  var r=a[1];
  if(x>l && x<r){
      console.log("yes")
  }
  else {console.log("no")}
});
