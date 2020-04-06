const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]);
  var s=a.toString(2)
 var o=s.split("")
 console.log(o)
 var count=0;
 for(var i=0;i<= o.length-1;i++){
     if(o[i]==='1'){
         count=count+1;
     }
 }
  console.log(count)
});
