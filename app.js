var express = require("express"),
    app = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});
    
app.get("/main", function(req, res){
    res.render("main");
});
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Circle Cirque server on the Net!");
});