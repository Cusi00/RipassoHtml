const voti = [];
let media = 0;
function aggiungiVoto() {
  const voto = document.getElementById("voto").value;
  voti.push(voto);
  // questo codice e parlante, dal cnome della funzione riconosco
  // il suo scopo/funzione
  renderVoti();
  renderMedia();
  esito();
}

// ho separato perche 1 era possibile, 2 mi permette di avere
//del codice piu pulito in quanto ho isolato la funzionalita che si
//occupa di renderizzare i voti sull html. sto applicando il principio di
// separation of concerns
// la responsabilita di renderizzare è adibita ad un unica funzione

function renderVoti() {
  // voglio creare del codice html che verra inserito
  // poi nel nostro tag ul
  // faccio tutto per mezzo di stringhe: vado a definire una stringa vuota
  // sulla quale andro a concatenare tutti gli elementi
  // in codice html
  let ris = "";
  for (let i = 0; i < voti.length; i++) {
    let classe = generaClasse(voti[i]);
    // ris += '<li class =" " + classe + "">' + voti[i] + "</li>";
    ris += `<li class = "${classe}"> ${voti[i]} </li>`;
  }

  // vado a recuperare l elemento html dove visualizzo
  // la lista e lo sostituiisco con quello generato dall'utente
  document.getElementById("lista").innerHTML = ris;
}

// questa funzione a partire dal parametro che corrispondera ad un voto
//andra a restituire una classe CSS che andra ad applicare uno stile
//diverso a seconda del voto
// devo applicare uno stile diverso a seconda del valore del voto
// ad ogni iterazione vado a fare un check sul valore e posso
//ad esempio assegnare una classe divesa a seconda del valore
// del voto
function generaClasse(voto) {
  let classe = "";
  // lo calcoliamo
  if (voto >= 6 && voto < 8) {
    classe = "buono";
  } else if (voto >= 8) {
    classe = "ottimo";
  } else if (voto < 6 && voto > 4) {
    classe = "insufficiente";
  } else if (voto < 4) {
    classe = "gravementeInsufficiente";
  }

  // il valore della classe sara restituito dalla funzione
  return classe;
}

function renderMedia() {
  let somma = 0;
  for (let i = 0; i < voti.length; i++) {
    somma += parseInt(voti[i]);
    console.log(somma);
  }

  media = somma / voti.length;
  // innerText a differenza di innerHTML anche se gli passo
  //codice html verra visualizzat cosi com'e sulla pagina
  document.getElementById("media").innerText = media;
}

function esito() {
  let esito = "";
  if (media >= 6) {
    esito = "Promosso";
  } else {
    esito = "Bocciato";
  }
  document.getElementById("esito").innerHTML = esito;
}
