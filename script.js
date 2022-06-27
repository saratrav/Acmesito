
//pulsanti per navigazione del sito


function offertaUp() {
  let offerta = document.getElementById("ampiaofferta");
  offerta.scrollIntoView();
}


function durataUp() {
  let durata = document.getElementById("durata");
  durata.scrollIntoView();
}

function borseUp() {
  let borse = document.getElementById("borse");
  borse.scrollIntoView();
}

//bottoncino per andare su

function scrollToTop() {
  window.scrollTo(0, 0);
}

//pop up

let popUp =
  document.getElementById("popup");

let accetta =
  document.getElementById("accetta");

let rifiuta =
  document.getElementById("rifiuta")

function goUp() {
  popUp.style = "transform: translateY(-125px);";
  accetta.style = "transform: translateY(-125px);";
  rifiuta.style = "transform: translateY(-125px);";
}

function disappear() {
  popUp.style = "display: none;";
  accetta.style = "display: none;";
  rifiuta.style = "display: none;";
}


//Citazioni

const pallino1 = document.getElementById("pallino1");
const pallino2 = document.getElementById("pallino2");
const pallino3 = document.getElementById("pallino3");

function cambiaFraseUno() {
  let citazione = document.getElementById("frasi");
  citazione.innerHTML = '"Non sprecare il tuo tempo. Crea, agisci, prendi posto ovunque tu sia e diventa qualcuno" <br> Teddy Roosevelt';
  pallino1.style = "color: white;";
  pallino2.style = "color: black;";
  pallino3.style = "color: black;";
}


function cambiaFraseDue() {
  let citazione = document.getElementById("frasi");
  citazione.innerHTML = "Lo studio: strumento per costruire la propria libertà, educazione dell\'ingegno\ e della creatività al lavoro, ma soprattutto occasione privilegiata di capire la vita Enrico Palandri";
  
  pallino1.style = "color: black;";
  pallino2.style = "color: white;";
  pallino3.style = "color: black;";
}

function cambiaFraseTre() {
  let citazione = document.getElementById("frasi");
  citazione.innerHTML = "L'obiettivo non è vivere per sempre. L'obiettivo è creare qualcosa che vivrà per sempre <br> Chuck Palahniuk";

  pallino3.style = "color: white;";
  pallino2.style = "color: black;";
  pallino1.style = "color: black;";

}
