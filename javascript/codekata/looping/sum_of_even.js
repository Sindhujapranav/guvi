const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data);});
inp.on("close",()=>{
    var a=parseInt(n[0]);
    var sum=0;
    for(i=2;i<=a;i++){
        sum+=i
        i+=1
    }
    console.log(sum)
});
