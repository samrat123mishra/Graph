var ptArr = [], ptArr1 = [], angles = [];
var createChart = function () {
    this.drawChart = function (type, min, max, incr, valArr) {
        for (var i = 0; i < totalChartBars; i++) {
            bcVal = valArr[i];
            bcHt = (bcVal - min) * svgcHeight / (max - min);
            barWidth = (bcVal - min) * svgcWidth / (max - min);
            barX = svgcMarginSpace;
            barY = svgcMarginHeight - svgcMargin - barHt - (i * (barHt + bcMargin));
            bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin;
            bcY = (svgcMarginHeight - bcHt - 2);
            switch (type) {
                case "bar":
                    drawBarChart.renderBarChart(barX, barY, barWidth, barHt, bcVal);
                    break;
                case "column":
                    drawColChart.renderColChart(bcX, bcY, bcWidth, bcHt, bcVal);
                    break;
                case "point":
                    drawPointChart.renderPointChart(bcX, bcY, 4, bcVal);
                    break;
                case "line":
                    drawLineChart.renderLineChart(bcX, bcY, 4, bcVal);
                    break;
                case "area":
                    drawAreaChart.renderAreaChart(bcX, bcY, 4, bcVal);
                    break;
            }
        }

    }

}
var myChart = function () {
    createChart.call(this);
}
myChart.prototype = createChart.prototype;
var chartOpt = new myChart();