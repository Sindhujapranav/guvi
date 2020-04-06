const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ")
  var k=a[1];
  var z=a[0];
  var arr=[];
  var count=0;
  for(var i=1;i<=z;i++){
      arr.push(n[i])
  }
  
  for(var j=0; j<=arr.length; j++)
  {
     if(arr[j]===arr[j+1]){
         count=count+1;
     }
  }
  if(count==k){console.log("yes")}
  else {console.log("no")}
});
