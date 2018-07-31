$(window).load( function(){

  if (sessionStorage.firstName) {

    var first = capitalizeFirstLetter(sessionStorage.firstName);
    var second = capitalizeFirstLetter(sessionStorage.lastName);
    var yourName =  first + " " + second;
    $( "#your-name dd.answer" ).text( yourName );

  }

  if (sessionStorage.dob) {
    $( "#your-dob dd.answer" ).text( capitalizeFirstLetter(sessionStorage.dob) );
  }

  if (sessionStorage.postcode) {
    $( "#your-postcode dd.answer" ).text( sessionStorage.postcode.toUpperCase() );
  }


})

function submit() {

  if (sessionStorage.firstName === "Fake") {

    window.location.href = "v1/errors/05X-verification-fail";

  } else if (sessionStorage.firstName === "Age") {

    window.location.href = "v1/errors/05X-age-restriction";

  } else {

    window.location.href = "/v1/app/without-nhs-number/05-spinner";

  }

}


function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
