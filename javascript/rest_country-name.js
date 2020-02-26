//gets country name from json data base and change the case to upper case of countries using map function
const cntryname=country.map((item)=>{
    return(item.name).toUpperCase()})
    console.log(cntryname)
    
//filters the capital length of 5
const caplen=country.filter((item)=>{
    return(item.capital).length<=5})
    console.log(caplen)
    
// to find the country details using find function
const findd=country.find((item)=>{
    return item.name==='India'})
