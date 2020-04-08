const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var a1=n[1].split(" ").map(x=>+x);
  var k=parseInt(n[2]);
  var res=[];
  for(var i=0; i<=a1.length-1;i++){
      if(a1[i]%k===0){
          res.push(1);
          
      }
      else
      {
        res.push(0)
      }
  }
  
console.log(res.join(" "))
});
