var d3 = require("d3");
var quadtree = d3.quadtree();

var fs = require('fs');
var tspData;
fs.readFile('sahara', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  tspData=data;
  processFile(); 
});
function processFile() {
    console.log('data');
    console.log(tspData);
}
