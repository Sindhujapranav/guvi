//1.3 Extract and print all the country name with alpha3Code and population in console.
var request = new XMLHttpRequest() 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
var jsonData = JSON.parse(this.response)
for(var i in jsonData)//iteration through json data                						  
	{
      //extract country name and alpha3code and population
	console.log(jsonData[i].name,":",jsonData[i].alpha3Code,":",jsonData[i].population) 
      }
}
request.send()

