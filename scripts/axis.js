var svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag

//The Chart dimentional settings
var svgcWidth, svgcHeight, svgcMargin, svgcSpace;
var svgcMarginSpace, svgcMarginHeight;

//The bar Properties Declaration
var bcWidth, bcMargin, totalChartBars, bcWidthMargin;

//The Axis Property
var totalLabel = 10;

//The Chart dimensional settings
var valCalc = function (arr) {
    var minVal,
        maxVal,
        roundOff,
        Start,
        markerVal,x;
    minVal = Math.min.apply(Math, arr);
    maxVal = Math.max.apply(Math, arr);
    x=minVal<0?2:1;
    var no = minVal / Math.pow(10, (minVal.toString().length) - x);
    roundOff = Math.floor(no);
    Start = roundOff * Math.pow(10, (minVal.toString().length) - x);
    valDiff = maxVal - Start;
    markerVal = valDiff / totalLabel;
    this.end = maxVal;
    this.start = Start;
    this.incr = markerVal;
}

function BarAxisRender(x1, y1, x2, y2) {
    var dataAxis = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    dataAxis.setAttribute("x1", x1);
    dataAxis.setAttribute("y1", y1);
    dataAxis.setAttribute("x2", x2);
    dataAxis.setAttribute("y2", y2);
    dataAxis.style.stroke = "black";
    dataAxis.style.strokeWidth = "3px";
    svg.appendChild(dataAxis);

}

function barChartSettings(populationArray) {
    svgcMargin = 20;
    svgcSpace = 60;

    svgcHeight = svg.height.baseVal.value - 2 * svgcMargin - svgcSpace;
    svgcWidth = svg.width.baseVal.value - 2 * svgcMargin - svgcSpace;
    svgcMarginSpace = svgcMargin + svgcSpace;
    svgcMarginHeight = svgcMargin + svgcHeight;

    //The Bar Properties
    bcMargin = 15;
    totalChartBars = populationArray.length;
    bcWidth = (svgcWidth / totalChartBars) - bcMargin;
}
//Ends Here


//Function to Draw X and Y Axis
function drawXYAxis(x1, y1, x2, y2) {

    var dataAxis = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    dataAxis.setAttribute("x1", x1);
    dataAxis.setAttribute("y1", y1);
    dataAxis.setAttribute("x2", x2);
    dataAxis.setAttribute("y2", y2);
    dataAxis.style.stroke = "black";
    dataAxis.style.strokeWidth = "3px";
    svg.appendChild(dataAxis);

}

function drawAxisLableAndMarkers(type) {
    switch (type) {
        case 'column':
            //Y-Axis
            drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
            //X-Axis
            drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + svgcWidth, svgcMarginHeight);
            break;
    }

}

function drawAxisMarkers(type, min, max, incr, labArr) {
    var numMarkers = parseInt(max / totalLabel);
    var markerVal = min;
    // On y Axis
    for (var i = 0; i <= totalLabel; i++) {
        markerVal = min + (incr * i);
        markerValHt = i * numMarkers * svgcHeight;
        var xMarkers = svgcMarginSpace - 5;
        var yMarkers = svgcMarginHeight - (markerValHt / max);

        textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('dx', xMarkers - 70);
        textelement.setAttribute('dy', yMarkers);
        txtnode = document.createTextNode(markerVal);
        textelement.appendChild(txtnode);
        svg.appendChild(textelement);
    }

    //On x Axis
    for (var i = 0; i < totalChartBars; i++) {
        name = labArr[i];
        markerXPosition = svgcMarginSpace + bcMargin + (i * (bcWidth + bcMargin)) + (bcWidth / 2);
        markerYPosition = svgcMarginHeight + 20;

        textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('dx', markerXPosition);
        textelement.setAttribute('dy', markerYPosition);
        txtnode = document.createTextNode(name);
        textelement.appendChild(txtnode);
        svg.appendChild(textelement);
    }
}

function clearGraph() {
            while (svg.lastChild) {
                svg.removeChild(svg.lastChild);
            }
        }