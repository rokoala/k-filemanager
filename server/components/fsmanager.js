var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
var dirTree = require('directory-tree');
var fsManager = function(){}

fsManager.prototype.read = function(path){
  return dirTree(path);
};

fsManager.prototype.remove = function(path,cb){
  exec('rm -r "' + path +'"', function (err, stdout, stderr) {
    cb(err,stdout,stderr);
  });
};

fsManager.prototype.mkdir = function(_path,cb){
  fs.mkdir(_path, function(err){
    cb(dirTree(_path),err);
  })
};

module.exports = new fsManager();
