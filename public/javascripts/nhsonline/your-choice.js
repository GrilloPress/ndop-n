$(window).load(function() {
  thankYouMessage();
  if (window.location.search.indexOf('return=true') > -1) {
    $( ".alert" ).fadeIn( 1000, function() {
    })
  }

});

function thankYouMessage() {
  var pref = sessionStorage.singlePref;

  // This is now an ugly hack...

  if ( pref == "true" ) {
    console.log("true");
    $(" #preference ").text( "allow");

  } else {
    console.log("false");
      $(" #preference ").text( "do not allow");
  }

};
