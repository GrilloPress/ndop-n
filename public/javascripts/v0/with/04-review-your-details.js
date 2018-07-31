$(window).load( function(){

  if (sessionStorage.firstName) {

    var first = capitalizeFirstLetter(sessionStorage.firstName);
    var second = capitalizeFirstLetter(sessionStorage.lastName);
    var yourName =  first + " " + second;
    $( "#your-name dd.answer" ).text( yourName );

  }

  if (sessionStorage.nhsNumber) {
    $( "#your-nhs-number dd.answer" ).text( sessionStorage.nhsNumber );
  }

  if (sessionStorage.dob) {
    $( "#your-dob dd.answer" ).text( capitalizeFirstLetter(sessionStorage.dob) );
  }


})

function submit() {

  if (sessionStorage.firstName === "Fake") {

    window.location.href = "/v0/errors/05X-verification-fail";

  } else if (sessionStorage.firstName === "Age") {

    window.location.href = "/v0/errors/05X-age-restriction";

  } else {

    window.location.href = "/v0/app/03-verification-option";

  }

}


function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
