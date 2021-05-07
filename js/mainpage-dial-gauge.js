/*
JS for the dial gauge, adapted to work in our situation
Found this code on: https://codepen.io/meetamit/pen/xOgeoj

@author Amit Sch
@see https://codepen.io/meetamit/pen/xOgeoj

Copyright (c) 2021 by Amit Sch (https://codepen.io/meetamit/pen/xOgeoj)
Fork of an original work  (https://codepen.io/kazu_codepen/pen/wGmGjv

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// data which need to be fetched

var name = "azerty";

var value = 50;


var gaugeMaxValue = 100; 

// données à calculer 
var percentValue = value / gaugeMaxValue; 

////////////////////////

var needleClient;



(function(){

var barWidth, chart, chartInset, degToRad, repaintGauge,
    height, margin, numSections, padRad, percToDeg, percToRad, 
    percent, radius, sectionIndx, svg, totalPercent, width,
    valueText, formatValue, k;

  percent = percentValue;

  numSections = 1;
  sectionPerc = 1 / numSections / 2;
  padRad = 0.025;
  chartInset = 10;
    
  // Orientation of gauge:
  totalPercent = .75;

  el = d3.select('.chart-gauge');

  margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };

  width = el[0][0].offsetWidth - margin.left - margin.right;
  height = width;
  radius = Math.min(width, height) / 2;
  barWidth = 40 * width / 300;


  
  //Utility methods 
  
  percToDeg = function(perc) {
    return perc * 360;
  };

  percToRad = function(perc) {
    return degToRad(percToDeg(perc));
  };

  degToRad = function(deg) {
    return deg * Math.PI / 180;
  };

  // Create SVG element
  svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);

  // Add layer for the panel
  chart = svg.append('g').attr('transform', "translate(" + ((width) / 2 + margin.left) + ", " + ((height + margin.top) / 2) + ")");


  chart.append('path').attr('class', "arc chart-first");
  chart.append('path').attr('class', "arc chart-second");
  chart.append('path').attr('class', "arc chart-third");
  chart.append('path').attr('class', "arc chart-fourth");
  chart.append('path').attr('class', "arc chart-fifth");
    
  valueText = chart.append("text")
                    .attr('id', "Value")
                    .attr("font-size",30) //Change font size here
                    .attr("text-anchor","middle")
                    .attr("dy",".5em")
                    .style("fill", '#000000');
  formatValue = d3.format('1%');

  arc5 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
  arc4 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
  arc3 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
  arc2 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
  arc1 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)

  repaintGauge = function () 
  {
    perc = 0.5;
    var next_start = totalPercent;
    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad(perc / 5);
    next_start += perc / 5;


    arc1.startAngle(arcStartRad).endAngle(arcEndRad);

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad(perc / 5);
    next_start += perc / 5;

    arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad(perc / 5);
    next_start += perc / 5;
      
    arc3.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad(perc / 5);
    next_start += perc / 5;
      
    arc4.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad(perc / 5);
      
    arc5.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

    chart.select(".chart-first").attr('d', arc1);
    chart.select(".chart-second").attr('d', arc2);
    chart.select(".chart-third").attr('d', arc3);
    chart.select(".chart-fourth").attr('d', arc4);
    chart.select(".chart-fifth").attr('d', arc5);

  }
/////////

    var dataset = [{metric:name, value: value}]

    var texts = svg.selectAll("text")
                .data(dataset)
                .enter();
     
    texts.append("text")
         .text(function(){
              return dataset[0].metric;
         })
         .attr('id', "Name")
         .attr('transform', "translate(" + ((width + margin.left) / 6) + ", " + ((height + margin.top) / 1.5) + ")")
         .attr("font-size",25)
         .style("fill", "#000000");
      

    texts.append("text")
        .text(function(){
            return 0;
        })
        .attr('id', 'scale0')
        .attr('transform', "translate(" + ((width + margin.left) / 100 ) + ", " + ((height + margin.top) / 2) + ")")
        .attr("font-size", 15)
        .style("fill", "#000000");
                    
    texts.append("text")
        .text(function(){
            return gaugeMaxValue/2;
        })
        .attr('id', 'scale10')
        .attr('transform', "translate(" + ((width + margin.left) / 2.15 ) + ", " + ((height + margin.top) / 30) + ")")
        .attr("font-size", 15)
        .style("fill", "#000000");
                    
                    
    texts.append("text")
        .text(function(){
            return gaugeMaxValue;
        })
        .attr('id', 'scale20')
        .attr('transform', "translate(" + ((width + margin.left) / 1.03 ) + ", " + ((height + margin.top) / 2) + ")")
        .attr("font-size", 15)
        .style("fill", "#000000");
    
  var Needle = (function() {

    //Helper function that returns the `d` value for moving the needle
    var recalcPointerPos = function(perc) {
      var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
      thetaRad = percToRad(perc / 2);
      centerX = 0;
      centerY = 0;
      topX = centerX - this.len * Math.cos(thetaRad);
      topY = centerY - this.len * Math.sin(thetaRad);
      leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
      leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
      rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
      rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);
     
        
        return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
        
        
        
        
    };

    function Needle(el) {
      this.el = el;
      this.len = width / 2.5;
      this.radius = this.len / 8;
    }

    Needle.prototype.render = function() {
      this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
        
        
        
        
      return this.el.append('path').attr('class', 'needle').attr('id', 'client-needle').attr('d', recalcPointerPos.call(this, 0));
        
       
    };

    Needle.prototype.moveTo = function(perc) {
      var self,
          oldValue = this.perc || 0;

      this.perc = perc;
      self = this;

      // Reset pointer position
      this.el.transition().delay(100).ease('quad').duration(200).select('.needle').tween('reset-progress', function() {
        return function(percentOfPercent) {
          var progress = (1 - percentOfPercent) * oldValue;
          
            
                
            
          repaintGauge(progress);
          return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
        };
      });

      this.el.transition().delay(300).ease('bounce').duration(1500).select('.needle').tween('progress', function() {
        return function(percentOfPercent) {
          var progress = percentOfPercent * perc;
          
          repaintGauge(progress);
          
          var thetaRad = percToRad(progress / 2);
          var textX = - (self.len + 45) * Math.cos(thetaRad);
          var textY = - (self.len + 45) * Math.sin(thetaRad);

          valueText.text(formatValue(progress))
            .attr('transform', "translate("+textX+","+textY+")")

          return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
        };
      });

    };
    
      
    return Needle;

  })();
    
 
    
  needle = new Needle(chart);
  needle.render();
  needle.moveTo(percent);

  setTimeout(displayValue, 1350);
    
    

})();