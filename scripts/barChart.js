var barChart = function(){
   this.renderBarChart = function (x, y, wd, ht, text) {
        rectangle.fillBarRect(x, y, wd, ht);
        marker.textBarChart(x, y, text);
        svg.width.baseVal.value = 700;
    }
}
var drawBarChart = new barChart();