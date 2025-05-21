/*
    Wie benutze ich die DOM?

    Im Code:
    Haben wir bestimmte Methoden, was uns erlaubt an die jeweiligen Elemente von HTML/CSS zuzugreifen

    1. querySelectors
    Die querySleectors arbeiten mit der Css Selector Syntax
    document.querySelector("css-selector") => Selektor auswählen und diesen dementsprechen verändern
    document.querySelectorAll("css-selector") => Gibt uns ein Array von einzelnen Elementen zurück, also alle die gefunden wurden
*/

let firstLi = document.querySelector("li") // Gibt mir das erste li-Element zurück
let mainHeading = document.querySelector("#main-heading"); // Gibt mir das Element mit der id "main-heading" zurück
let list = document.querySelector(".list"); // Gibt mir das Element mit der klasse "list" zurück

firstLi.style.color = "red";

list.style.backgroundColor = "lightgray";

// textContent => Ändert den Text
firstLi.textContent ="Das ist der Neue Text";

// innerHTML => Ändert den Inhalt + möglich CSS

mainHeading.innerHTML = "<h4 style='color: blue;'>Neue Überschrift</h4>";

mainHeading.innerHTML += '<span>(Neu)</span>';

// appendChild()
let newParagraph = document.createElement("p");
newParagraph.textContent = "Das ist ein Paragraph";
newParagraph.style.color = "blueviolet";

list.appendChild(newParagraph);

// getElement:
child = document.getElementById("child").innerHTML += "TestText";
sibling = document.getElementsByClassName("sibling")[0].style.color = "blue";
sibling2 = document.getElementsByClassName("sibling")[1].style.color = "crimson";
sb = document.getElementsByClassName("sibling");

liSechs = document.getElementsByTagName("li")[5].style.color = "firebrick";

for(let i = 0; i < sb.length; i++) {
    sb[i].style.backgroundColor = "aqua";
}

// removeChild() 
// Entfernt das Erste ELement von der Liste
list.removeChild(firstLi);

list.classList.remove("test");
list.classList.add("neueTest");

// createELement
let newItem = document.createElement("li");
newItem.textContent = "Neues Item";

list.appendChild(newItem);

// Eventlistener

// Funktion die die Schrift ändert (text)
function changeHeader() {
    var header = document.getElementById("header");
    header.textContent = "Hallo, Welt";
}

// Eventhandler hinzufügen
var button = document.getElementById("changeTextButton");
button.addEventListener("click", changeHeader);

