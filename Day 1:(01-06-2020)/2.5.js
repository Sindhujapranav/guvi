//2.5 Find the datatype of author age in Nodejs Object.
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
//find the datatype of age in authorDetails
console.log(typeof(library[1].authorDetails.age));


