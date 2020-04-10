const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
    var count=0
  var a=[];
  for(var i=2;i<=data;i++)
  { 
    var not=1;
      for(var j=2;j<=i;j++)
      {
        if(i%j===0 && j!==i){
          not=0;
        }
}
  if(not===1){
    a.push(i);
      
  }
  }

  for(var k=0;k<a.length;k++){
    for(var p=0;p<a.length;p++)
{
    for(var l=0;l<a.length;l++){
    if((parseInt(a[k])+parseInt(a[p])+parseInt(a[l]))==data)
{
    var c=a[k]
    var d=a[p]
    var e=a[l]
    count=1;
    break;
    }
}
}
}
    if(count==1)
    {
    console.log(e,d,c);
    }
  
});
