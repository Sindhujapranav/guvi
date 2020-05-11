//develop an algorithm which takes input as in form of string(Number plate) and gives back Engine number.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=> {
  var a=n[0].split("");
  var num=[];
  var numb=n[0].match(/[0-9]+/g).join("")
  num=numb.split("").map(x=>+x)
  var sum1 = num.reduce(function(a, b)
    {
        return a + b;
    })
  console.log(sum1); 
});
    
