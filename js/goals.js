var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");
output1.innerHTML = slider1.value;
var x = slider1.value;
x -= x * 0.01;
var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
slider1.style.background = color;
slider1.oninput = function() {
    output1.innerHTML = this.value;
}
slider1.addEventListener("input", function(){
    var x = slider1.value;
    x -= x * 0.01;
    var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
    slider1.style.background = color;
})

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");
output2.innerHTML = slider2.value;
var x = slider2.value;
x -= x * 0.01;
var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
slider2.style.background = color;
slider2.oninput = function() {
    output2.innerHTML = this.value;
}
slider2.addEventListener("input", function(){
    var x = slider2.value;
    x -= x * 0.01;
    var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
    slider2.style.background = color;
})

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3");
output3.innerHTML = slider3.value;
var x = slider3.value;
x -= x * 0.01;
var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
slider3.style.background = color;
slider3.oninput = function() {
    output3.innerHTML = this.value;
}
slider3.addEventListener("input", function(){
    var x = slider3.value;
    x -= x * 0.01;
    var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
    slider3.style.background = color;
})

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("value4");
output4.innerHTML = slider4.value;
var x = slider4.value;
x -= x * 0.01;
var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
slider4.style.background = color;
slider4.oninput = function() {
    output4.innerHTML = this.value;
}
slider4.addEventListener("input", function(){
    var x = slider4.value;
    x -= x * 0.01;
    var color = "linear-gradient(90deg, red " + x + "%, rgb(200, 233, 167) " + x + "%)";
    slider4.style.background = color;
})