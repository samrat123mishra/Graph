var parseData = function(data){
var value = [];
var label=[];
	for(var i=0;i<data.length;i++){
		value.push(data[i].value);
		label.push(data[i].label);
	}
	console.log(value,label);
	this.val=value;
	this.label=label;
}