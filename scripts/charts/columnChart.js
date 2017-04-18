function colChart() {
    Chart.call(this);
    function calculateColChart(min, max, incr, valArr) {
        var arr = [];
        for (var i = 0; i < totalChartBars; i++) {
            var obj = {};
            bcVal = valArr[i];
            bcHt = (bcVal - min) * svgcHeight / (max - min);
            barWidth = (bcVal - min) * svgcWidth / (max - min);
            // barX = svgcMarginSpace;
            // barY = svgcMarginHeight - svgcMargin - barHt - (i * (barHt + bcMargin));
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
    function drawColChart(arr1) {

        for (var i = 0; i < arr1.length; i++) {
            rectangle.fillBarRect(arr1[i].bcX, arr1[i].bcY, arr1[i].bcWidth, arr1[i].bcHt);
            marker.textChart(arr1[i].bcX, arr1[i].bcY, arr1[i].val);
        }
    }
    this.createChart = function (min, max, incr, valArr) {
        var obj = calculateColChart(min, max, incr, valArr);
        drawColChart(obj);
    }

}
colChart.prototype = Chart.prototype;