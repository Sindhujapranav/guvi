const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("")
  var open=0;
  var close=0;
  for(var i=0;i<=a.length;i++){
    if((a[i]==='(') || (a[i]==='{') ||(a[i]==='['))
    {
      open=open+1;
    }
    else if((a[i]===')') || (a[i]==='}') ||(a[i]===']'))

    {
    close=close+1;
    }
  }
  if(open==close) console.log("yes")
  else console.log("no")
});
