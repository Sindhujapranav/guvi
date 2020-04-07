const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ").map(x=>+x);
  var result=[];
  var rev = arr.reverse();
  var tgoals=rev[0]+rev[1]+rev[2]
  var s=rev.reverse();
 for(var i=0;i<=s.length-1;i++){
     var netgoal=s[i]-tgoals;
     result.push(netgoal)
 }
 console.log(result.join(" "))
});
