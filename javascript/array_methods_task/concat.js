const concat1 = (array1, array2) => {
  return [...array1,...array2]
}

const array3=concat1(["hi"],["hello"])
console.log(array3)
