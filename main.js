/*it's somple try so the code is very primitive*/
var d3 = require("d3");
var quadtree = d3.quadtree();

var fs = require('fs');
var tspData;
var pointsArr={};
function crPointsArr() {
    tspData = fs.readFileSync('sahara','utf8');
    tspData = tspData.split("\n");

    for(i = 0,il=tspData.length;i<il-1;i++){
        console.log(tspData[i]);
        pointsArr[i]={};
        pointsArr[i].x=tspData[i].split(' ')[1];
        pointsArr[i].y=tspData[i].split(' ')[2];
    }
}

crPointsArr();


console.log(pointsArr);

