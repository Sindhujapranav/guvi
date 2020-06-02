//2.7. Print the age of Nodejs Author in console.

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
        ptrice:600,
        readers:[],
        authorDetails:{
            name:"Raj",
            age:40
        }
    }
]
//age of nodejs author
console.log(library[1].authorDetails.age);


