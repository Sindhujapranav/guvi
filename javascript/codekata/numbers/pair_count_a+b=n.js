const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data)})
inp.on("close",()=>{
  var a=parseInt(n[0]);
  var c=0;
  for(var i=0;i<a;i++){
    for(var j=0;j<a;j++){
        if(i+j===a){
            c+=1;
        }
    }
  }
  console.log(c)
  
});
