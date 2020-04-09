const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var k=a[1];
  var st=a[0];
  var c=0;
  for(var i=0;i<=st.length-1;i++){
      if(st[i]===k)
      {
        c+=1;
      }
  }
  if(c===0)console.log("-1")
  else console.log(c)
});
