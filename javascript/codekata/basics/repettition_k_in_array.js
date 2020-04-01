const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],x,m,c=-1;
  a=n[1].split(" ");
  m=n[0].split(" ");
  
  for(var i=0;i<a.length;i++){
      if(m[1]==a[i])c+=1;}
console.log(c);
});
