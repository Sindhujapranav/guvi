const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
 var a=n[0].split("")
 var sum=0;
 for(var i=0;i<=a.length-1;i++){
     var squ=parseInt(a[i]*a[i]);
     sum=sum+squ;
 }
 console.log(sum)
});
