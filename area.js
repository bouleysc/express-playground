function area(request, response){
  var type = request.body.type;
  var radius = parseFloat(request.body.radius);
  var width = parseFloat(request.body.width);
  var height = parseFloat(request.body.height);
  if (type == 'rectangle'){
    response.send('Area of a ' + String(width) + 'x' + String(height) + ' rectangle is ' + String(width * height));
  }
  if (type == 'circle'){
    response.send('Area of a circle with a radius of ' + String(radius) + ' is ' + String(Math.PI * (radius*radius)));
  }
}

module.exports = area;
