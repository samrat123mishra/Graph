var textMarker = function () {
    this.textChart = function (x, y, text) {
        var markerXPosition = x;
        var markerYPosition = y - 5;
        textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('dx', markerXPosition);
        textelement.setAttribute('dy', markerYPosition);
        txtnode = document.createTextNode(text);
        textelement.appendChild(txtnode);
        svg.appendChild(textelement);
    }
    this.textBarChart = function (x, y, text) {
        var markerXPosition = x + bcHt;
        var markerYPosition = y + (barHt / 2);
        textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textelement.setAttribute('x', markerXPosition + 5);
        textelement.setAttribute('y', markerYPosition);
        txtnode = document.createTextNode(parseInt(text) / 1000 + 'k');
        textelement.appendChild(txtnode);
        svg.appendChild(textelement);
    }
    this.barAxisMarkers = function (type, min, max, incr, labArr) {
        var numMarkers = parseInt(max / totalLabel);
    var markerVal = min;
        // on y Axis
        for (var i = 0; i < totalChartBars; i++) {
            name = labArr[i];
            markerXPosition = svgcMargin;
            markerYPosition = svgcMarginHeight - (i * (barHt + bcMargin)) - (barHt / 2 + bcMargin);
            textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textelement.setAttribute('dx', markerXPosition);
            textelement.setAttribute('dy', markerYPosition);
            txtnode = document.createTextNode(name);
            textelement.appendChild(txtnode);
            svg.appendChild(textelement);

        }
        //On x Axis
        for (var i = 0; i <= totalLabel; i++) {
            markerVal = min + (incr * i);
            markerValHt = i * numMarkers * svgcHeight;
            var xMarkers = svgcMarginSpace + (i * (svgcWidth / totalLabel));
            var yMarkers = svgcMarginHeight + bcMargin;

            textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textelement.setAttribute('dx', xMarkers - (svgcMargin / 2));
            textelement.setAttribute('dy', yMarkers);
            txtnode = document.createTextNode(parseInt(markerVal) / 1000 + 'k');
            textelement.appendChild(txtnode);
            svg.appendChild(textelement);
        }


    }
    this.otherAxisMarker = function (type, min, max, incr, labArr) {
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
            markerXPosition = svgcMarginSpace + (i * (bcWidth + bcMargin)) + (bcWidth / 2);
            markerYPosition = svgcMarginHeight + 20;

            textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textelement.setAttribute('dx', markerXPosition);
            textelement.setAttribute('dy', markerYPosition);
            txtnode = document.createTextNode(name);
            textelement.appendChild(txtnode);
            svg.appendChild(textelement);
        }
    }
}
var marker = new textMarker();