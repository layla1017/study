$(document).ready(function() {
  'usd strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c = Shape.Circle(300, 200, 100);
  c.fillColor = 'green';

  });
