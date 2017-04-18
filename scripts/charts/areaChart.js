function areaChart() {
    Chart.call(this);
    function calculateAreaChart(min, max, rx, valArr) {
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
    function drawAreaChart(arr1,rx) {
        for (var i = 0; i < arr1.length; i++) {
            circle.draw(arr1[i].bcX, arr1[i].bcY, rx);
             line.areaChart(arr1[i].bcX, arr1[i].bcY);
            marker.textChart(arr1[i].bcX, arr1[i].bcY, arr1[i].val); 
        }
    }
    this.createChart = function (min, max, rx, valArr) {
        var obj = calculateAreaChart(min, max, rx, valArr);
        drawAreaChart(obj,rx);
    }

}
areaChart.prototype = Chart.prototype;