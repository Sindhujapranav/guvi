//Insert a new key called email and assign a value email1@gmail.com and
email2@gmail.com respectively in both authorDetails object;

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
//to update the email to authordetails
//function declared with variable updateemail
var updateemail=function(email1,email2){
library[0].authorDetails.email=email1
library[1].authorDetails.email=email2
//assigning the email as data to insert the email
}
//updating the email
updateemail("email1@gmail.com","email2@gmail.com")
console.log(library[0].authorDetails.email)
console.log(library[1].authorDetails.email)

