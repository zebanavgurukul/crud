const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.put("/api/:id",(req,res) => {
   id = req.params.id
   var rawdata = fs.readFileSync("crud_put.json");
   rawdata = rawdata.toString();
   var Data = JSON.parse(rawdata);

    for(var i=0;i<Data.length;i++){
        if (Data[i]["id"] == id){
            Data[i]["name"]=req.body.name
            Data[i]["Email"]=req.body.Email
            Data[i]["password"]=req.body.password
            
            fs.writeFileSync('crud_put.json', JSON.stringify(Data,null));
            return res.json(Data)    }  
    }
});
app.listen(8005,function(){
   console.log("8005 port pr shunta ha");
});