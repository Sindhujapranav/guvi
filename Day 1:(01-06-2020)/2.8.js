//2.8. Print how many readers for javascript in console.

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
//number of readers in javascript book
console.log(library[0].readers.length);


