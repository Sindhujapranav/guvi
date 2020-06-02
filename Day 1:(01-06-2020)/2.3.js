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
//to update readers in nodejs
//function declared with variable updatereaders
var updatereaders=function(data1,data2){
library[1].readers.name=data1;
library[1].readers.count=data2;

//assigning the values as data's to insert the readers
}
//updating the readers
updatereaders("coma","200")
console.log(library[1].readers)

