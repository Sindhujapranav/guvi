const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var a=data;
  var c=0;
  var b=[];
  for(i=2;i<=a;i++){
    var count=0;
    for(j=1;j<=i;j++){
      if(i%j===0){
        count=count+1;
      }
    }
    if(count==2) {b.push(i);
    }
  }
  for(var k=0;k<b.length;k++){ 
    for(var l=k+1;l<b.length;l++){
      if((b[k]+b[l])==a){
        c=c+1;
      }
    }
  }
  for(var h=0;h<b.length;h++){
      if((b[h]+b[h])==a){c=c+1;
      }
    }
  console.log(c);
});
