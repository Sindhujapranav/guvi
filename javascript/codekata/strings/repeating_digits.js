const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("");
  var c=0;
  for(var i=0;i<=a.length;i++){
    for(var j=i+1;j<=a.length;j++){
        if(a[i]===a[j]){
            c=+1;
        }
    }
  }
  if(c>=1) console.log("yes")
  else console.log("no")
 });
