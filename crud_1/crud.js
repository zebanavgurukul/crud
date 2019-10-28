const express = require("express");
const app = express();
const fs = require("fs")

let contacts = require("./saral_data.json");
var bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/api/contacts", (req, res) => {
    res.json(contacts);
});

app.post("/api",(req,res)=>{
    var contact = {
        language : req.body.language,
        song_name :req.body.song_name,
        Singer : req.body.Singer,
        song_url : req.body.song_url
    }
    // console.log(contact)
    var data = fs.readFileSync("saral_data.json")
    data = data.toString();
    // console.log(data)
    var Data = JSON.parse(data)

    for(let i = 0; i < Data.length; i++){
        if(Data[i]["song_name"] == contact["song_name"]){
            return res.end("File exists :-$$$$$-:")
    }
}
    contact.id = Data.length + 1
    Data.push(contact)
    // console.log(Data)
    fs.writeFileSync("saral_data.json",JSON.stringify(Data,null,2))
    // console.log(Data)
    return res.JSON(Data)
});

app.put("/api/:id",(req,res) => {
	id = req.params.id
	var rawdata = fs.readFileSync("saral_data.json");
	rawdata = rawdata.toString();
	var Data = JSON.parse(rawdata);
 
	for(var i=0;i<Data.length;i++){
		if (Data[i]["id"] == id){
			Data[i]["language"]=req.body.language
			Data[i]["song_name"]=req.body.song_name
			Data[i]["Singer"]=req.body.Singer
			Data[i]["song_url"]=req.body.song_url
 
			fs.writeFileSync('saral_data.json', JSON.stringify(Data,null));
			return res.json(Data)    
		}  
	}
});

app.delete("/api/:id",(req,res) => {
	id = req.params.id
	var rawdata = fs.readFileSync("saral_data.json");
	rawdata = rawdata.toString();
	var Data = JSON.parse(rawdata);
 
	for(var i=0;i<Data.length;i++){
		if (Data[i]["id"] == id){
			delete Data[i]["language"]
			delete Data[i]["song_name"]
			delete Data[i]["Singer"]
			delete Data[i]["song_url"]

			fs.writeFileSync('saral_data.json', JSON.stringify(Data,null));
			return res.json(Data)    }  
	}
});

app.listen(8888,function(){
    console.log("8888 port pr shunta hai")
});