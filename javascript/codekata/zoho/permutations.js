const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var str=n[0];
function permutations(str) {
	let results = [];

	if (str.length == 1) {
		return [ str ];
	}
for (let i = 0; i < str.length; i++) {
		const first = str[i];
		const charsRemaining = str.substring(0, i) + str.substring(i + 1);
		const remainingPerms = permutations(charsRemaining);
		for (let j = 0; j < remainingPerms.length; j++) {
			results.push(first + remainingPerms[j]);
		}
	}
	return results ;
}
var b=permutations(str);
for(var i=0;i<b.length;i++)
{
    console.log(b[i])
}
});
