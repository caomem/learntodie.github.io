function updateCanvas() {
    var d1 = new Date();
    var d2 = new Date(document.getElementById("date").value);
    var days = Math.floor((d1-d2)/1000/60/60/24); 

    var canvas = document.getElementById("canvas");
    canvas.width = document.getElementById("mylife").width
    canvas.height = document.getElementById("mylife").height
    var w = canvas.width
    var h = canvas.height
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#555555";
    
    for (var i = 0; i < 80; i++) {
        for (var j = 0; j < 52; j++) {
            if (i+1 <= Math.round(days/7)/52 || (i+1 == Math.floor(Math.round(days/7)/52)+1 && j+1 <= Math.round(days/7)%52)) {
                ctx.fillRect(j*w*0.98/53+w*0.01,(80-i)*h*0.98/81+h*0.01,w*0.7/53,h*0.7/81-0.5);
                ctx.strokeRect(j*w*0.98/53+w*0.01,(80-i)*h*0.98/81+h*0.01,w*0.7/53,h*0.7/81-0.5);
            } else {
                ctx.strokeRect(j*w*0.98/53+w*0.01,(80-i)*h*0.98/81+h*0.01,w*0.7/53,h*0.7/81-0.5);
            }
        }
    }
}

var d1 = new Date();
var d2 = new Date("1997/10/07");
var days = Math.floor(Math.abs(d1-d2)/1000/60/60/24); 

var canvas = document.getElementById("mylife");

var w = canvas.width
var h = canvas.height
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#555555";

for (var i = 0; i < 80; i++) {
    for (var j = 0; j < 52; j++) {
        if (i+1 <= Math.round(days/7)/52 || (i+1 == Math.floor(Math.round(days/7)/52)+1 && j+1 <= Math.round(days/7)%52)) {
            ctx.fillRect(j*w*0.98/53+w*0.01,(80-i)*h*0.98/81+h*0.01,w*0.7/53,h*0.7/81-0.5);
            ctx.strokeRect(j*w*0.98/53+w*0.01,(80-i)*h*0.98/81+h*0.01,w*0.7/53,h*0.7/81-0.5);
        } else {
            ctx.strokeRect(j*w*0.98/53+w*0.01,(80-i)*h*0.98/81+h*0.01,w*0.7/53,h*0.7/81-0.5);
        }
    }
}