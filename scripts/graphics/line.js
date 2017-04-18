
var createLine = function () {
    this.drawXYAxis = function (x1, y1, x2, y2) {
        var dataAxis = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        dataAxis.setAttribute("x1", x1);
        dataAxis.setAttribute("y1", y1);
        dataAxis.setAttribute("x2", x2);
        dataAxis.setAttribute("y2", y2);
        dataAxis.style.stroke = "black";
        dataAxis.style.strokeWidth = "3px";
        svg.appendChild(dataAxis);
    }
    this.lineChart = function (x, y) {
        var obj = {};
        obj.Xcor = x + (bcWidth / 2), obj.Ycor = y;
        ptArr.push(obj);
        if (ptArr.length > 1) {
            var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            line.setAttribute("x1", ptArr[ptArr.length - 2].Xcor)
            line.setAttribute("y1", ptArr[ptArr.length - 2].Ycor);
            line.setAttribute("x2", ptArr[ptArr.length - 1].Xcor);
            line.setAttribute("y2", ptArr[ptArr.length - 1].Ycor);
            line.style.stroke = "black";
            line.style.strokeWidth = "2px";
            svg.appendChild(line);
        }
    }
    this.areaChart = function (x, y) {
        var obj = {};
        obj.Xcor = x + (bcWidth / 2), obj.Ycor = y;
        ptArr.push(obj);
        ptArr1.push(obj.Xcor, obj.Ycor)
        var ptStr = ptArr1.toString();
        if (ptArr.length > 1) {
            var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            line.setAttribute("x1", ptArr[ptArr.length - 2].Xcor)
            line.setAttribute("y1", ptArr[ptArr.length - 2].Ycor);
            line.setAttribute("x2", ptArr[ptArr.length - 1].Xcor);
            line.setAttribute("y2", ptArr[ptArr.length - 1].Ycor);
            line.style.stroke = "black";
            line.style.strokeWidth = "2px";
            svg.appendChild(line);
        }
        var area = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        area.setAttribute("points", ptArr[0].Xcor + ',' + svgcMarginHeight + ',' + ptStr + ',' + ptArr[ptArr.length - 1].Xcor + ',' + svgcMarginHeight);
        area.style.fill = "rgba(253, 27, 27,0.1)";
        svg.appendChild(area);
    }
}
var line = new createLine();