var request = new XMLHttpRequest() 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
var jsonData = JSON.parse(this.response)
for(var i in jsonData)//iteration through json data                						  
	{
      //extract country name and their borders
	console.log(jsonData[i].name,":",jsonData[i].borders) 
      }
}
request.send()
