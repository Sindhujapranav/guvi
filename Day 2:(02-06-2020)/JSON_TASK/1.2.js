//1.2 Extract and print the all the country name with capital name in console

var request = new XMLHttpRequest() 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
var jsonData = JSON.parse(this.response)
for(var i in jsonData)//iteration through json data                						  
	{
      //extract country name and capital
	console.log(jsonData[i].name,":",jsonData[i].capital) 
      }
}
request.send()
