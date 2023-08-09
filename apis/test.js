const request = require('request');

describe('API Test Suite', function() {
  var averageResponseTime = 0;

  afterEach(function() {
    console.log('Average Response Time:', averageResponseTime);
    if(averageResponseTime<=3000){
        console.log(true);
    };
  });


  it('API Test Case', function(done) {
    var iterations = 100;
    var completedIterations = 0;

    for (var i = 0; i < iterations; i++) {
      var startTime = new Date().getTime();

      // Make the API call
      request.post({
        url: 'https://zila-staging.ccdms.in/',
        json: true,
        body: {
          // Add your login request payload here
        }
      }, function(error, response, body) {
        var endTime = new Date().getTime();
        var responseTime = endTime - startTime;
        averageResponseTime += responseTime;

        console.log('Response Time:', responseTime);

        

        completedIterations++;
        if (completedIterations === iterations) {
          averageResponseTime /= iterations;
          done();
        }
      });
    }
  });
});
