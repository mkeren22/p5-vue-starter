// this p5 sketch is written in instance mode
// read more here: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

function sketch(parent) { // we pass the sketch data from the parent
  return function( p ) { // p could be any variable name

    // p5 sketch goes here

    p.setup = function() {
      let canvas = p.createCanvas(400, 200);
      canvas.parent(parent.$el);
      p.rectMode(p.CENTER);
    };

    p.draw = function() {
      p.background(0);
      p.fill(255);
      p.rect(200, 100, parent.data.x, parent.data.y);
    };

  };
}

console.log('p5 script 1 loaded');
