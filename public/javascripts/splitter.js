function split() {

  theRoll = getRandomInt(2);

  if (theRoll == 0) {

    window.location.href = "/A/app/index";

  } else {

    window.location.href = "/B/app/index";

  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
