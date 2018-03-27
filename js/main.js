var tripIndex; // define trip number 1~11
var indexFields = ["trip", "olive"],
    timeField = ["ftime"],
    dataFields = ["unixt", "trip", "olive", "ftime", "dust", "light", "tempF", "GINI_IND"],
    locationFields = ["FIPS", ];

var selectFields = _.unique(indexFields, timeField, dataFields);

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


var setupCanvas = function(graphIndexEl) {

    var chart = d3.select(graphIndexEl).append("svg")
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
        .text(graphTitles[graphIndex]);
};


var prepData = function(graphIndexEl) {

    var thisIndex = _.indexOf(graphSeries, graphIndexEl);
    var yData = selectData[thisIndex];

    var yMin = d3.min(_.map(thisData, function(sensObj) { return sensObj.properties[yData]; })),
        yMax = d3.max(_.map(thisData, function(sensObj) { return sensObj.properties[yData]; }));

    //console.log(yMin, yMax);

    thisData = _.map(thisData, function(sensObj) {
            sensObj.properties["ftime"] =
                (((sensObj.properties["unixt"]) > 0) ?
                    new Date(sensObj.properties["unixt"] * 1000 + 18000000) : console.log("no time stamp"));
            sensObj.properties[yData] = + sensObj.properties[yData]
            return sensObj;
        });

    x.domain(d3.extent(thisData, function(sensObj) { return sensObj.properties["fttime"]; }));
    y.domain([0.8 * yMin, 1.2 * yMax]);

    var graphLine = d3.line()
        .x(function(d) { return x(d["ftime"]); })
        .y(function(d) { return y(d[yData]); });

    var linedata = _.map(thisData, function(sensObj) {
        //console.log(obj); 
        return _.pick(sensObj.properties, "ftime", yData)
    });
};


var displayGraphs = function() {

        // graph the all graph divs defined by classname "graphs"
        var graphSeries = document.getElementsByClassName("graphs");

        // data prep: time variable + y variables


        _.each(graphSeries, function(graphIndexEls) {

                        _.chain(graphIndexEls)
                        .prepData()
                        .setupCanvas(graphIndexEl)
                        .createVisualization()
                        .renderGraph();
                });

                // for each graph div looped through by the graphIndex,


                //_.indexOf([array], value)

                var mapGraphData; _.each(selectData, createVisualization);




                //works



                var renderGraph() {
                    chart.append("path")
                        .attr("class", "line")
                        .attr("d", valueline(linedata));


                    chart.append("g")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x));

                    chart.append("g")
                        .call(d3.axisLeft(y));
                }


            };









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



            function createVisualization1(data) {


                x.domain(d3.extent(data, function(d) { return d.properties["ftime"]; }));
                y.domain([0, d3.max(data, function(d) { return d.properties["dust"]; })]);

                var valueline = d3.line()
                    .x(function(d) { return x(d["ftime"]) })
                    .y(function(d) { return y(d["dust"]) });

                console.log(data);
                var linedata = _.map(data, function(obj) { console.log(obj); return _.pick(obj.properties, "ftime", "dust") });
                //console.log(linedata1);

                chart1.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(linedata));


                chart1.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

                chart1.append("g")
                    .call(d3.axisLeft(y));

                chart1.append("text")
                    .attr("x", width - 70)
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("fill", "teal")
                    .style("text-decoration", "underline")
                    .text("Air Quality (pcs/0.01cf)");

            }

            //// GRAPH2 

            var renderGraph2 = function(dataset, tripN) {

                var data = _.filter(sdata.features, function(dataset) { return (dataset.properties["trip"] === tripN) && (dataset.properties["olive"] != 1) });
                console.log(data);

                data.forEach(function(d) {
                    d.properties["ftime"] = +d.properties["ftime"];
                    d.properties["light"] = +d.properties["light"];
                    //console.log(d.properties["dust"]);
                });


                createVisualization2(data);
            };

            //console.log(sdata.features[0]);
            renderGraph2(sdata, tripN);


            function createVisualization2(data) {
                //Width and height
                var canvasw = 600;
                var canvash = 130;

                var margin = { top: 20, right: 20, bottom: 30, left: 100 },
                    width = canvasw,
                    height = canvash;


                var chart2 = d3.select("#chart2").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");


                var x = d3.scaleTime().range([0, width]);
                var y = d3.scaleLinear().range([height, 0]);

                data.forEach(function(d) { d.properties["ftime"] = new Date(d.properties["unixt"] * 1000 + 18000000); });

                x.domain(d3.extent(data, function(d) { return d.properties["ftime"]; }));
                y.domain([d3.min(data, function(d) { return d.properties["light"]; }) - 50, d3.max(data, function(d) { return d.properties["light"]; })]);

                var valueline = d3.line()
                    .x(function(d) { return x(d["ftime"]) })
                    .y(function(d) { return y(d["light"]) });

                console.log(data);
                var linedata = _.map(data, function(obj) { console.log(obj); return _.pick(obj.properties, "ftime", "light") });
                console.log(linedata);

                chart2.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(linedata));


                chart2.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

                chart2.append("g")
                    .call(d3.axisLeft(y));

                chart2.append("text")
                    .attr("x", width - 70)
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("fill", "teal")
                    .style("text-decoration", "underline")
                    .text("Ambient Light");

            }


            ///GRAPH 3

            var renderGraph3 = function(dataset, tripN) {

                var data = _.filter(sdata.features, function(dataset) { return (dataset.properties["trip"] === tripN) && (dataset.properties["olive"] != 1) });
                console.log(data);

                data.forEach(function(d) {
                    d.properties["ftime"] = +d.properties["ftime"];
                    d.properties["tempF"] = +d.properties["tempF"];
                    //console.log(d.properties["dust"]);
                });


                createVisualization3(data);
            };

            //console.log(sdata.features[0]);
            renderGraph3(sdata, tripN);


            function createVisualization3(data) {
                //Width and height
                var canvasw = 600;
                var canvash = 130;

                var margin = { top: 20, right: 20, bottom: 30, left: 100 },
                    width = canvasw,
                    height = canvash;

                var chart3 = d3.select("#chart3").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");

                var x = d3.scaleTime().range([0, width]);
                var y = d3.scaleLinear().range([height, 0]);

                data.forEach(function(d) { d.properties["ftime"] = new Date(d.properties["unixt"] * 1000 + 18000000); });

                x.domain(d3.extent(data, function(d) { return d.properties["ftime"]; }));
                y.domain([d3.min(data, function(d) { return d.properties["tempF"]; }), d3.max(data, function(d) { return d.properties["tempF"]; })]);

                var valueline = d3.line()
                    .x(function(d) { return x(d["ftime"]) })
                    .y(function(d) { return y(d["tempF"]) });

                console.log(data);
                var linedata = _.map(data, function(obj) { console.log(obj); return _.pick(obj.properties, "ftime", "tempF") });
                //console.log(linedata3);

                chart3.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(linedata));


                chart3.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

                chart3.append("g")
                    .call(d3.axisLeft(y));

                chart3.append("text")
                    .attr("x", width - 70)
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("fill", "teal")
                    .style("text-decoration", "underline")
                    .text("Temperature (F)");

            }


            var renderGraph4 = function(dataset, tripN) {

                var data = _.filter(sdata.features, function(dataset) { return (dataset.properties["trip"] === tripN) && (dataset.properties["olive"] != 1) });
                console.log(data);

                data.forEach(function(d) {
                    d.properties["ftime"] = +d.properties["ftime"];
                    d.properties["GINI_IND"] = +d.properties["GINI_IND"];
                    //console.log(d.properties["dust"]);
                });


                createVisualization4(data);
            };

            //console.log(sdata.features[0]);
            renderGraph4(sdata, tripN);


            function createVisualization4(data) {
                //Width and height
                var canvasw = 600;
                var canvash = 130;

                var margin = { top: 20, right: 20, bottom: 30, left: 100 },
                    width = canvasw,
                    height = canvash;


                var chart4 = d3.select("#chart4").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");


                var x = d3.scaleTime().range([0, width]);
                var y = d3.scaleLinear().range([height, 0]);

                data.forEach(function(d) { d.properties["ftime"] = new Date(d.properties["unixt"] * 1000 + 18000000); });

                x.domain(d3.extent(data, function(d) { return d.properties["ftime"]; }));
                y.domain([d3.min(data, function(d) { return d.properties["GINI_IND"]; }) - 0.1, d3.max(data, function(d) { return d.properties["GINI_IND"]; }) + 0.1]);

                var valueline = d3.line()
                    .x(function(d) { return x(d["ftime"]) })
                    .y(function(d) { return y(d["GINI_IND"]) });

                console.log(data);
                var linedata = _.map(data, function(obj) { console.log(obj); return _.pick(obj.properties, "ftime", "GINI_IND") });
                console.log(linedata);

                chart4.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(linedata));


                chart4.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

                chart4.append("g")
                    .call(d3.axisLeft(y));

                chart4.append("text")
                    .attr("x", width - 70)
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("fill", "teal")
                    .style("text-decoration", "underline")
                    .text("GINI Index");

            }


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

        addButtonC.onclick = function() {
            bubbles.exit().remove();
            chart1.exit().remove();
            chart2.exit().remove();
            chart3.exit().remove();
            chart4.exit().remove();
        }

        addButton1.onclick = function() {
            displayData(1);
        };
        addButton2.onclick = function() {
            displayData(2);
        };
        addButton3.onclick = function() {
            displayData(3);
        };
        addButton4.onclick = function() {
            displayData(4);
        };
        addButton5.onclick = function() {
            displayData(5);
        };
        addButton6.onclick = function() {
            displayData(6);
        };
        addButton7.onclick = function() {
            displayData(7);
        };
        addButton8.onclick = function() {
            displayData(8);
        };
        addButton9.onclick = function() {
            displayData(9);
        };
        addButton10.onclick = function() {
            displayData(10);
        };
        addButton11.onclick = function() {
            displayData(11);
        };
        addButton12.onclick = function() {
            displayData(12);
        };

        // displayData(tripN);