const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("");
  var count=0;
for(var i=0;i<=a.length-1;i++)
{
if ((a[i]=="a") || (a[i]=="e")|| (a[i]=="i")||(a[i]=="o")||(a[i]=="u"))
    {
    count=count+1;
    }
}
if(count>=1) {console.log('yes')}
else {console.log("no")}
});
