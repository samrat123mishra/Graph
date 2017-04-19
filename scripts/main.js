$(document).ready(function () {
	var parser = new parserManager();
	var x = parser.getData("scripts/graph.json");
	x.then(function (resp) {  //try
		parser.chartData = resp;
		var chartManager = new parseData(parser.chartData.data);
		var binds = new BindEvent(chartManager.val, chartManager.label)
	})
		.catch(function (err) {  //catch
		})
});
var BindEvent = function (valueArr, labelArr) {
	document.getElementById('rdbarchart').addEventListener('click', function () {
		clearGraph();
		var axis = new AxisCalc(valueArr);
		var createAxis = new drawAxis('bar');
		drawAxisMarkers('bar', axis.start, axis.end, axis.incr, labelArr);
		var chartOpt = new Chart('bar',axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdcolumnchart').addEventListener('click', function () {
		clearGraph();
		var axis = new AxisCalc(valueArr);
		var createAxis = new drawAxis('column');
		drawAxisMarkers('column', axis.start, axis.end, axis.incr, labelArr);
		var chartOpt = new Chart('column',axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdpointchart').addEventListener('click', function () {
		clearGraph();
		var axis = new AxisCalc(valueArr);
		var createAxis = new drawAxis('point');
		drawAxisMarkers('point', axis.start, axis.end, axis.incr, labelArr);
		var chartOpt = new Chart('point',axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdlinechart').addEventListener('click', function () {
		clearGraph();
		ptArr = [];
		var axis = new AxisCalc(valueArr);
		var createAxis = new drawAxis('line');	
		drawAxisMarkers('line', axis.start, axis.end, axis.incr, labelArr);
		var chartOpt = new Chart('line',axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdareachart').addEventListener('click', function () {
		clearGraph();
		var axis = new AxisCalc(valueArr);
		var createAxis = new drawAxis('area');
		ptArr = [];
		ptArr1 = [];
		drawAxisMarkers('area', axis.start, axis.end, axis.incr, labelArr);
		var chartOpt = new Chart('area',axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdpiechart').addEventListener('click', function () {
		clearGraph();
		angles = [];
		var axis = new AxisCalc(valueArr);
		pieChart('pie', axis.start, axis.end, valueArr);
	}, false);
}