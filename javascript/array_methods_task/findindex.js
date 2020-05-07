const findindex1 = [1,2,3].includes(2)
const includes = (array, value) => {
  var index=-1
  for (let i=0; i < array.length; i++){
    index+=1;
    if(array[i] === value){
   return index
    }
  }
  return -1
}
includes([1,2,3], 2)
