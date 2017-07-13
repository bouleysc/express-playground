function calculate(request, response) {
  var operation = request.query.operation;
  var x = parseFloat(request.query.x);
  var y = parseFloat(request.query.y);
  if(operation=='add'){
    response.send(String(x) + ' + ' + String(y) + ' = ' + String(x+y))
  }
  if(operation=='subtract'){
    response.send(String(x) + ' - ' + String(y) + ' = ' + String(x-y))
  }
  if(operation=='multiply'){
    response.send(String(x) + ' * ' + String(y) + ' = ' + String(x*y))
  }
  if(operation=='divide'){
    response.send(String(x) + ' / ' + String(y) + ' = ' + String(x/y))
  }
}

module.exports = calculate;
