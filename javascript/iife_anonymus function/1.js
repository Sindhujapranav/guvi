//print odd numbers using iife function

a=[1,2,3,4,5,6,7,8,9,10]
var odd=a.map(function(n){if((n%2)!=0){console.log(n)}})

//print palindromes in array

var arr=['11','121','123','1221','2346']
var pal=arr.filter(function(n){
    return n==n.split("").reverse().join("");})
console.log(pal)

//Prime numbers

var a=[1,2,3,4,5,6,7,8,9,10]
var primeno=a.filter(function(n){
    for( var i=2;i<n;i++){
        if(n%i==0) return false
    }
    return n!==1})
console.log(primeno)
