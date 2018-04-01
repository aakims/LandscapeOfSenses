mapboxgl.accessToken = 'pk.eyJ1IjoiYWFraW1zIiwiYSI6ImNqZmQ1bm4yaDF4NnQzdW8xem54dmNzYXQifQ.VfaDRyNApyLYnCVL7PcpzA';

var mapStyle = 'mapbox://styles/aakims/cjfgej20o1t452smsp0rysgsi'

//create a map using the Mapbox Dark theme, zoomed in to Philly
var defaultMap = new mapboxgl.Map({
    container: 'map',
    style: mapStyle,
    zoom: 11,
    center: [-75.1652, 39.9526]
});

defaultMap.addControl(new mapboxgl.NavigationControl());

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

/* setting map object extent 
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

*/

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
        .y(function(d) { return y(d.properties[yData]); })
        .curve(d3.curveBasisOpen);

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
    var customZoom = (_.size(thisData) < 100) ? 14.5 : 13.5;
    var markerSize = (customZoom === 14.5) ? 6 : 4;

    defineMapCenter();
    console.log(dataCenterCoor);

    var map = new mapboxgl.Map({
        container: 'map',
        style: mapStyle,
        zoom: customZoom,
        center: dataCenterCoor //[-75.1652, 39.9526]
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function() {
        map.addSource("sensing-samples", {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": thisData
            }
        });

        map.addLayer({
            "id": "sensing-collection-path",
            "type": "circle",
            "source": "sensing-samples",
            "paint": {
                "circle-radius": markerSize,
                "circle-color": "#db8a83",
                "circle-opacity": 1
            }
        });

        map.addLayer({
            "id": "path-hover",
            "type": "circle",
            "source": "sensing-samples",
            "paint": {
                "circle-radius": markerSize + 3,
                "circle-color": "#54505E",
                "circle-opacity": 1
            },
            "filter": ["==", "unixt", ""]
        });

        map.on("mousemove", "sensing-collection-path", function(e) {

            map.getCanvas().style.cursor = 'pointer';

            //console.log(e.features[0]);
            map.setFilter("path-hover", ["==", "unixt", e.features[0].properties["unixt"]]);
            //map.setFilter("sensing-collection-path", ["==", "unixt", e.features[0].properties["unixt"]])
        });

        map.on("mouseleave", "sensing-collection-path", function(e) {
            map.setFilter("path-hover", ["==", "unixt", ""]);
        });


    });
}


var displayGraphs = function(tripIndex) {

    clearData();
    defineData(tripIndex);
    graphSeries = document.getElementsByClassName("graphs");
    graphItems = _.map(graphSeries, function(graphItem) { return graphItem.id });

    //displayMap();
    displayMapbox();
    enableToolTips();

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

var clearData = function() {
    _.each(graphItems, function(thisItem) {
        $("#" + thisItem).empty();
    });
};

var clearCanvas = function() {

    var defaultMap = new mapboxgl.Map({
        container: 'map',
        style: mapStyle,
        zoom: 11,
        center: [-75.1652, 39.9526]
    });
    // ("#" + thisItem).append("svg")
    clearData();
    //$("#map").append(defaultMap);

    //var items = d3.select('svg').selectAll('.item').data(newData);

    // Remove old elements:
    //items.exit().remove();
};

var enableToolTips = function() {

var tooltipWidth = d3.select(".graphs-tool-tip").node().getBoundingClientRect().width,
tooltipHeight = d3.select(".graphs-tool-tip").node().getBoundingClientRect().height; 


var stalkerBar = d3.selectAll(".graphs") //mouseG
.append("svg") 
.append("g")
.attr("class", "mouse-over-effects");

stalkerBar.append("path")
.attr("class", "stalker-line")
.style("stroke", "#54505E")
.style("stroke-width", "1px")
.style("opacity", "0");

var stalkerLine = document.getElementsByClassName("line"); //lines

var stalkerPerLine = stalkerBar.selectAll(".stalker-per-line") // mousePerLine, .mouse-per-line
.data(thisData)
.enter()
.append("g")
.attr("class", "stalker-per-line");

stalkerPerLine.append("circle")
.attr("r", 3)
.style("stroke", "#54505E") // filter by color later (good air quality: green ,etc)
.style("fill", "none")
.style("stroke-width", "1px")
.style("opacity", "0");

stalkerBar.append("svg:rect")
.attr("width", tooltipWidth)
.attr("height", tooltipHeight)
.attr("fill", "none")
.attr("pointer-events", "all")
.on("mouseout", function() {
    d3.select(".stalker-line").style("opacity","0");
    d3.select(".stalker-per-line circle").style("opacity", "0");
})
.on("mouseover", function() {
    d3.select(".stalker-line").style("opacity","1");
    d3.select(".stalker-per-line circle").style("opacity", "1");
})
.on("mousemove", function() {
    var mouse = d3.mouse(this);
    d3.select(".stalker-line")
    .attr("d", function() {
        var d = "M" + mouse[0] + "," + graphHeight;
        d += " " + mouse[0] + "," + 0;
        return d; 
    });

/*
    d3.selectAll(".stalker-per-line")
    .attr("transform", function(d, i) {
        console.log(graphWidth/mouse[0])
        var xDate = x.invert   
})
*/
});
};

