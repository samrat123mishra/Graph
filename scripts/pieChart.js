function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}
function pieChart(type, min, max, valArr) {
    var values = [];
    for (var i = 0; i < totalChartBars; i++) {
        var Val = valArr[i] - min;
        values.push(Val);
    }
    var sum = 0;
    values.forEach(function (item, index) { sum += item; });
    for (var i = 0; i < totalChartBars; i++) {
        bcVal = values[i];
        var angle2 = (bcVal / sum) * 360;
        var angle1 = angles.length > 0 ? angles[angles.length - 1] : 0;
        angle2 = angle1 + angle2;
        angles.push(angle2);
        path.renderPieChart(angle1, angle2, getRandomColor());
    }

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function trans(angle1, angle2) {
    return function (e) {
        func(e, angle1, angle2);
    };
    function func(e, angle1, angle2) {
        var angleInDegrees = (angle1 + angle2) / 2;
        var point = polarToCartesian(300, 300, 150, angleInDegrees)
        var d = event.target.getAttribute('d');
        var a = d.split(' ');
        var x1 = point.x - (parseFloat(a[1]) + parseFloat(a[9])) / 2;
        var y1 = point.y - (parseFloat(a[2]) + parseFloat(a[10])) / 2;
        e.target.style.transition = '0.8s ease';
        e.target.style.transform = ' matrix(1, 0, 0, 1, ' + x1 + ', ' + y1 + ')';
    }
}
function transout(e) {
    e.target.style.transition = '0.8s ease';
    e.target.style.transform = ' matrix(1, 0, 0, 1, 0 ,0)';
}