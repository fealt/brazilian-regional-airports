// MDB Animations initialization
$( document ).ready(function() {
    new WOW().init();
  });

$( ".wow" ).addClass( "slideInUp slow" );

// Card
$('.card').click(function() {
    $('.card-body').toggleClass('close');
});



// Circles
// With thanks to
// https://stackoverflow.com/questions/32681610/drawing-point-on-circle

//Define Variables
// var radius = 80;
// var point_size = 4;
// var center_x = 150;
// var center_y = 150;
// var font_size = "20px";

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// function drawCircle(){
//     ctx.beginPath();
//     ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
//     ctx.stroke();
// }

// function drawPoint(angle,distance,label){
//     var x = center_x + radius * Math.cos(-angle*Math.PI/180) * distance;
//     var y = center_y + radius * Math.sin(-angle*Math.PI/180) * distance;

//     ctx.beginPath();
//     ctx.arc(x, y, point_size, 0, 2 * Math.PI);
//     ctx.fill();

//     ctx.font = font_size;
//     ctx.fillText(label,x + 10,y);
// }

// drawCircle();
// // drawPoint(0,1,"A");
// // drawPoint(90,1.5,"B");
// // drawPoint(180,1,"C");
// // drawPoint(45,0.5,"D");

// drawPoint(0,0.25,"GRU");
// drawPoint(180,0.25,"BSB");


// Circles
// https://stackoverflow.com/questions/62763548/dots-inside-circle-with-d3-js

// var svg = d3
//     .select('.container')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);    

// var group = svg
//     .append('g')
//     .attr('transform', 'translate(500,200)');

// for ( let i = 0; i < 500; i++) {

//     var rad = Math.sqrt(~~(Math.random() * 100 * 100)),
//         angle = Math.random() * Math.PI * 2,
//         posx = Math.cos(angle),
//         posy = Math.sin(angle);

//     var c2 = group2
//         .append('circle')
//         .attr('id', 'cir')
//         .attr('cx', posx * rad)
//         .attr('cy', posy * rad)
//         .attr('r', 2)
//         .style('fill', 'steelblue')
//         .style('opacity', 0.6);

//  }


// Circles
// With thanks to "The Coding Train"
// https://www.youtube.com/watch?v=XATr_jdh-44

// var circles = [];

// function setup() {
//   createCanvas(640, 360);

//   // Lets make sure we don't get stuck in infinite loop
//   var protection = 0;

//   // Try to get to 500
//   // noprotect
//   while (circles.length < 500) {
//     // Pick a random circle
//     var circle = {
//       x: random(width),
//       y: random(height),
//       r: random(6, 36)
//     };

//     // Does it overlap any previous circles?
//     var overlapping = false;
//     for (var j = 0; j < circles.length; j++) {
//       var other = circles[j];
//       var d = dist(circle.x, circle.y, other.x, other.y);
//       if (d < circle.r + other.r) {
//         overlapping = true;
//       }
//     }

//     // If not keep it!
//     if (!overlapping) {
//       circles.push(circle);
//     }

//     // Are we stuck?
//     protection++;
//     if (protection > 10000) {
//       break;
//     }
//   }

//   // Draw all the circles
//   for (var i = 0; i < circles.length; i++) {
//     fill(255, 0, 175, 100);
//     noStroke();
//     ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
//   }
// }




