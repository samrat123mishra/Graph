var createPath = function(){
 this.renderPieChart = function(angle1, angle2, color) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute("d", describeArc(300, 300, 100, parseInt(angle1), parseInt(angle2)));
    path.style.stroke = color;
    path.setAttribute("stroke-width", 100);
    path.style.fill = 'none';
    path.addEventListener('mouseenter', trans(angle1, angle2));
    path.addEventListener('mouseleave', transout);
    svg.appendChild(path);
}
}
var path = new createPath();



 