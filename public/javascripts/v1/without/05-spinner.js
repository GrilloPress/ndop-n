var THE_PROTOTYPE_URL = "/v1";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function(){

  var theRoll = getRandomInt(3);
  console.log(theRoll);

  if (theRoll > 0 ) {

    window.setTimeout(function() {
        window.location.href = THE_PROTOTYPE_URL + "/app/03-verification-option";
    }, 6000);

  } else {

    window.setTimeout(function() {
        // window.location.href = THE_PROTOTYPE_URL + "/app/without-nhs-number/05X-no-unique-match";
        window.location.href = THE_PROTOTYPE_URL + "/app/03-verification-option";
    }, 6000);

  }

});
