var ptArr = [], ptArr1 = [], angles = [];
var Chart = function (type,min, max, incr, valArr) {
    var radius = 4;
            switch (type) {
                case "bar":
                var drawBarChart = new barChart();
                    drawBarChart.createChart(min, max, incr, valArr);
                    break;
                case "column":
                var drawColChart = new colChart();
                    drawColChart.createChart(min, max, incr, valArr); 
                    break;
                case "point":
                var drawPoiChart = new pointChart();
                    drawPoiChart.createChart(min, max, radius, valArr); 
                    break;
                case "line":
                var drawLineChart = new lineChart(); 
                    drawLineChart.createChart(min, max, radius, valArr);
                    break;
                case "area":
                var drawAreaChart = new areaChart();
                    drawAreaChart.createChart(min, max, radius, valArr);
                    break;
            }
            this.renderChart = function () { 

            }
        }
