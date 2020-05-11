const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var str1=n[0];
function is_Pali(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}
function pali(str1){
var lmax = 0,
maxp = '';
for(var i=0; i < str1.length; i++)
{
var subs = str1.substr(i, str1.length);
for(var j=subs.length; j>=0; j--)
{
var sub1 = subs.substr(0, j);
if (sub1.length <= 1)
continue;
if (is_Pali(sub1))
{
if (sub1.length > lmax) 
{
lmax = sub1.length;
maxp = sub1;
}
}
}
}
return maxp;
}
console.log(pali(str1));
});

