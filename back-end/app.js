import { createRequire } from 'module'
import nodeFetch from 'node-fetch';
const require = createRequire(import.meta.url);
require('dotenv').config();
import pkg from 'unsplash-js';
const { createApi } = pkg;
const express = require("express");
var request = require("request");
const app= express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(cors({origin: true}));

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/weatherRequest", (req, res) => {
    request(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.loc}&units=imperial&appid=${process.env.WEATHERMAP_API_KEY}`,
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
               var parsedBody = JSON.parse(body);
               res.send({parsedBody});
            }
            else {
                res.send("Error")
            }
        }
    );
}); 

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY,
    fetch: nodeFetch,  
});

app.get("/imgRequest", (req, res) => {
    unsplash.search.getPhotos({
        query: req.query.img,
        perPage: 3

    }).then(result => {
        res.send(result.response);
    })
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
