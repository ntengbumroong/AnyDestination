require('dotenv').config();
const express = require("express");
var request = require("request");
const app= express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/weatherRequest", (req, res) => {
    request(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.loc}&units=imperial&appid=${process.env.API_KEY}`,
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
               var parsedBody = JSON.parse(body);
            //    var temp = parsedBody["main"]["temp"];
               res.send({parsedBody});
            }
        }
    );
});  

app.listen(port, () => console.log(`Example app listening on port ${port}`));
