let Haut = document.getElementById("Haut")
let Bas = document.getElementById("Bas")
let hB1 = document.getElementById("b1")
let hB2 = document.getElementById("b2")
let hB3 = document.getElementById("b3")
let hC2 = document.getElementById("C2")
let hC3 = document.getElementById("C3")
let para1 = document.getElementById("para1")
let para2 = document.getElementById("para2")
let para3 = document.getElementById("para3")
let para4 = document.getElementById("para4")
let contact = document.getElementById("contact1")
let titre = document.getElementById("Titre01")
let tableau = document.getElementById("tableau2")
let tableau1 = document.getElementById("tableau3")
let tableau2 = document.getElementById("tableau4")
let tableau3 = document.getElementById("tableau5")
let tableau4 = document.getElementById("tableau6")
let BIMG = document.getElementById('BoutonIMG')
let Blogo = document.getElementById("Burgerlogo")
let BGMenu = document.getElementById("BGMenu")
let Fond = document.getElementById("hpage")
let fond2 = 0;

function WhiteMode() {
    Haut.classList.toggle("WhiteHead");
    Bas.classList.toggle("WhiteHead");
    hB1.classList.toggle("WhiteButton");
    hB2.classList.toggle("WhiteButton");
    hB3.classList.toggle("WhiteButton");
    hC2.classList.toggle('White2');
    hC3.classList.toggle('White2');
    para1.classList.toggle("Black1");
    para2.classList.toggle("Black1");
    para3.classList.toggle("Black1");
    para4.classList.toggle("Black1");
    contact.classList.toggle("Black1");
    titre.classList.toggle("white");
    tableau.classList.toggle("White2");
    tableau1.classList.toggle("White2");
    tableau2.classList.toggle("White2");
    tableau3.classList.toggle("White2");
    tableau4.classList.toggle("White2");
    tableau.classList.toggle("BlackT");
    tableau1.classList.toggle("BlackT");
    tableau2.classList.toggle("BlackT");
    tableau3.classList.toggle("BlackT");
    tableau4.classList.toggle("BlackT");
    BGMenu.classList.toggle("WhiteHead");
    Fond.classList.toggle("FondClair");


    if (BIMG.getAttribute("src").endsWith("Clair.png")) {
        BIMG.setAttribute("src", "Sombre.png");
    } else {
        BIMG.setAttribute("src", "Clair.png");
    }


        if (Blogo.getAttribute("src").endsWith("Menu Blanc.png")) {
        Blogo.setAttribute("src", "Menu Noir.png");
    } else {
        Blogo.setAttribute("src", "Menu Blanc.png");
    }
}

Blogo.addEventListener("click", function() {
    BGMenu.classList.toggle("Transition")
})
Blogo.addEventListener("click", function() {
    this.classList.toggle("rotation")
})
