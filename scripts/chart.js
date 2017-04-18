var ptArr = [], ptArr1 = [], angles = [];
var Chart = function (type,min, max, incr, valArr) {
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
                    drawPoiChart.createChart(min, max, 4, valArr); 
                    break;
                case "line":
                var drawLineChart = new lineChart(); 
                    drawLineChart.createChart(min, max, 4, valArr);
                    break;
                case "area":
                var drawAreaChart = new areaChart();
                    drawAreaChart.createChart(min, max, 4, valArr);
                    break;
            }
            this.renderChart = function () { 

            }
        }
