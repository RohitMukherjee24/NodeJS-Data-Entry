var express=require('express');
var app = express();
var bodyparser=require('body-parser');
var session=require('express-session');
var hbars=require('express-handlebars');
var chalk=require('chalk');
var routes=require('./routes/routes.js');


app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/employee', routes.getEmployee);
app.get('/employee/:id', routes.getEmployeeById);
app.post('/employee', routes.addEmployee);
app.delete('/employee/:id', routes.delEmployee);
app.put('/employee/:id', routes.updateEmployee);


var port = process.env.PORT || 3000;
app.listen(port, function(){

    console.log('HTTP server is listening on port '+ port);
});