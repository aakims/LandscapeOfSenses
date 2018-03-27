var tripIndex; // define trip number 1~11
var indexFields = ["trip", "olive"],
    timeField = ["ftime"],
    displayFields = ["dust", "light", "tempF", "GINI_IND"]
    dataFields = ["unixt", "trip", "olive", "ftime", "dust", "light", "tempF", "GINI_IND"],
    locationFields = ["FIPS", ];

var selectFields = _.unique(indexFields, timeField, displayFields, dataFields);

var graphTitles = ["Air Quality", "Light Level", "Temperature", "Gini Index"];

// DEFINE TRIP DATA 

var thisData = _.chain(sdata.features)
    .filter(function(feature) {
        return (feature.properties["trip"] === tripIndex) && (feature.properties["olive"] > 5)
    })
    .map(function(feature) {
        feature.properties = _.pick(feature.properties, selectFields);
        return feature;
    })
    .value();


//_.map(sdata.features, function (feature) {return _.pick(feature.properties, _.map(selectData, function (key) {return key}))})


//canvas size variables 
var graphWidth = 600;
var graphHeight = 130;
var graphMargin = { top: 40, right: 20, bottom: 30, left: 100 };

// x and y axis setup
var x = d3.scaleTime().range([0, graphWidth]);
var y = d3.scaleLinear().range([graphHeight, 0]);

// setting map object extent 
var mapWidth = 800,
    mapHeight = 650,
    mapMargin = { top: 20, right: 10, bottom: 30, left: 20 }

// map projection parameters
// these were achieved by just adjusting decimal units multiple times
// and refreshing the html page. should figure out automatic centering. 
var center = [2.5725, 39.957049],
    offset = [mapWidth / 2, mapHeight / 2],
    scale = 700000,
    PennSouthProjection = d3.geoConicConformal().scale(scale)
    .parallels([39 + 56 / 60, 40 + 58 / 60])
    .rotate([77 + 45 / 60, 0])
    .center(center)
    .translate(offset);

// Data will change depending on the queryData() result, but the canvas sizes and svgs won't change.. 
// let's define them first separately. 


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

var renderGraph = function() {
                    chart.append("path")
                        .attr("class", "line")
                        .attr("d", graphLine(linedata));


                    chart.append("g")
                        .attr("transform", "translate(0," + graphHeight + ")")
                        .call(d3.axisBottom(x));

                    chart.append("g")
                        .call(d3.axisLeft(y));
}


var prepData = function(thisIndex) {

    //var thisIndex = _.indexOf(graphItems, graphItem);
    var yData = displayFields[thisIndex];
    console.log(yData); 
    console.log(thisData[10]);

    var yMin = d3.min(thisData, function(sensObj) { return sensObj.properties[yData]; }),
        yMax = d3.max(thisData, function(sensObj) { console.log(sensObj.properties); return sensObj.properties[yData]; });

    console.log(yMin, yMax);

    thisData = _.map(thisData, function(sensObj) {
            sensObj.properties["ftime"] =
                (((sensObj.properties["unixt"]) > 0) ?
                    new Date(sensObj.properties["unixt"] * 1000 + 18000000) : console.log("no time stamp"));
            sensObj.properties[yData] = + sensObj.properties[yData]
            return sensObj;
        });

    x.domain(d3.extent(thisData, function(sensObj) { return sensObj.properties["fttime"]; }));
    y.domain([0.8 * yMin, 1.2 * yMax]);

    graphLine = d3.line()
        .x(function(d) { return x(d["ftime"]); })
        .y(function(d) { return y(d[yData]); });

    lineData = _.map(thisData, function(sensObj) {
        console.log(sensObj); 
        return _.pick(sensObj.properties, "ftime", yData)
    });
};

var graphSeries, graphItems, thisIndex; 
var displayGraphs = function(tripNumber) {

        tripIndex = tripNumber; 
        console.log(tripIndex); 
        // graph the all graph divs defined by classname "graphs"
        graphSeries = document.getElementsByClassName("graphs");
        graphItems = _.map(graphSeries, function (graphItem) {return graphItem.id});
        console.log(graphItems); 
        _.map(graphItems, function (graphItem) {
            thisIndex = _.indexOf(graphItems, graphItem); 
            console.log(thisIndex);
            console.log(graphItem);
            this[graphItem] = this[graphItem];
            var chart, graphLine, lineData; 
            setupCanvas(graphItem); 
            prepData(thisIndex);
            renderGraph(thisIndex); 
        })


}








        function mapTripPath(tripNum) {

            // now off to classic D3: select non-existent elements, bind the data, append the elements, and apply attributes
            g.selectAll("path")
                .data(philly_neighborhoods.features)
                .enter() //what does this do
                .append("path")
                .attr("fill", "#ccc")
                .attr("stroke", "#333")
                .attr("d", geoPath);

        }



        var mapCanvas = function() {



            // create map svg 
            mapsvg = d3.select("#map")
                .append("svg")
                .attr("width", mapWidth + mapMargin.left + mapMaring.right)
                .attr("height", mapHeight + mapMargin.top + mapMargin.bottom)
                .attr("transform", "translate(" + mapMargin.left + "," + mapMargin.top + ")");

            //?? Append empty placeholder g element to the SVG
            // g will contain geometry elements
            var g = mapsvg.append("g");

            // Create GeoPath function that uses built-in D3 functionality to turn 
            // lat/long coordinates into screen coordinates 
            var geoPath = d3.geoPath()
                .projection(PennSouthProjection);

        };

        function displayData(tripnumber) {

            var tripN = tripnumber;
            // Our D3 code will go here.
            // Width and Height of the whole visualization
            var mapwidth = 800;
            var mapheight = 650;
            var mapmargin = { top: 20, right: 10, bottom: 30, left: 20 }
            // Create SVG
            var mapsvg = d3.select("#map")
                .append("svg")
                .attr("width", mapwidth + mapmargin.left + mapmargin.right)
                .attr("height", mapheight + mapmargin.top + mapmargin.bottom)
                .attr("transform",
                    "translate(" + mapmargin.left + "," + mapmargin.top + ")");


            // Create GeoPath function that uses built-in D3 functionality to turn
            // lat/lon coordinates into screen coordinates
            var geoPath = d3.geoPath()
                .projection(PennSouthProjection);

            // Classic D3... Select non-existent elements, bind the data, append the elements, and apply attributes
            g.selectAll("path")
                .data(philly_neighborhoods.features)
                .enter()
                .append("path")
                .attr("fill", "#ccc")
                .attr("stroke", "#333")
                .attr("d", geoPath);

            var mapdata = _.filter(sdata.features, function(dataset) { return (dataset.properties["trip"] === tripN) && (dataset.properties["olive"] != tripN) });






            var bubbles = mapsvg.append("g");

            bubbles.selectAll("path")
                .data(mapdata)
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
        }
        var tripN;

        var clearCanvas = function () {
            // Set new data on your chart:
            var items = d3.select('svg').selectAll('.graphs').data(newData);

            // Remove old elements:
            items.exit().remove();
                    }

