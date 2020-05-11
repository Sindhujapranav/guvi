const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=> {
  var a=n[0].split("");
  dup=[];
  var count=0;
for (var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]==a[j])
        {
          count=1;
          dup.push(a[i])
        }
    }
}
if(count===0)
{console.log("-1")}
else {
    console.log((dup).join(" "))
    }
});
    
