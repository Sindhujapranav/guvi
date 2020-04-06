const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var sum=0;
  var patt1 = /[0-9]/g;
  var patt2= /[A-Z,a-z]/g;
  var nos = a.match(patt1);
  var str=a.match(patt2).join("");
var arr=nos.map(x=>+x);
for(var i=0;i<=arr.length-1; i++ ){
    sum = sum + arr[i];
    
}
console.log(str+sum)
});
