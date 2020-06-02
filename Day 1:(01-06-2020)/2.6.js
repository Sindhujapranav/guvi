//2.6. Print the price of Javascript book in console.

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
//price of javascript book in library
console.log(library[0].price);


