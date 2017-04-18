var createRect = function () {
    this.fillRect = function (x, y, wd, ht) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'width', wd);
        rect.setAttributeNS(null, 'height', ht);
        rect.setAttributeNS(null, 'fill', "red");
        svg.appendChild(rect);
    }
    this.fillBarRect = function (x, y, wd, ht) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttributeNS(null, 'x', x+3);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'width', wd);
        rect.setAttributeNS(null, 'height', ht);
        rect.setAttributeNS(null, 'fill', "red");
        svg.appendChild(rect);
    }

}
var rectangle = new createRect();
