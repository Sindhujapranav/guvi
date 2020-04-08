const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
     var a=userInput[0];
     var b=userInput[1].split(" ");
     var count=0;
     var x=[];
     for(var i=0;i<b.length;i++)
     {
         for(var j=i+1;j<b.length;j++)
         {
             if(b[i]==b[j])
             x.push(b[i]);
             count=count+1;
         }
     }
     if(count>=1)
     console.log(x[0]);
});
