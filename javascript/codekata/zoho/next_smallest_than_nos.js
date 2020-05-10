const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin});
const a=[]
inp.on("line", (data) => {
  a.push(data)});
inp.on("close",()=>{
    var b=a[1].split(" "),l=[],k=0
    for(var i=0;i<b.length;i++) {
        for(var j=i+1;j<b.length;j++){
           if(parseInt(b[i])>parseInt(b[j]))
            {
            k=1
            break;
            }
            else
            {
            k=0
            }
        }
        if(k==1)
        {
        l.push(b[j])
        }
        else
        {
        l.push("-1")
        }
    }
    console.log(l.join(" "))
});
