const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{ 
a=[], ze=0;
var a=n[0].split(" ");
Ze=[];
var count=0;
duplicatearray(a);
});
function duplicatearray(a){
  for(var i=0;i<=a.length; i++)
  {                        
   for(var j=i+1;j<=a.length ;j++)
    {
        if(parseInt(a[i])==parseInt(a[j]))
        {
            count=1;
            break;
        }
    }
  }
  if(count==0)
  {
      ze.push(a[i]);
  }
console.log(ze);
}
