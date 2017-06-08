$(function() {
  var target = $("#setTemperature").val();
  
  $( "#slider" ).slider({
    value: target,
    min: 5,
    max: 30,
    step: 0.1,
    slide: function( event, ui ) {
      $( "#setTemperature" ).val( ui.value );
    },
    stop: function( event, ui ) {
      setTtemp();
    }
  });
  
  $( "#lock" ).click(function() {
    if($(this).text() == "Lock") {
      console.log("Temperature is locked");
      $(this).text("Unlock");
      put("weekProgramState", "week_program_state", "off");
    } else {
      $(this).text("Lock");
      put("weekProgramState", "week_program_state", "on");
      console.log("Schedule will interfere.");
    }
  });
  
  $( "#toSchedule" ).click(function() {
    window.location.href = "../musical-barnacle-group4/schedule.html";
  });
    
    
  $("#setTemperature").change(function() {
    setTtemp();
    $( "#slider" ).slider( "value", $(this).val() );
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
      if(newSetTd % 1 == 0) {
        console.log("I'm here");
        newSetT += ".0";
      } 
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
      if(newSetTd % 1 == 0) {
        console.log("I'm here");
        newSetT += ".0";
      } 
      put("targetTemperature", "target_temperature", newSetT);
      $("#setTemperature").val(newSetT);
    } else {
      console.log("Too low!");
    }
  });
  
  function setTtemp() {
    var setT = $("#setTemperature").val();
    var setTd = parseFloat(setT);
    if (setTd < 5.0) {
      setT = "5.0";
    } 
    if (setTd > 30.0) {
      setT = "30.0";
    }
    put("targetTemperature", "target_temperature", setT);
  }


});