const container = document.querySelector(".container");

const BASE_URL = "https://rickandmortyapi.com/api";
const enpoint = "/character";

function getCharacter() {
    fetch(`${BASE_URL}${enpoint}`)
        .then((resp) => resp.json())
        .then((data) => {
            const results = data.results;
            results.forEach(element => {
                const card = document.createElement("article");
                card.classList.add("card");

                const imgBlock = document.createElement("div");
                imgBlock.classList.add("card-image");
                const image = document.createElement("img");
                image.src = element.image;
                image.alt = element.name;
                imgBlock.appendChild(image);

                const textBlock = document.createElement("div");
                textBlock.classList.add("card-content");

                const firstSession = document.createElement("div");
                firstSession.classList.add("section");

                const secondSession = document.createElement("div");
                secondSession.classList.add("section");

                const thirdSession = document.createElement("div");
                thirdSession.classList.add("section");

                // firstSession
                const name = document.createElement("a");
                name.classList.add("character-name");
                name.textContent = element.name;
                name.href = element.url;
                name.target = "_blank";

                const statusAndSpecies = document.createElement("div");
                statusAndSpecies.classList.add("status-container");

                const statusDot = document.createElement("span");
                statusDot.classList.add("status-dot", element.status.toLowerCase());

                const statusText = document.createElement("span");
                statusText.classList.add("status-text");
                statusText.textContent = `${element.status} - ${element.species}`;

                statusAndSpecies.append(statusDot, statusText);

                // secondSession
                const lastKnown = document.createElement("span");
                lastKnown.classList.add("label");
                lastKnown.textContent = "Last known location:";

                const lastLink = document.createElement("a");
                lastLink.classList.add("value-link");
                lastLink.textContent = element.location.name;
                lastLink.href = element.location.url;
                lastLink.target = "_blank";

                // thirdSession
                const firstSeen = document.createElement("span");
                firstSeen.classList.add("label");
                firstSeen.textContent = "First seen in:";

                const firstLink = document.createElement("a");
                firstLink.classList.add("value-link");
                firstLink.textContent = element.origin.name;
                firstLink.href = element.origin.url;
                firstLink.target = "_blank";

                firstSession.append(name, statusAndSpecies);
                secondSession.append(lastKnown, lastLink);
                thirdSession.append(firstSeen, firstLink);

                textBlock.append(firstSession, secondSession, thirdSession);
                card.append(imgBlock, textBlock);
                container.appendChild(card);
            });
        });
}

getCharacter();