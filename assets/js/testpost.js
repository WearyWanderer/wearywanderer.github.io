function simpleBar() {
	var data = [{year: 2006, books: 54},
            {year: 2007, books: 43},
            {year: 2008, books: 41},
            {year: 2009, books: 44},
            {year: 2010, books: 35}];

	var barWidth = 40;
	var width = (barWidth + 10) * data.length;
	var height = 200;

	var x = d3.scaleLinear().domain([0, data.length]).range([0, width]);
	var y = d3.scaleLinear().domain([0, d3.max(data, function(datum) { return datum.books; })]).
	  rangeRound([0, height]);

	// add the canvas to the DOM
	var barDemo = d3.select("#example").
	  append("svg:svg").
	  attr("width", width).
	  attr("height", height).
	  attr("style", "display:block; margin:auto;");

	barDemo.selectAll("rect").
	  data(data).
	  enter().
	  append("svg:rect").
	  attr("x", function(datum, index) { return x(index); }).
	  attr("y", function(datum) { return height - y(datum.books); }).
	  attr("height", function(datum) { return y(datum.books); }).
	  attr("width", barWidth).
	  attr("fill", "#2d578b");
};

function interactiveBar() {
	var sales = [
		{ product: 'Hoodie',  count: 7 },
		{ product: 'Jacket',  count: 6 },
		{ product: 'Snuggie', count: 9 },
	];
    
	var barDemo = d3.select("#interactiveExample").
		append("svg:svg").
		attr("style", "display:block; margin:auto;");
	  
	var rects = barDemo.selectAll("rect")
		.data(sales);
};

function pageSVGSetup() {
	simpleBar();
	interactiveBar();
};

window.onload = pageSVGSetup;