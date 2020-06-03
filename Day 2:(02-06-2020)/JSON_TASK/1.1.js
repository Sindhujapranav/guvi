//1.1 Extract and print all the country name with the flag URL in console

var request = new XMLHttpRequest() 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
var jsonData = JSON.parse(this.response)
for(var i in jsonData)//iteration through json data                						  
	{
      //extract country name and flag
	console.log(jsonData[i].name,"=" ,jsonData[i].flag) 
      }
}
request.send()
