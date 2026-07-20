var characterIds = [117, 164, 203, 281, 285, 491];


var xhr = new XMLHttpRequest();
var url = "https://rickandmortyapi.com/api/character/" + characterIds.join(",");

xhr.open("GET", url, true);

xhr.addEventListener("readystatechange", function () {
 
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var results = Array.isArray(data) ? data : [data];
      renderCharacters(results);
    } else {
      console.error("Xeta bas verdi: " + xhr.status);
    }
  }
});

xhr.onerror = function () {
  console.error("Sebeke xetasi bas verdi");
};

xhr.send();

function renderCharacters(characters) {
  var container = document.getElementById("container");
  container.innerHTML = "";

  characters.forEach(function (ch) {
    var dotClass = "unknown";
    if (ch.status === "Alive") dotClass = "alive";
    else if (ch.status === "Dead") dotClass = "dead";

    var card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
      '<img src="' + ch.image + '" alt="' + ch.name + '">' +
      '<div class="card-body">' +
        '<h2>' + ch.name + '</h2>' +
        '<div class="status-line">' +
          '<span class="dot ' + dotClass + '"></span>' +
          '<span>' + ch.status + ' - ' + ch.species + '</span>' +
        '</div>' +
        '<div class="info-label">Last known location:</div>' +
        '<div class="info-value">' + ch.location.name + '</div>' +
        '<div class="info-label">First seen in episode ID:</div>' +
        '<div class="info-value">' + ch.episode[0].split("/").pop() + '</div>' +
      '</div>';

    container.appendChild(card);
  });
}