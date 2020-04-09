const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var c1=0;//open(count
  var c2=0;//close)count
  for(var i=0;i<=a.length-1;i++){
      if(a[i]=='(')
      c1=c1+1
      else if(a[i]==')')
      c2=c2+1
  }
 if(c1===c2) console.log('yes')
 else console.log('no')
});
