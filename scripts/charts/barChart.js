function barChart() {
    Chart.call(this);
    //    this.renderBarChart = function (x, y, wd, ht, text) {
    //         rectangle.fillBarRect(x, y, wd, ht);
    //         marker.textBarChart(x, y, text);
    //         svg.width.baseVal.value = 700;
    //     }
    function calculateBarChart(min, max, incr, valArr) {
        var arr = [];
        for (var i = 0; i < totalChartBars; i++) {
            var obj = {};
            bcVal = valArr[i];
            bcHt = (bcVal - min) * svgcHeight / (max - min);
            barWidth = (bcVal - min) * svgcWidth / (max - min);
            barX = svgcMarginSpace;
            barY = svgcMarginHeight - svgcMargin - barHt - (i * (barHt + bcMargin));
            // bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin;
            // bcY = (svgcMarginHeight - bcHt - 2);
            obj.barX = barX;
            obj.barY = barY;
            obj.barWidth = barWidth;
            obj.barHt = barHt;
            obj.val = bcVal;
            arr.push(obj);
        }
        return arr;
    }
    function drawBarChart(arr1) {

        for (var i = 0; i < arr1.length; i++) {
            rectangle.fillBarRect(arr1[i].barX, arr1[i].barY, arr1[i].barWidth, arr1[i].barHt);
            marker.textBarChart(arr1[i].barX, arr1[i].barY, arr1[i].val,arr1[i].barWidth);
            svg.width.baseVal.value = 700;
        }
    }
    this.createChart = function (min, max, incr, valArr) {
        var obj = calculateBarChart(min, max, incr, valArr);
        drawBarChart(obj);
    }

}
barChart.prototype = Chart.prototype;