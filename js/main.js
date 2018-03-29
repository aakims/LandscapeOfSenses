var tripIndex; // define trip number 1~11
var indexFields = ["trip", "olive"],
    timeField = ["ftime"],
    displayFields = ["dust", "light", "tempF", "GINI_IND"],
    dataFields = ["unixt", "trip", "olive", "ftime", "dust", "light", "tempF", "GINI_IND"];

var selectFields = _.uniq(_.union(indexFields, timeField, displayFields, dataFields));

var graphTitles = ["Air Quality", "Light Level", "Temperature", "Gini Index"];
var graphVars = ["chart1", "chart2", "chart3", "chart4"];
var chart1, chart2, chart3, chart4;
var thisData = [];
// DEFINE TRIP DATA 

var defineData = function (tripIndex) {
    thisData = _.chain(sdata.features)
    .filter(function(feature) {
        //console.log(sdata.features[1])
        return ((feature.properties["trip"] === tripIndex) && (feature.properties["olive"] > 5))
    })
    .map(function(feature) {
        feature.properties = _.pick(feature.properties, selectFields);
        console.log(feature.properties);
        console.log(feature);
        return feature;
    }).value();
    console.log(thisData[1]);
    return thisData; 

};

var graphWidth = 600;
var graphHeight = 130;
var graphMargin = { top: 40, right: 20, bottom: 30, left: 100 };

// x and y axis setup
var x = d3.scaleTime().range([0, graphWidth]);
var y = d3.scaleLinear().range([graphHeight, 0]);

// setting map object extent 
var mapWidth = 800,
    mapHeight = 650,
    mapMargin = { top: 20, right: 10, bottom: 30, left: 20 };


var center = [2.5725, 39.957049],
    offset = [mapWidth / 2, mapHeight / 2],
    scale = 700000,
    PennSouthProjection = d3.geoConicConformal().scale(scale)
    .parallels([39 + 56 / 60, 40 + 58 / 60])
    .rotate([77 + 45 / 60, 0])
    .center(center)
    .translate(offset);

var graphSeries, graphItems, thisIndex; 


var setupCanvas = function(thisItem) {

    chart = d3.select("#" + thisItem).append("svg")
        .attr("width", graphWidth + graphMargin.left + graphMargin.right)
        .attr("height", graphHeight + graphMargin.top + graphMargin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + graphMargin.left + "," + graphMargin.top + ")");

    chart.append("text")
        .attr("x", graphWidth - 70)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("fill", "teal")
        .style("text-decoration", "underline")
        .text(graphTitles[thisIndex]);

};

var prepData = function(yDataIndex) {

    //var thisIndex = _.indexOf(graphItems, graphItem);
    var yData = displayFields[yDataIndex];
    console.log(yData); 
    console.log(thisData[1]);

    var yMin = d3.min(thisData, function(sensObj) { return sensObj.properties[yData]; }),
        yMax = d3.max(thisData, function(sensObj) { return sensObj.properties[yData]; });

    // console.log(yMin, yMax);
    //https://www.quora.com/How-do-I-use-string-content-as-variable-name-in-JS
    _.each(thisData, function(sensObj) {
            sensObj.properties["ftime"] =
                (((sensObj.properties["unixt"]) > 0) ?
                    new Date(sensObj.properties["unixt"] * 1000 + 18000000) : console.log("no time stamp"));
            return sensObj;
        });

    console.log(thisData); 

    x.domain(d3.extent(thisData, function(sensObj) { return sensObj.properties["fttime"]; }));
    y.domain([0.75 * yMin, 1.25 * yMax]);

    graphLine = d3.line()
        .x(function(d) { return x(d["ftime"]); })
        .y(function(d) { return y(d[yData]); });

    lineData = _.map(thisData, function(sensObj) {
        //console.log("in lineData"); 
        sensObj.properties = _.pick(sensObj.properties, "ftime", yData);
        return sensObj; 
    });
};



var displayGraphs = function(tripIndex) {
        //console.log(thisData);
        //console.log(sdata.features);

        console.log(tripIndex);
        //console.log("definedData example:" + thisData[10]) ;
        // graph the all graph divs defined by classname "graphs"
        graphSeries = document.getElementsByClassName("graphs");
        graphItems = _.map(graphSeries, function (graphItem) {return graphItem.id});
        console.log(graphItems); 
        //console.log(thisData[10]);
        prepData();


        _.each(graphItems, function (graphItem) {

            //(graphItem === "chart1") :
             defineData(tripIndex); 
             thisIndex = _.indexOf(graphItems, graphItem); 
             console.log(thisIndex);
             var thisGraph = graphItem;
             var chart, graphLine, lineData; 
             setupCanvas(graphItem); 
             prepData(thisIndex);
        });
    };