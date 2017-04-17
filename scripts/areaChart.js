var areaChart = function(){
 this.renderAreaChart = function (x, y, rx, text) {
        circle.draw(x, y, rx);
        marker.textChart(x, y, text);
        line.areaChart(x, y);
    }
}
var drawAreaChart = new areaChart();