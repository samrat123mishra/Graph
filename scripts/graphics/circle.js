var createCircle = function () {
    this.draw = function (x,y,rx) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttributeNS(null, 'cx', x + (bcWidth / 2));
        circle.setAttributeNS(null, 'cy', y);
        circle.setAttributeNS(null, 'r', rx);
        circle.setAttributeNS(null, 'fill', "red");
        svg.appendChild(circle);

    }
}
var circle = new createCircle();