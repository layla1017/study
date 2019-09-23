$(document).ready(function() {
  'usd strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c;
  var tool = new Tool();

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';

  }


  });
