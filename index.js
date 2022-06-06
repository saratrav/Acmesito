
//pulsanti per navigazione del sito

function OffertaUp() {
    window.scrollTo(0, 1820);
  }

  function DurataUp() {
    window.scrollTo(0, 3300);
  }

  function BorseUp() {
    window.scrollTo(0, 3800);
  }

  //bottoncino per andare su

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  //pop up

let popUp =
document.getElementById("popup");

function goUp() {
    popUp.style = "bottom: -50px;";
}

function disappear() {
  popUp.style = "display: none;";
}
