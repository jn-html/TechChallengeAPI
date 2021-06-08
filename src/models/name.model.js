'use strict';
var dbConn = require('./../../config/db.config');

//Name object create
var Name = function(name){
  this.name     = name.name;
  this.description      = name.description;
  this.status         = name.status ? name.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Name.create = function (newEmp, result) {
dbConn.query("INSERT INTO names set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Name.findById = function (id, result) {
dbConn.query("Select * from names where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Name.findAll = function (result) {
dbConn.query("Select * from names", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('names : ', res);
  result(null, res);
}
});
};
Name.update = function(id, name, result){
dbConn.query("UPDATE names SET name=?,description=? WHERE id = ?", [name.name,name.description,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Name.delete = function(id, result){
dbConn.query("DELETE FROM names WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Name;