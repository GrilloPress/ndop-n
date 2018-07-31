function submit() {

  // KILL SESSION STORAGE
  //
  // REMOVE IF ADDITIONAL LOOKING AT singlePref NEEDED
  //

  if ( sessionStorage.singlePref ) {

    sessionStorage.singlePref = "";

  }

  //
  // END

  var isAuthComplete = false;
  checkDetails(isAuthComplete);

}


function checkDetails(isAuthComplete) {

  // get values
  var auth = $('input[name="auth"]:checked').val();

    console.log(auth);
    var a = checkFieldIsEmpty(auth, "auth-option", "Option", isAuthComplete);
    sessionStorage.setItem('auth', auth);

  // redirect to next page
  // console.log( fieldComplete )

  if (a && auth === "no-nhs-number-journey" ) {

    // console.log("no NHS number");
    window.location.href = "/N/app/without-nhs-number/01-your-name";

  }

  if (a && auth === "nhs-number-journey" ) {

    // console.log("Using NHS number");
    window.location.href = "/N/app/with-nhs-number/01-your-name";

  }

}


function checkFieldIsEmpty(fieldValue, fieldName, fieldText, fieldComplete) {

  // fieldName first-name
  // fieldValue firstName
  // fieldText First name

  if (fieldValue == undefined){
		//Adds the validation error css class to the form group and shows the error message
		$( '#' + fieldName ).addClass("form-row-error-active has-error");
		$('#' + fieldName + '-error').addClass( 'error-message-active' );
    $('#' + fieldName + '-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='" + fieldName + "-error-link'>" + "<a href='#" + fieldName + "'>" + "No option selected" + "</a>" + "</li>" );
    fieldComplete = false;

    // $( "legend h1" ).addClass(" error-label ");
    $(" .error-message ").addClass(" error-message-active ");
    $(" .has-error ").addClass(" error-message-active ");
    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    $( ".error-summary" ).focus();

    // Needs to have a page title update
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#' + fieldName ).removeClass("has-error");
    $('#' + fieldName ).removeClass("form-row-error-active");
		$('#' + fieldName + '-error').removeClass( 'error-message-active' );
    $('#' + fieldName + '-error-link').remove();
    fieldComplete = true;
	}

  console.log( fieldComplete )
  return fieldComplete;

}
