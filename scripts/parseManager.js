var svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag
//The Chart dimensional settings
var svgcWidth,
    svgcHeight,
    svgcMargin,
    svgcSpace,
    svgcMarginSpace,
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
var parserManager = function(){
this.chartData = [];
this.getData = function(dataUrl) {
		return $.ajax({
				url: dataUrl,
				type:"GET",
				success:function(data,satus,xhr){
						return data;
					}
		});
};
}



