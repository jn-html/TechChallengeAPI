'use strict';
const Name = require('../models/name.model');

exports.findAll = function(req, res) {
  Name.findAll(function(err, name) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', name);
    res.send(name);
  });
};

exports.create = function(req, res) {
  const new_name = new Name(req.body);
  //handles null error
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Name.create(new_name, function(err, name) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Name added successfully!",data:name});
    });
  }
};

exports.findById = function(req, res) {
Name.findById(req.params.id, function(err, name) {
  if (err)
  res.send(err);
  res.json(name);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Name.update(req.params.id, new Name(req.body), function(err, name) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Name successfully updated' });
});
}
};
exports.delete = function(req, res) {
Name.delete( req.params.id, function(err, name) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Name successfully deleted' });
});
};
