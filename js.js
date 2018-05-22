
//------ Dclaration des variables ------

var combinaison = "";
var nbTours = 0;
var difficult = 1;
var SelectDifficult = 1;
var nbToursMax = 12;

//------ Gestion du HTML ------


//Fonction éxécutée au clic du bouton de validation
function valider(){
  nbTours ++;

  //récupération des couleurs sélectionnnées
  var color = new Array();
  for(var i=1;i<5;i++){
    color[i-1] = document.getElementById("color"+i).value;
  }

  //création d'une liste qui contiendra la ligne de couleurs
  ulElt = document.createElement("ul");
  ulElt.setAttribute("class", "w3-cell-row");

  //premier élément de la liste : le nb de BienMal
  liElt = document.createElement("li");
  liElt.setAttribute("class", "w3-cell w3-padding-small");
  liElt.setAttribute("style", "text-align: center;color: grey");
  liElt.textContent = nbBien(0,combinaison,convertToConbi(color));
  ulElt.appendChild(liElt);
  console.log(color+" / "+convertToConbi(color))

  //ajout des 4 couleurs dans la liste
  for (var i = 0; i <4 ; i++) {
    liElt = document.createElement("li");
    liElt.setAttribute("class", "w3-cell w3-padding-small");
    liElt.style.width = "20%";
    liElt.innerHTML = "<img src=\"data/"+color[i]+".png\" style=\"width:40%; margin-left: 30%;\">";
    ulElt.appendChild(liElt);
  }

  //dernier élément de la liste : le nb de BienBien
  liElt = document.createElement("li");
  liElt.setAttribute("class", "w3-cell w3-padding-small");
  liElt.setAttribute("style", "text-align: center;color: red");
  liElt.textContent = nbBien(1,combinaison,convertToConbi(color));
  ulElt.appendChild(liElt);

  //ajout de la nouvelle liste dans la liste réponse
  document.getElementById("Reponse").appendChild(ulElt);

  //Si le joueur a fini
  if(nbBien(1,combinaison,convertToConbi(color))==4){
    //disparition des éléments de jeux
    document.getElementById("Selection").setAttribute("style","display:none");
    document.getElementById("Valide").setAttribute("style","display:none");
    //ajout d'un message de fin récapitulatif
    var liElt = document.createElement("li");
    liElt.style = "list-style-type : none"
    liElt.innerHTML = "<p>Vous avez gagné !</p><p>Il vous a fallu "+nbTours+" essais pour trouver la combinaison cachée</p>";
    document.getElementById("Reponse").appendChild(liElt);
  }

  //Si l'ordi a gagné
  if(nbTours==nbToursMax){
    //disparition des éléments de jeux
    document.getElementById("Selection").setAttribute("style","display:none");
    document.getElementById("Valide").setAttribute("style","display:none");
    //ajout d'un message de fin récapitulatif
    var liElt = document.createElement("li");
    liElt.style = "list-style-type : none"
    liElt.innerHTML = "<p>Vous avez Perdu !</p><p>Vous n'avez pas réussi à trouver la combinaison cachée en moins de "+nbToursMax+" coups</p><p>Solution :</p>";
    document.getElementById("Reponse").appendChild(liElt);
    //ajout de la ligne solution
    for (var i = 0; i <4 ; i++) {
      liElt = document.createElement("li");
      liElt.setAttribute("class", "w3-cell w3-padding-small");
      liElt.style.width = "20%";
      liElt.innerHTML = "<img src=\"data/"+convertToColor(combinaison)[i]+".png\" style=\"width:30%; margin-left:40%;\">";
      document.getElementById("Reponse").appendChild(liElt);
    }
  }
}

//ajout de l'évènement au bouton Valide
document.getElementById("Valide").addEventListener("click",valider);


////Fonction éxécutée au d'un des boutons de difficultée
function butFacile(){
  document.getElementById("but-facile").setAttribute("class","w3-bar-item w3-button w3-light-grey w3-border-bottom w3-border-green");
  document.getElementById("but-moyen").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-diff").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-epique").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("nbCoups").textContent = "14";
  for (var i = 0; i < 2; i++) {
    document.getElementsByClassName("listImgHide")[i].setAttribute("style","width: 7%;display: none;")
  }
  SelectDifficult = 0;
}
function butMoyen(){
  document.getElementById("but-facile").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-moyen").setAttribute("class","w3-bar-item w3-button w3-light-grey w3-border-bottom w3-border-blue");
  document.getElementById("but-diff").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-epique").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("nbCoups").textContent = "12";
  for (var i = 0; i < 2; i++) {
    document.getElementsByClassName("listImgHide")[i].setAttribute("style","width: 7%;display: none;")
  }
  SelectDifficult = 1;
}
function butDiff(){
  document.getElementById("but-facile").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-moyen").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-diff").setAttribute("class","w3-bar-item w3-button w3-light-grey w3-border-bottom w3-border-orange");
  document.getElementById("but-epique").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("nbCoups").textContent = "10";
  for (var i = 0; i < 2; i++) {
    document.getElementsByClassName("listImgHide")[i].setAttribute("style","width: 7%;display: none;")
  }
  SelectDifficult = 2;
}
function butEpique(){
  document.getElementById("but-facile").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-moyen").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-diff").setAttribute("class","w3-bar-item w3-button w3-light-grey");
  document.getElementById("but-epique").setAttribute("class","w3-bar-item w3-button w3-light-grey w3-border-bottom w3-border-red");
  document.getElementById("nbCoups").textContent = "8";
  for (var i = 0; i < 2; i++) {
    document.getElementsByClassName("listImgHide")[i].setAttribute("style","width: 7%;display: inline;")
  }
  SelectDifficult = 3;
}

document.getElementById("but-facile").addEventListener("click",butFacile);
document.getElementById("but-moyen").addEventListener("click",butMoyen);
document.getElementById("but-diff").addEventListener("click",butDiff);
document.getElementById("but-epique").addEventListener("click",butEpique);

//Fonction éxécutée au clic du bouton nouvelle partie
function nouvPartie(){
  nbTours = 0;

  //mise en place de la difficultée
  setDifficult(SelectDifficult);

  //ajout des couleurs en plus dans les sélecteurs si mode épique
  if(difficult == 3){
    for(var i=1;i<5;i++){
      document.getElementById("color"+i).innerHTML = "<option class=\"Bt_blanc\">Blanc</option><option class=\"Bt_rose\">Rose</option><option class=\"Bt_vert\">Vert</option><option class=\"Bt_rouge\">Rouge</option><option class=\"Bt_orange\">Orange</option><option class=\"Bt_gris\">Gris</option><option class=\"Bt_jaune\">Jaune</option><option class=\"Bt_bleu\">Bleu</option><option class=\"Bt_violet\">Violet</option><option class=\"Bt_marron\">Marron</option>";
      document.getElementById("color"+i).setAttribute("style","background-color: #ffffff");
    }
  }
  else{
    for(var i=1;i<5;i++){
      document.getElementById("color"+i).innerHTML = "<option class=\"Bt_blanc\">Blanc</option><option class=\"Bt_rose\">Rose</option><option class=\"Bt_vert\">Vert</option><option class=\"Bt_rouge\">Rouge</option><option class=\"Bt_orange\">Orange</option><option class=\"Bt_gris\">Gris</option><option class=\"Bt_jaune\">Jaune</option><option class=\"Bt_bleu\">Bleu</option>";
      document.getElementById("color"+i).setAttribute("style","background-color: #ffffff");
    }
  }

  //effacement des listes dans la liste Reponse
  var ulRepNodes = document.getElementById("Reponse");
  while(document.getElementById("Reponse").hasChildNodes()){
    document.getElementById("Reponse").removeChild(document.getElementById("Reponse").childNodes[0]);
  }
  
  //apparition des éléments de jeux et mise à jour du bouton nouvelle partie
  document.getElementById("Selection").setAttribute("style","display:table");
  document.getElementById("Valide").setAttribute("style","display:block");
  document.getElementById("NouvPartie").setAttribute("value","Recommencer");

  //Création d'une combinaison aléatoire
  if(difficult == 3){
    combinaison = ""+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
  }
  else{
    combinaison = ""+Math.floor(Math.random()*8)+Math.floor(Math.random()*8)+Math.floor(Math.random()*8)+Math.floor(Math.random()*8);
  }
  console.log("combinaison : "+combinaison+" = "+convertToColor(combinaison));

}

//ajout de l'évènement au bouton Valide
document.getElementById("NouvPartie").addEventListener("click",nouvPartie);


//Fonction éxécutée au moment une couleur est sélectionnée
function selectColor(){
  //récupération des sélecteurs
  for(var i=1;i<5;i++){
    var couleur;
    if(document.getElementById("color"+i).value == "Blanc"){couleur = "#ffffff"}
    if(document.getElementById("color"+i).value == "Rose"){couleur = "#ff67cc"}
    if(document.getElementById("color"+i).value == "Vert"){couleur = "#67fc80"}
    if(document.getElementById("color"+i).value == "Rouge"){couleur = "#ff0000"}
    if(document.getElementById("color"+i).value == "Orange"){couleur = "#ff9c00"}
    if(document.getElementById("color"+i).value == "Gris"){couleur = "#b9b9b9"}
    if(document.getElementById("color"+i).value == "Jaune"){couleur = "#f7ff41"}
    if(document.getElementById("color"+i).value == "Bleu"){couleur = "#06bcfc"}
    if(document.getElementById("color"+i).value == "Violet"){couleur = "#a30092"}
    if(document.getElementById("color"+i).value == "Marron"){couleur = "#b0773a"}
    document.getElementById("color"+i).setAttribute("style","background-color: "+couleur);
  }
  
}

//ajout de l'évènement aux sélecteurs
document.getElementById("color1").addEventListener("change",selectColor);
document.getElementById("color2").addEventListener("change",selectColor);
document.getElementById("color3").addEventListener("change",selectColor);
document.getElementById("color4").addEventListener("change",selectColor);



//------ Détection du nombre de pions bien et mal placé ------

function nbBien(variableSelect, combi, test){
  var nbBienMal = 0;
  var nbBienBien = 0;

  for(var i = 0;i<test.length;i++){//console.log("i : "+i+" / "+combi.charAt(i)+" / "+test.charAt(i))
      if(combi.charAt(i) == test.charAt(i)){
        nbBienBien++;
        if(i == combi.length-1){combi = combi.substring(0,i);}
        else{combi = combi.substring(0,i)+combi.substring(i+1);}
        if(i == test.length-1){test = test.substring(0,i);}
        else{test = test.substring(0,i)+test.substring(i+1);}
        i--;
        j=combi.length;
      }
  }
  //console.log("combi : "+combi+" / test : "+test);

  for(var i = 0;i<test.length;i++){
    for(var j = 0;j<combi.length;j++){
      if(combi.charAt(j) == test.charAt(i)){
        nbBienMal++;
        if(j == combi.length-1){combi = combi.substring(0,j);}
        else{combi = combi.substring(0,j)+combi.substring(j+1);}
        if(i == test.length-1){test = test.substring(0,i);}
        else{test = test.substring(0,i)+test.substring(i+1);}
        i--;
        j=combi.length;
      }
    }
  }

  if(variableSelect == 0){
    return nbBienMal;
  }
  else{
    return nbBienBien;
  }

}

//------ Conversion du tableau de couleur en combinaison chiffrée ------

function convertToConbi(couleurs){

  var combi = "";

  for (var i = 0; i < couleurs.length; i++) {
    if(couleurs[i] == "Blanc"){combi += "0"}
    if(couleurs[i] == "Rose"){combi += "1"}
    if(couleurs[i] == "Vert"){combi += "2"}
    if(couleurs[i] == "Rouge"){combi += "3"}
    if(couleurs[i] == "Orange"){combi += "4"}
    if(couleurs[i] == "Gris"){combi += "5"}
    if(couleurs[i] == "Jaune"){combi += "6"}
    if(couleurs[i] == "Bleu"){combi += "7"}
    if(couleurs[i] == "Violet"){combi += "8"}
    if(couleurs[i] == "Marron"){combi += "9"}
  }

  return combi;

}

//------ Conversion de la combinaison chiffrée en tableau de couleur ------

function convertToColor(combi){

  var couleurs = new Array;

  for (var i = 0; i < combi.length; i++) {
    if(combi.charAt(i) == '0'){couleurs[i] = "Blanc";}
    if(combi.charAt(i) == '1'){couleurs[i] = "Rose"}
    if(combi.charAt(i) == '2'){couleurs[i] = "Vert"}
    if(combi.charAt(i) == '3'){couleurs[i] = "Rouge"}
    if(combi.charAt(i) == '4'){couleurs[i] = "Orange"}
    if(combi.charAt(i) == '5'){couleurs[i] = "Gris"}
    if(combi.charAt(i) == '6'){couleurs[i] = "Jaune"}
    if(combi.charAt(i) == '7'){couleurs[i] = "Bleu"}
    if(combi.charAt(i) == '8'){couleurs[i] = "Violet"}
    if(combi.charAt(i) == '9'){couleurs[i] = "Marron"}
  }

  return couleurs;

}

//------ Change la difficulté ------
function setDifficult(diff){
  switch(diff){
    case 0 :
      difficult = 0;
      nbToursMax = 14;
      break;

    case 1 :
      difficult = 1;
      nbToursMax = 12;
      break;

    case 2 :
      difficult = 2;
      nbToursMax = 10;
      break;

    case 3 :
      difficult = 3;
      nbToursMax = 8;
      break;
  }
}

