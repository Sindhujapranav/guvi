const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var k=a[1];
  var arr=n[1].split(" ").map(x=>+x);
  for(var i=0;i<=arr.length-1;i++)
  {
    var diff=arr[i]-k;
    if(diff<1)
    {
        var a1=arr[i]
    }
  }
  var d1=arr.indexOf(a1)
  //if(diff<1)console.log(d1)
  //else  console.log("-1");
  console.log(d1)
});
