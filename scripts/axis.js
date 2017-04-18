var svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag
//The Chart dimentional settings
var svgcWidth,
    svgcHeight,
    svgcMargin,
    svgcSpace;
var svgcMarginSpace,
    svgcMarginHeight;
//The bar Properties Declaration
var bcWidth,
    barHt,
    bcMargin,
    totalChartBars,
    bcWidthMargin;
//The Axis Property
var totalLabel = 10;
//The Chart dimensional settings
 function valCalc(arr) {
    var minVal,
        maxVal,
        roundOff,
        Start,
        markerVal, x;
        svgcMargin = 20;
    svgcSpace = 60;

    svgcHeight = svg.height.baseVal.value - 2 * svgcMargin - svgcSpace;
    svgcWidth = svg.width.baseVal.value - 2 * svgcMargin - svgcSpace;
    svgcMarginSpace = svgcMargin + svgcSpace;
    svgcMarginHeight = svgcMargin + svgcHeight;

    bcMargin = 15;
    totalChartBars = arr.length;
    bcWidth = (svgcWidth / totalChartBars) - bcMargin;
    barHt = (svgcHeight / totalChartBars) - bcMargin;
    minVal = Math.min.apply(Math, arr);
    maxVal = Math.max.apply(Math, arr);
    x = minVal < 0 ? 2 : 1;
    var no = minVal / Math.pow(10, (minVal.toString().length) - x);
    roundOff = Math.floor(no);
    Start = roundOff * Math.pow(10, (minVal.toString().length) - x);
    valDiff = maxVal - Start;
    markerVal = valDiff / totalLabel;
    this.end = maxVal;
    this.start = Start;
    this.incr = markerVal;
}
//Function to Draw X and Y Axis
function drawAxis(type) {
    switch (type) {
        case 'bar':
            //Y-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin - 5);
            //X-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + svgcWidth, svgcMarginHeight);
            break;
        case 'point':
            //Y-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
            //X-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + svgcWidth, svgcMarginHeight);
            break;
        case 'column':
            //Y-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
            //X-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + svgcWidth, svgcMarginHeight);
            break;
        case 'line':
            //Y-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
            //X-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + svgcWidth, svgcMarginHeight);
            break;
        case 'area':
            //Y-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
            //X-Axis
            line.drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + svgcWidth, svgcMarginHeight);
            break;
    }

}
function drawAxisMarkers(type, min, max, incr, labArr) {
    var numMarkers = parseInt(max / totalLabel);
    var markerVal = min;
    if (type == "bar") {
     marker.barAxisMarkers(type, min, max, incr, labArr);   
    } else {
         marker.otherAxisMarker(type, min, max, incr, labArr);
    }
}
function clearGraph() {
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
}