const express = require('express');
const app = express();
let contacts = require("./crud_get.json");

app.get("/api/contacts", (request, response) => {
    response.json(contacts);
});

app.listen(5000,function(){
    console.log("5000 port pr shunta hai")
});
