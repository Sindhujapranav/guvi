const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var arr=n[0].split("");
  var uniq = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j] && i != j) break;
    else if (j == arr.length-1) 
    uniq.push(arr[i]);
  }
}
console.log((uniq).join(""));
});
