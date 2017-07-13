function sum(request, response) {
  console.log('Hello');
  var n = request.query.n
  var result = 0
  var problem = ''
  for(var i = 0; i < n.length; i++) {
    result += parseFloat(n[i])
  }
  for(var i = 1; i < n.length; i++) {
    problem += ' + ' + n[i]
  }
  problem = n[0] + problem
  response.send(problem +  ' = ' + String(result))
}

module.exports = sum;
