const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],pn=[];
  a=n[0].split(" ");
  for(var i=a[0];i<=a[1];i++){
      c=false
      for(var j=2;j<i;j++){
          if(i%j===0){
              c=true;
          }}
          if(c===false){
              pn.push(i);
              c=1;}
  }
  console.log(pn.length)
});
