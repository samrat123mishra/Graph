$(document).ready(function() {
	var parser = new parserManager();
	var x = parser.getData("scripts/graph.json");
	x.then(function(resp) {  //try
		parser.chartData = resp;
		var chartManager = new parseData(parser.chartData.data);
	})
	.catch(function(err){  //catch
		console.log(err);
	})

});