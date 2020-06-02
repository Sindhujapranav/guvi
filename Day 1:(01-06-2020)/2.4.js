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
//adding new object to library
library[2]={title:"SQL",price:200,readers:[],authorDetails:[]}; 
console.log(library[2])

