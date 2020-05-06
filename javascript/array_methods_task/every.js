const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var a=n[0].split(" ").map(x=>+x)
var arr=n[1].split(" ").map(x=>+x);
console.log(arr);
//every()
const positive=(currentValue) => currentValue >= 1;
console.log(arr.every(positive));
// without using every
var con=[];
for(var i=0;i<arr.length;i++){
 if(arr[i] >= 18){
     con.push(ages[i])
 }
}
if((con.length)==(arr.length)){
  console.log("true")
}
else{
    console.log("false")
}
});
