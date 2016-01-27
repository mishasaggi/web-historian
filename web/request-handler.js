var path = require('path');
var archive = require('../helpers/archive-helpers');
var helper = require('./http-helpers');
var fs = require('fs');
var morgan = require('morgan');



exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
    //basic get request returns index page
    console.log(req.url);
    if(req.url === '/'){
      console.log("requested the base url");

      fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data){
        if(err) {
          throw err;
          console.log(err);
          res.writeHead(400, helper.headers);
          res.end(err);
        }
          console.log(helper.headers);
          console.log("data is: ", data); //correctly reading the data
          res.writeHead(200, {'Content-Type': "text/html"});
          res.end(data);

      });

    }

    //get request to an archived page

  } 

  // res.end(archive.paths.list);
};

