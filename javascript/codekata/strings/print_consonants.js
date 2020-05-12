const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
var strings =a;
strings = strings.map(function (string) {
    return string.replace(/[aeiouAEIOU]/g, '');
});

console.log(strings.join(" "));
});
