//Problem 0 : Part A .js

var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}

cat.height="8cm" // inserting height for cat
cat.weight="7cm" //inserting weight for cat
console.log(cat.height,cat.weight)
cat.name="Fluffyy"//updating the cat value to fluffyy
console.log(cat.name)

//List all the activities of Fluffyy’s catFriends.
//Print the catFriends names.

for (var i in cat){ //iterate through the cat object
 var key=i
 var keyval=cat[i];
for(var j in keyval){//iterate throught the keyvalues in cat
  var key1=j
  var keyval1=keyval[j]
console.log(cat.catFriends[j].activities)//catfriends activites is consoled
console.log(cat.catFriends[j].name)// cats friends name is displayed
}
}
















