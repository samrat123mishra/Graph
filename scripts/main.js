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
	barChartSettings(valueArr);
	document.getElementById('rdbarchart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('bar');
		var axis = new valCalc(valueArr, labelArr);
		drawAxisMarkers('bar', axis.start, axis.end, axis.incr, labelArr);
		chartOpt.drawChart('bar', axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdcolumnchart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('column');
		var axis = new valCalc(valueArr, labelArr);
		drawAxisMarkers('column', axis.start, axis.end, axis.incr, labelArr);
		chartOpt.drawChart('column', axis.start, axis.end, axis.incr, valueArr);

	}, false);
	document.getElementById('rdpointchart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('point');
		var axis = new valCalc(valueArr, labelArr);
		drawAxisMarkers('point', axis.start, axis.end, axis.incr, labelArr);
		chartOpt.drawChart('point', axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdlinechart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('line');
		ptArr=[];
		var axis = new valCalc(valueArr, labelArr);
		drawAxisMarkers('line', axis.start, axis.end, axis.incr, labelArr);
		chartOpt.drawChart('line', axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdareachart').addEventListener('click', function () {
		clearGraph();
		drawAxisLableAndMarkers('area');
		ptArr=[];
		ptArr1 = [];
		var axis = new valCalc(valueArr, labelArr);
		drawAxisMarkers('area', axis.start, axis.end, axis.incr, labelArr);
		chartOpt.drawChart('area', axis.start, axis.end, axis.incr, valueArr);
	}, false);
	document.getElementById('rdpiechart').addEventListener('click', function () {
		clearGraph();
		angles=[];
		var axis = new valCalc(valueArr, labelArr);
		pieChart('pie', axis.start, axis.end, valueArr);
	}, false);
}