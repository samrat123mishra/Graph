var chart = function () {
      this.renderColChart = function (x, y, wd, ht, text) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'width', wd);
        rect.setAttributeNS(null, 'height', ht);
        rect.setAttributeNS(null, 'fill', "red");
        svg.appendChild(rect);
        var markerXPosition = x;
        var markerYPosition = y - 5;
        textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('dx', markerXPosition);
        textelement.setAttribute('dy', markerYPosition);
        txtnode = document.createTextNode(text);
        textelement.appendChild(txtnode);
        svg.appendChild(textelement);
    }
    this.barChart = function () {

    }
    this.columnChart = function () {

    }
    this.pieChart = function () {

    }
}

var myChart = function () {
    chart.call(this);
    this.columnChart = function (type, min, max, incr, valArr) {
        for (var i = 0; i < totalChartBars; i++) {
            bcVal = valArr[i];
            bcHt = (bcVal - min) * svgcHeight / (max - min);
            bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin;
            bcY = (svgcMarginHeight - bcHt - 2);
            switch (type) {
                case "column":
                    this.renderColChart(bcX, bcY, bcWidth, bcHt, bcVal);
                    break;
            }
        }

    }
  
}
myChart.prototype = chart.prototype;
var chartOpt = new myChart();



