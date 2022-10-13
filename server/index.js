const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());





const { getCompliment } = require('./controller');
const { getFortune } = require('./controller');
const { getRelax } = require('./controller');
const { getBrewery} = require("./controller");
const { getBurger} = require("./controller");



app.get("/api/compliment", getCompliment); 
app.get("/api/fortune", getFortune);
app.get("/api/relax", getRelax);
app.get("breweries/random", getBrewery)
app.get("/api/burger", getBurger)




app.listen(4000, () => console.log("Server running on 4000"));
