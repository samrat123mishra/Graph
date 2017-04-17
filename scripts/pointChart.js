var poiChart = function(){
this.renderPointChart = function (x, y, rx, text) {
        circle.draw(x, y, rx);
        marker.textChart(x, y, text);
    }
}
var drawPointChart = new poiChart();