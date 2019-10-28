const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.delete("/api/:id",(req,res) => {
   id = req.params.id
   var rawdata = fs.readFileSync("crud_delete.json");
   rawdata = rawdata.toString();
   var Data = JSON.parse(rawdata);

    for(var i=0;i<Data.length;i++){
        if (Data[i]["id"] == id){
            delete Data[i]["name"]
            delete Data[i]["Email"]
            delete Data[i]["password"]
            
            fs.writeFileSync('crud_delete.json', JSON.stringify(Data,null));
            return res.json(Data)    }  
    }
});
app.listen(8001,function(){
   console.log("8001 port pr shunta ha");
});