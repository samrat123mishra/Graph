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



