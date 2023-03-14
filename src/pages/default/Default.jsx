import React from 'react'

const Default = () => {

  function IRR(values, guess) {
    var irrResult = function(values, dates, rate) {
      var r = rate + 1;
      var result = values[0];
      for (var i = 1; i < values.length; i++) {
        result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
      }
      return result;
    }
  
    var irrResultDeriv = function(values, dates, rate) {
      var r = rate + 1;
      var result = 0;
      for (var i = 1; i < values.length; i++) {
        var frac = (dates[i] - dates[0]) / 365;
        result -= frac * values[i] / Math.pow(r, frac + 1);
      }
      return result;
    }
  
    var dates = [];
    var positive = false;
    var negative = false;
    for (var i = 0; i < values.length; i++) {
      dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
      if (values[i] > 0) positive = true;
      if (values[i] < 0) negative = true;
    }
    
    if (!positive || !negative) return '#NUM!';
  
    var guess = (typeof guess === 'undefined') ? 0.1 : guess;
    var resultRate = guess;
    
    var epsMax = 1e-10;
    
    var iterMax = 50;
    var newRate, epsRate, resultValue;
    var iteration = 0;
    var contLoop = true;
    do {
      resultValue = irrResult(values, dates, resultRate);
      newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
      epsRate = Math.abs(newRate - resultRate);
      resultRate = newRate;
      contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
    } while(contLoop && (++iteration < iterMax));
  
    if(contLoop) return '#NUM!';
  
    return resultRate;
  }

  console.log(IRR([-2667,-2667,-2667,1960 ,2059 ,2159 ,2262 ,2367 ,2474 ,2584 ,2696 ,2810 ,2927 ,3047 ,3168, 3293 ,3420 ,3550 ,3683 ,3818 ,3956 ,4098 ,4242 ,5989 ,6140 ,6294 ,6451 ,6611]))
  return (
    <div>Default</div>
  )
}

export default Default