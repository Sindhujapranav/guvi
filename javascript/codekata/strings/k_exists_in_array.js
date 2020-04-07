const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var arr=n[1].split(" ").map(x=>+x);
  var t=a[1];
  var c=0;
  for(var i=0; i<=arr.length-1; i++){
      if( arr[i] == t ){
          c=c+1;
      }
  }
  if(c===0) {console.log("no")}
  else { console.log("yes")}
});
