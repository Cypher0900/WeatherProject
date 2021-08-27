const express = require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 8000

// public static path

const static_path = (path.join(__dirname,"../public"));
const template_path = (path.join(__dirname,"../templates/views"));
const partials_path = (path.join(__dirname,"../templates/partials"));

//HandleBars
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));
//Follows top to bottom approach so we get this page served only for the home page


/// Routing 
app.get("/", (req, res)=>{

//    res.send("Welcome to Arnab's Website")
    res.render('index');

});

app.get("/about", (req, res)=>{

//    res.se  nd("Welcome to Arnab's About Page")
    res.render('about');

});

app.get("/weather", (req, res)=>{

   res.render('weather')

});

app.get("*", (req, res)=>{

//    res.send("404 Error Page OOPS")
    res.render('404error',{
        errorMsg:"Opps! Page Not Found"
    })

});


//Server listening
app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`);
});