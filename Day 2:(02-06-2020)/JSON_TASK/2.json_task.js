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
//1.Add height and weight to Fluffy

cat.height="8cm" // inserting height for cat
cat.weight="7cm" //inserting weight for cat
console.log(cat.height,cat.weight)

//2.Fluffy name is spelled wrongly. Update it to Fluffyy

cat.name="Fluffyy"//updating the cat value to fluffyy
console.log(cat.name)

//3.List all the activities of Fluffyy’s catFriends.

for (var i in cat){ //iterate through the cat object
 var key=i
 var keyval=cat[i];
for(var j in keyval){//iterate throught the keyvalues in cat
  var key1=j
  var keyval1=keyval[j]
console.log(cat.catFriends[j].activities)//catfriends activites is consoled
}
}
//4.Print the catFriends names.
for (var i in cat){ //iterate through the cat object
 var key=i
 var keyval=cat[i];
for(var j in keyval){//iterate throught the keyvalues in cat
  var key1=j
  var keyval1=keyval[j]
console.log(cat.catFriends[j].name)//catfriends activites is consoled
  }
}

//5.Print the total weight of catFriends
var weight=0;//total weight
for(var i=0;i<cat.catFriends.length;i++)//iterating through the object
{
weight+=cat.catFriends[i].weight;//adding the weight of catsfriends
}
console.log(weight);
//6.Print the total activities of all cats (op:6)

var catstotalactivities=cat.activities.length;//activities in cat object
var catsfriends=0
for(var i=0;i<cat.catFriends.length;i++)
{
  catsfriends+=cat.catFriends[i].activities.length;//activities in catfriendsobject
}
console.log(catstotalactivities+catsfriends);//total activities

//7.Add 2 more activities to bar & foo cats
cat.catFriends[0].activities[2]='active';//inserting activitiy to catfriends foo
cat.catFriends[0].activities[3]='friendly';
cat.catFriends[1].activities[2]='inactive';//inserting activity to catfriend bar
cat.catFriends[1].activities[3]='aggressive';
console.log(cat.catFriends[0].activities);
console.log(cat.catFriends[1].activities);

//8.Update the fur color of bar
cat.catFriends[0].furcolor="grey"//color change
console.log(cat)


//Problem 0 : Part B (15 mins):

var myCar = {
 make: "Bugatti",
 model: "Bugatti La Voiture Noire",
 year: 2019,
 accidents: [
 {
 date: "3/15/2019",
 damage_points: "5000",
 atFaultForAccident: true
 },
 {
 date: "7/4/2022",
 damage_points: "2200",
 atFaultForAccident: true
 },
 {
 date: "6/22/2021",
 damage_points: "7900",
 atFaultForAccident: true
 }
 ]
}
//1. Loop over the accidents array. Change atFaultForAccident from true to false.
for(var i=0;i<myCar.accidents.length;i++){//iterate through object mycar.accident
  myCar.accidents[i].atFaultForAccident="false"//changing the value to false
}
console.log(myCar.accidents)

//2. Print the dated of my accidents

for(var i=0;i<myCar.accidents.length;i++){//iterate through object mycar.accident
  console.log(myCar.accidents[i].date)//date in accidents are consoled
}

//Problem 1 (5 mins):
//Write a function called “printAllValues” which returns an newArray of all the input object’s values.


var obj = {name : "RajiniKanth", age : "33", hasPets : "false"};
var array=[];
function printAllValues(ob) {
 for(var i in obj){
   array.push(obj[i])
 }
  return array
}
printAllValues();

//Problem 2(5 mins) :

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj = {name : "RajiniKanth", age : "33", hasPets : "false"};
var array=[];
function printAllKeys(ob) {
 for(var i in obj){
   array.push(i)
 }
  return array
}
printAllKeys();


//Problem 3( 7–9 mins):

//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.

var obj= {name: "ISRO", age: 35, role: "Scientist"};
var array=[];
function convertListToObject(object) {
   for(var i in obj){
   array.push(i,obj[i])
 }
  return array
}
convertListToObject();

//Problem 4( 5 mins):

/*Parsing a list and transform the first and last elements of it:

1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.*/

var array = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast() {
    var newObject={}
    newObject[array[0]]=array[array.length-1];
    return newObject;
}
transformFirstAndLast();


//Problem 5 ( 7 -9 mins):

//Parsing a list of lists and convert into a JSON object:
//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", "1964"]];
//function to convert subarray first element into key and second element to value of an object
function fromListToObject() {
    var newobject={}
    for(var i=0;i<arr.length;i++)
    newobject[arr[i][0]]=arr[i][1];
    return newobject;
}
console.log(fromListToObject());

//Problem 6 (10 mins):
//Parsing a list of lists and convert into a JSON object:
//Write a function called “transformGeekData” that transforms some set of data from one format to another.

