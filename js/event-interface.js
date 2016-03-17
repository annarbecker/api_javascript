var meetupApiKey = require('./../.env').meetupApiKey;

var getEvents = function() {
  var city = $('#destination').val();
  $.get('https://api.meetup.com/find/groups?key=' + meetupApiKey + '&location=' + city + '&sign=true')
    .then(function(eventResponse){
      console.log(eventResponse[1].name);
      $('#meetupCity').html('<h1>' + city + ' Meetups</h1>');
      for (var j  = 0 ; j < 7 ; j++) {
        $('#meetup'+ j).html("<b>" + eventResponse[j].name + "</b><br><a id='" + j + "'>Click For Description</a><div class='descriptions' id='toggle" + j + "'>" + eventResponse[j].description + "</div><br><a target='none' href='" + eventResponse[j].link + "'>Meetup Info</a><br><p>Category: " + eventResponse[j].category.name + "</p>");
      }


        $("#0").click(function(){
          $('#toggle0').toggle();
          });
        $("#1").click(function(){
          $('#toggle1').toggle();
          });
        $("#2").click(function(){
          $('#toggle2').toggle();
          });
        $("#3").click(function(){
          $('#toggle3').toggle();
          });
        $("#4").click(function(){
          $('#toggle4').toggle();
          });
        $("#5").click(function(){
          $('#toggle5').toggle();
          });
        $("#6").click(function(){
          $('#toggle6').toggle();
        });
  });
}


// console.log(link);
// $('#toggle' + i).hide();
