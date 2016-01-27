var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// // The following function names are provided to you to suggest how you might
// // modularize your code. Keep it clean!


exports.readListOfUrls = function(callback){
  //should read urls from sites.txt

  //fs.readFile Asynchronously reads the entire contents of a file.
  //Q why can't you assign the output of fs.fileread to a variable?
  fs.readFile(exports.paths.list, 'utf8', function(err, data){
    //without utf8 encoding parameter the output is read like 
    // <Buffer 65 78 61 6d 70 6c 65 31 2e 63 6f 6d 0a 65 78 61 6d 70 6c 65 32 2e 63 6f 6d>

    //only throw the error if it exists otherwise it will show null
    if(err){
      throw err;
      console.log("there was an error in reading the file.", err);
    }
    console.log("data is: ", data);
    var listOfUrls = data.split('\n'); 
    //return callback on our cleaned data
    return callback(listOfUrls);
  });

};

exports.isUrlInList = function(targetUrl, callback){
  //should check if a url is in the list
  

};

exports.addUrlToList = function(){
  //should add a url to the list
};

exports.isUrlArchived = function(){
  //should check if a url is archived
};

exports.downloadUrls = function(){
  //should download all pending urls in the list
};
