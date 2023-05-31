const express = require ('express');

const app = express();

app.set("view engine" , "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const Port = process.env.Port || 3000 ;


app.get('/' , function(req , res){
    res.render("index");
});


app.post("/contact" , (req,res) =>{
    const {firstname , lastname , email ,Message , phonenumber} = req.body ;
    res.redirect("/");
})

app.listen(Port , function(){
    console.log("Started on " + Port);
})