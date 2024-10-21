 function changeText(id) {
    id.innerHTML = "retard";
  }

function newElement() {
    var li = document.createElement("li");
    //^makes creation of new lists possible
    var inputValue = document.getElementById("myInput").value;
    //t creates new variable in list
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    //if nothing is entered, nothing happens.
    if (inputValue === "") {
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    //IF something is entered, it will add a new NEW element to id="myUL",
    //- making the child a "li" (list). It'll determine the name of "li" with "myInput"
}
// vv on-click change background and add text overlap
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// Added input with ENTER vv
var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {

    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});