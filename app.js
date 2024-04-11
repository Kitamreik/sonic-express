//Packages
//express 
const express = require("express");

//Middleware
// morgan 
const morgan = require("morgan");

//path
const path = require("node:path");

//init the app and the port
const app = express();
const PORT = 5050; //port # to 5050 change to minimize server clashes
const cors = require("cors");//define cors after the port 

app.use(morgan("dev")); //dev
//----------------------------------------------------
//define the routing variable for gamerRoutes
//const gameRoutes = require("./routes/siteRouter");
const gameRoutes = require("./routes/siteRouter.js");
//----------------------------------------------------
//J-SON Derulo 
app.use(express.json());

//encode forms 
app.use(express.urlencoded({extended:true}));

//false - querystring library
//true- the qs library, default is true

//use the public directory
app.use(express.static(path.join(__dirname, "public")));

//use cors - please disable until auth unit. It will prevent the server from running.
//app.use(cors); 

//----------------------------------------------------
//Set up an index route with a success message: "Index successful. Keep this route always for the apps you make." It should reflect the status of OK in the status and the statusCode
app.get("/", (req, res, next) => {
    res.status(200).json({success: 
        {message: 
            "Index successful. Keep this route always for the apps you make.", 
            statusCode: 200
        }}
        );
});

//----------------------------------------------------
//Tell the app to use the routing variables you defined earlier... etc
app.use(gameRoutes);

//----------------------------------------------------
//Server: set up the server with the message "The game server is listening on port #"
app.listen(PORT, () => {
    //SEND A MESSAGE
    console.log(`The game server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});