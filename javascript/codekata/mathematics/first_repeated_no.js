const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ").map(x=>+x);
  var c=0;
  for(var i=0; i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j])
      {
        c=c+1;
        break;
      }
     }
     if(c==1) break;
  }
  if(c==1) console.log(arr[i])
  else console.log("unique")
});
