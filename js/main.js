mapboxgl.accessToken = 'pk.eyJ1IjoiYWFraW1zIiwiYSI6ImNqZmQ1bm4yaDF4NnQzdW8xem54dmNzYXQifQ.VfaDRyNApyLYnCVL7PcpzA';

var mapStyle = 'mapbox://styles/aakims/cjfejc27a56ui2sqw2lh5c03m'

//create a map using the Mapbox Dark theme, zoomed in to Philly
var map = new mapboxgl.Map({
    container: 'map',
    style: mapStyle, 
    zoom: 11,
    center: [-75.1652, 39.9526]
});

var tripIndex; // define trip number 1~11
var indexFields = ["trip", "olive"],
    timeField = ["ftime"],
    displayFields = ["dust", "light", "tempF", "GINI_IND"],
    dataFields = ["unixt", "trip", "olive", "ftime", "dust", "light", "tempF", "GINI_IND"];
var mapCenterCoor;
var defineMapCenter = function() {
    var midIndex = thisData.length / 2;
    mapCenterCorr = thisData[midIndex].geometry.coordinates;
};


var selectFields = _.uniq(_.union(indexFields, timeField, displayFields, dataFields));

var graphTitles = ["Air Quality", "Light Level", "Temperature", "Gini Index"];
var graphVars = ["chart1", "chart2", "chart3", "chart4"];
var chart1, chart2, chart3, chart4;
var thisData = [];
var lineData;
// DEFINE TRIP DATA 

var defineData = function(tripIndex) {
    thisData = _.chain(sdata.features)
        .filter(function(feature) {
            //console.log(sdata.features[1])
            return ((feature.properties["trip"] === tripIndex) && (feature.properties["olive"] > 5))
        })
        .map(function(feature) {
            feature.properties = _.pick(feature.properties, selectFields);
            //console.log(feature.properties);
            //console.log(feature);
            return feature;
        })
        .value();

    console.log(thisData[1]);
    return thisData;

};

var graphWidth = 600;
var graphHeight = 130;
var graphMargin = { top: 20, right: 20, bottom: 20, left: 40 };

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

// x and y axis setup
var x = d3.scaleTime().range([0, graphWidth]);
var y = d3.scaleLinear().range([graphHeight, 0]);



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

var parseTime = d3.timeParse("%x");

var prepData = function(yDataIndex) {

    //var thisIndex = _.indexOf(graphItems, graphItem);
    lineData = JSON.parse(JSON.stringify(thisData));
    var yData = displayFields[yDataIndex];

    console.log(yData);
    //console.log(thisData[1]);

    var yMin = d3.min(lineData, function(sensObj) { return sensObj.properties[yData]; }),
        yMax = d3.max(lineData, function(sensObj) { return sensObj.properties[yData]; });

    _.map(lineData, function(feature) {
        feature.properties["ftime"] = new Date(feature.properties["unixt"] * 1000 + 18000000);
        return feature;
    })
    var xMin = d3.min(lineData, function(sensObj) { return sensObj.properties["ftime"] });
    var xMax = d3.max(lineData, function(sensObj) {
        var formatted = new Date(sensObj.properties["ftime"]);
        return formatted
    });

    //var xScale = d3.time.scale()
    //.domain([xMin, xMax])
    //.rnage

    console.log(xMin, xMax);
    console.log(yMin, yMax);
    //https://www.quora.com/How-do-I-use-string-content-as-variable-name-in-JS

    console.log(lineData[0]);
    console.log(thisData[0]);

    var xRange = xMax - xMin,
        yRange = yMax - yMin;
    console.log(xRange, yRange);
    x.domain([xMin - (xRange * 0.01), xMax]);
    y.domain([yMin - (yRange * 0.1), yMax]);
    //y.domain([yMin - (yRange * 0.05), yMax + (yRange * 0.05)]);

    // set domain to be extent +- 5%
    //x.domain([xExtent[0] - (xRange * .05), xExtent[1] + (xRange * .05)]);
    //y.domain([yExtent[0] - (yRange * .05), yExtent[1] + (yRange * .05)]);

    graphLine = d3.line()
        .x(function(d) { return x(d.properties["ftime"]) })
        .y(function(d) { return y(d.properties[yData]); });

    lineData = _.map(lineData, function(sensObj) {
        //console.log("in lineData"); 
        sensObj.properties = _.pick(sensObj.properties, "ftime", yData);
        sensObj.properties["ftime"] = +sensObj.properties["ftime"];
        sensObj.properties[yData] = +sensObj.properties[yData];
        return sensObj;
    });
    //console.log(lineData);
};

var renderGraph = function() {

    //console.log("Here");

    var axisY = d3.axisLeft(y);

    axisY.ticks(5);

    chart.append("g")
        .attr("transform", "translate(0," + graphHeight + ")")
        .call(d3.axisBottom(x));

    chart.append("g")
        .call(axisY);

    console.log(lineData);
    chart.append("path")
        .attr("class", "line")
        .attr("d", graphLine(lineData));
};

var displayMapbox = function() {

    var dataCenterCoor, dataMidPoint;
    var latExtent, longExtent; 
    var defineMapCenter = function() {
        var dataMidPoint = Math.round(_.size(thisData) / 2);
        dataCenterCoor = thisData[dataMidPoint].geometry.coordinates;
    };
    var customZoom = (_.size(thisData) < 100) ? 14 : 13; 
    var markerSize = (customZoom === 14) ? 4 : 2; 

    defineMapCenter();
    console.log(dataCenterCoor);

    map = new mapboxgl.Map({
        container: 'map',
        style: mapStyle,
        zoom: customZoom,
        center: dataCenterCoor //[-75.1652, 39.9526]
    });

    map.on("load", function() {
        map.addSource("sensing-points", {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": thisData
            }
        });

        map.addLayer({
            "id": "park-volcanoes",
            "type": "circle",
            "source": "sensing-points",
            "paint": {
                "circle-radius": markerSize,
                "circle-color": "#db8a83"
            },
            "filter": ["==", "$type", "Point"],
        });


    });
}


var displayGraphs = function(tripIndex) {

    clearCanvas();
    defineData(tripIndex);
    graphSeries = document.getElementsByClassName("graphs");
    graphItems = _.map(graphSeries, function(graphItem) { return graphItem.id });

    //displayMap();
    displayMapbox();

    _.each(graphItems, function(graphItem) {

        //(graphItem === "chart1") :
        //defineData(tripIndex); 
        //console.log(thisData);
        thisIndex = _.indexOf(graphItems, graphItem);
        console.log(thisIndex);
        var thisGraph = graphItem;
        var chart, graphLine;
        setupCanvas(graphItem);
        prepData(thisIndex);
        renderGraph();

    });
};


var displayMap = function() {

    var mapsvg = d3.select("#map")
        .append("svg")
        .attr("width", mapWidth + mapMargin.left + mapMargin.right)
        .attr("height", mapHeight + mapMargin.top + mapMargin.bottom)
        .attr("transform",
            "translate(" + mapMargin.left + "," + mapMargin.top + ")");

    var geoPath = d3.geoPath()
        .projection(PennSouthProjection);

    var g = mapsvg.append("g");

    g.selectAll("path")
        .data(philly_neighborhoods.features)
        .enter()
        .append("path")
        .attr("fill", "#ccc")
        .attr("stroke", "#333")
        .attr("d", geoPath);

    var mapData = JSON.parse(JSON.stringify(thisData));
    //console.log(mapData[0]);

    var bubbles = mapsvg.append("g");

    bubbles.selectAll("path")
        .data(mapData)
        .enter()
        .append("path")
        .attr("fill", "#900")
        .attr("stroke", "#999")
        .attr("d", geoPath)
        .attr("class", "sensingpts")
        .on("mouseover", function(d) {
            d3.select("#dateval").text(d.properties["date"])
            d3.select("#dustval").text(d.properties["dust"])
            d3.select("#lightval").text(d.properties["light"])
            d3.select("#tempval").text(d.properties["tempF"])
            d3.select("#ginival").text(d.properties["GINI_IND"])
            d3.select(this).attr("class", "sensingpts hover");
        })
        .on("mouseout", function(d) {
            d3.select("#dateval").text("")
            d3.select("#dustval").text("")
            d3.select("#lightval").text("")
            d3.select("#tempval").text("")
            d3.select("#ginival").text("")
            d3.select(this).attr("class", "sensingpts");
        });

    //var datalocator = d3.line()
};

var clearCanvas = function() {

    // ("#" + thisItem).append("svg")
    _.each(graphItems, function(thisItem) {
        $("#" + thisItem).empty();
    });
    $("#map").empty();

    //var items = d3.select('svg').selectAll('.item').data(newData);

    // Remove old elements:
    //items.exit().remove();
};