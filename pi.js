function pi (request, response){
  response.send(String(Math.PI));
}


module.exports = pi;
