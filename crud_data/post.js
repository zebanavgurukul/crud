const express = require('express');
const app = express();
const fs = require('fs')

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/api',(req,res)=>{
    var contact = {
        name : req.body.name,
        password :req.body.password,
        Email : req.body.Email
    }
    
    var data = fs.readFileSync("crud_post.json")
    data = data.toString();
    var Data = JSON.parse(data)

    for(let i = 0; i < Data.length; i++){
        if(Data[i]["Email"] == contact["Email"]){
            return res.end("File exists :-$$$$$$$$$$-:")
    }
}
    contact.id = Data.length + 1
    Data.push(contact)
    // console.log(Data)
    fs.writeFileSync("crud_post.json",JSON.stringify(Data,null))
    // console.log(Data)
    return res.json(Data)
});

app.listen(7000,function(){
    console.log("7000 port pr shunta hai")
});


// }
//             "id":1,
//             "name":"zeba shaikh",
//             "Email":"zeba18@navgurukul.org",
//             "password":"zeba12345"
// },
// {
//              "id":2,
//              "name":"neha shaikh",
//              "Email":"neha18@navgurukul.org",
//              "password":"nehanavgurukul"
// },
// {
//               "id":3,
//               "name":"rashmi kiran",
//               "Email":"rashmi18@navgurukul.org",
//               "password":"rashminavgurukul12345"
// }
