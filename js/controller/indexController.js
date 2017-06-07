$(function() {
  
  $("#setTemperature").change(function() {
    var setT = $("#setTemperature").val();
    var setTd = parseFloat(setT);
    if(setTd > 4.9 && setTd < 30.1) {
      put("targetTemperature", "target_temperature", setT);
    } else if (setTd < 5.0) {
      console.log("under 5");
      put("targetTemperature", "target_temperature", "5.0");
    } else if (setTd > 30.0) {
      console.log("above 30");
      put("targetTemperature", "target_temperature", "30.0");
    }
  });
  
  $("#setTemperature").focusout(function() {
    var tTemp = get('targetTemperature', 'target_temperature');
    $("#setTemperature").val(tTemp);
  });
  
  $("#tempUp").click( function() {
    var setT = $("#setTemperature").val();
    var setTd = parseFloat(setT);
    var newSetTd = setTd + 0.5;
    newSetTd = round(newSetTd, 1);
    console.log(newSetTd);
    if(newSetTd < 30.1) {
      var newSetT = newSetTd.toString();
      put("targetTemperature", "target_temperature", newSetT);
      $("#setTemperature").val(newSetT);
    } else {
      console.log("Too high!");
    }
  });
  
  $("#tempDown").click( function() {
    var setT = $("#setTemperature").val();
    var setTd = parseFloat(setT);
    var newSetTd = setTd - 0.5;
    newSetTd = round(newSetTd, 1);
    console.log(newSetTd);
    if(newSetTd > 4.9) {
      var newSetT = newSetTd.toString();
      put("targetTemperature", "target_temperature", newSetT);
      $("#setTemperature").val(newSetT);
    } else {
      console.log("Too low!");
    }
  });

});