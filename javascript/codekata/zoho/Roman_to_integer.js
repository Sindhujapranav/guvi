const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var s=n[0];
const roman={"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};
function romancon(s) {
arr = s.split("");
let total = 0
let cur,curval,nxt,nxtval;
for(let i = 0; i < arr.length; i++){
   cur=arr[i];
   curval=roman[cur];
   nxt=arr[i+1];
   nxtval=roman[nxt];
    if (curval >= nxtval)
       {total += (curval);} 
    else if (curval < nxtval)
       {total -= (curval);  } 
    else if (curval && !nxtval) 
       {total += curval;}
    else
        return -1;
 }
 return total
 }
console.log(romancon(s))
});
