const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var hex = /[0-9,A-F,a-f]/g;
if(hex.test(a)) {
    console.log('yes');
} else {
    console.log('no');
}
});
