function pointChart() {
    Chart.call(this);
    function calculatePoiChart(min, max, rx, valArr) {
        var arr = [];
        for (var i = 0; i < totalChartBars; i++) {
            var obj = {};
            bcVal = valArr[i];
            bcHt = (bcVal - min) * svgcHeight / (max - min);
            barWidth = (bcVal - min) * svgcWidth / (max - min);
            bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin;
            bcY = (svgcMarginHeight - bcHt - 2);
            obj.bcX = bcX;
            obj.bcY = bcY;
            obj.bcWidth = bcWidth;
            obj.bcHt = bcHt;
            obj.val = bcVal;
            arr.push(obj);
        }
        return arr;
    }
    function drawPoiChart(arr1,rx) {

        for (var i = 0; i < arr1.length; i++) {
            circle.draw(arr1[i].bcX, arr1[i].bcY, rx);
            marker.textChart(arr1[i].bcX, arr1[i].bcY, arr1[i].val);
        }
    }
    this.createChart = function (min, max, rx, valArr) {
        var obj = calculatePoiChart(min, max, rx, valArr);
        drawPoiChart(obj,rx);
    }

}
pointChart.prototype = Chart.prototype;