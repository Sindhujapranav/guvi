var library=[
    {
        title:"javascript",
        price: 500,
        readers:[
            {
                name:"Person 1",
                count:300
            },
            {
                name:"Person 2",
                count:400 
            }
        ],
        authorDetails :{
            name:"Raj",
            age:40
        }
    },
    {
        title:"nodejs",
        price:600,
        readers:[],
        authorDetails:{
            name:"Raj",
            age:40
        }
    }
]
//to update the count value of person2 in javascript
//function declared with variable updatecount
var updatecount=function(counts){
library[0].readers[1].count=counts
//assigning the value count of person2 count as counts to change the count value
}
//updating the count value to 1000
update(1000)
console.log(library[0].readers[1].count)


