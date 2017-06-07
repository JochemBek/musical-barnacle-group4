$(function(){ 
  var i = 0;
  
  window.setInterval(function(){
    var cTemp = get('currentTemperature', 'current_temperature');
    $('#currentTemp').text(cTemp);
  }, 5000);

});
  