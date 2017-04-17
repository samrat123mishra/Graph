var colChart = function(){
  this.renderColChart = function (x, y, wd, ht, text) {
        rectangle.fillRect(x, y, wd, ht);
        marker.textChart(x, y, text);
    }
}
var drawColChart = new colChart();