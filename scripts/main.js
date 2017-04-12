$(document).ready(function () {
	Resize()
	var parser = new parserManager();
	var x = parser.getData("scripts/graph.json");
	x.then(function (resp) {  //try
		parser.chartData = resp;
		var chartManager = new parseData(parser.chartData.data);
		var binds = new BindEvent(chartManager.val, chartManager.label)
	})
		.catch(function (err) {  //catch
			console.log(err);
		})
});
function Resize() {
	window.addEventListener('resize', function () {
		document.getElementById('dvcontainer').setAttribute("style", "height:" + (window.innerHeight - 62) + "px;width:" + (window.innerWidth - 219) + "px");
	})
}



var BindEvent = function (valueArr, labelArr) {
	barChartSettings(valueArr);
	document.getElementById('rdbarchart').addEventListener('click', function () {
		clearGraph();
		var axis = new valCalc(valueArr, labelArr);
		drawAxisLableAndMarkers('bar');
	}, false);
	document.getElementById('rdcolumnchart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('column');
		var axis = new valCalc(valueArr, labelArr);
		drawAxisMarkers('column', axis.start, axis.end, axis.incr, labelArr);
		chartOpt.columnChart('column', axis.start, axis.end, axis.incr, valueArr);

	}, false);
	document.getElementById('rdpointchart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('point');
		var axis = new valCalculation(valueArr, labelArr);
	}, false);
	document.getElementById('rdlinechart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('line');
		var axis = new valCalculation(valueArr, labelArr);
	}, false);
	document.getElementById('rdareachart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('area');
		var axis = new valCalculation(valueArr, labelArr);
	}, false);
	document.getElementById('rdpiechart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('pie');
		var axis = new valCalculation(valueArr, labelArr);
	}, false);
}