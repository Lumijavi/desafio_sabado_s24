$(document).ready(function() {
  console.log("ready!");

  $('.dial_red').trigger(
    'configure', {
      "min": 0,
      "max": 255,
      "fgColor": "#FF0000",
      "skin": "tron",
      'change' : function (v) { console.log(v); }
    });

  $('.dial_green').trigger(
    'configure', {
      "min": 0,
      "max": 255,
      "fgColor": "#00FF00",
      "skin": "tron",
      'change' : function (v) { console.log(v); }
    });

  $('.dial_blue').trigger(
    'configure', {
      "min": 0,
      "max": 255,
      "fgColor": "#0000FF",
      "skin": "tron",
      'change' : function (v) { console.log(v); }
    });
});
