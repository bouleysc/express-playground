function volume(request, response){
  var l = parseFloat(request.params.length);
  var w = parseFloat(request.params.width);
  var h = parseFloat(request.params.height);
  response.send("The volume of a " + String(l) + "x" + String(w) + "x" + String(h) + " rectangle is " + String(l*w*h));
}

module.exports = volume;
