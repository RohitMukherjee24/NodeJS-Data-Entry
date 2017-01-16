var mongoose=require('mongoose');
var chalk=require('chalk');

var dbURI = 'mongodb://ram:1234@ds111529.mlab.com:11529/employees'

console.log("Establishing connection mongodb");
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('err', function(){
    console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: String,
    date: String,
    dep: String,
    gender: String,
    age: String,
}, {collection: 'employees'});


mongoose.model('EmployeeModel', employeeSchema);