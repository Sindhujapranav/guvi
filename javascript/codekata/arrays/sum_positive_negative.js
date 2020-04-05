/*Ramit is given a list of both positive and negative integers. He has to tell the maximum sum out of all subarrays in the given list. 
He got confused and requested help from you. Now it is your task to find the maximum sum out of all subarrays in the given list.*/


const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ").map(x=>+x);
  var sum=0;
  var sum1=0
  var pos=[];
  var neg=[];
 for(var i=0;i<arr.length;i++){
     if((arr[i]) > 0){
         sum=sum+arr[i]
         pos.push(arr[i]);
         
     }
     else if (arr[i] < 0)
     {
         sum1=sum1+arr[i];
         neg.push(arr[i]);
        
     }
 }
console.log(sum+sum1)
});
