var chart = function(){
  this.render = function(){

  }
  this.barChart = function(){
        console.log("parent class")
  }
  this.columnChart = function(){


  }
this.pieChart = function(){


}
}

var myChart = function(){
    chart.call(this);
    this.barChart = function(){
        console.log("child class");
    }
}
myChart.prototype = chart.prototype;
var chartOpt = new myChart();
chartOpt.barChart(); 