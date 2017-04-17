var lineChart = function(){
 this.renderLineChart = function (x, y, rx, text) {
        circle.draw(x, y, rx);
        marker.textChart(x, y, text);
        line.lineChart(x, y);
    }
}
var drawLineChart = new lineChart();