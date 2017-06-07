$(function(){ 
  var i = 0;
  
  var tTemp = get('targetTemperature', 'target_temperature');  
  $("#setTemperature").val(tTemp);
  
  window.setInterval(function(){
    var cTemp = get('currentTemperature', 'current_temperature');
    $('#currentTemp').text(cTemp);
  }, 100);

});
  