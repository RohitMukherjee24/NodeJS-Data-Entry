var mongoose=require('mongoose');
var db=require('../models/db.js');
var EmployeeModel=mongoose.model('EmployeeModel');

exports.getEmployee=function(req,res){
 mongoose.model('EmployeeModel').find(function(err, empResponse){
res.send(empResponse);
 });
};

exports.getEmployeeById=function(req,res){
 var id = req.params.id;
 mongoose.model('EmployeeModel').find({_id:id}, function(err, empResponse){
res.send(empResponse);
 });

};

exports.addEmployee=function(req,res){

    var empObject=new EmployeeModel;
    empObject.name=req.body.name;
    empObject.email=req.body.email;
    empObject.date=req.body.date;
    empObject.dep=req.body.dep;
    empObject.gender=req.body.gender;
    empObject.age=req.body.age;

    empObject.save(function(err, savedUser){

        if(err){
        var message = "User exists";
         console.log(message);
         return;
        }else{
            console.log(savedUser);
        }
    });
};


exports.delEmployee = function(req,res){
     var id = req.params.id;
        EmployeeModel.remove({_id:id}, function(err){
             if(err){
            console.log("Error : "+err)
        }else{
            console.log("SuccessFully Removed a record");
            }
        });
    };



    exports.updateEmployee = function(req,res){
        var id = req.params.id;
        var body = req.body;
        var updtemp=new EmployeeModel;
        updtemp._id=id;
        updtemp.name=body.name;
        updtemp.email=body.email;
        updtemp.date=body.date;
        updtemp.dep=body.dep;
        updtemp.gender=body.gender;
        updtemp.age=body.age;

        EmployeeModel.update({_id:id}, {$set: {name:updtemp.name, email:updtemp.email, date:updtemp.date, dep:updtemp.dep, gender:updtemp.gender, age:updtemp.age}}, {multi:false}, function(err, updtObj){

            if(err){
               var message = "Error occured!!"+err;
               console.log(message);

               return;
           }else{
            console.log("SuccessFully Updated!!!! ");
        }
    });
    };
    
    
   
    

