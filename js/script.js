const API_URl = "https://rickandmortyapi.com/api/"

function getPosts(url , endpoint) {
  return fetch(`${url}${endpoint}`).then((resp) => resp.json())
}
getPosts(API_URl , "character").then((data) => {
  const results = data.results

  results.forEach(element => {
    const card = document.createElement("div")
    card.className = "card"
    document.querySelector(".container").appendChild(card)

    const nameLink = document.createElement("a")
    nameLink.href = element.url
    const name = document.createElement("h3")
    name.textContent = element.name
    nameLink.append(name)

    const dot = element.status === "Alive" ? "🟢" : element.status === "Dead" ? "🔴" : "🟣"
    const statusAndSpecies = document.createElement("div")
    statusAndSpecies.textContent = `${dot} ${element.status} - ${element.species}`

    const lastGrp = document.createElement("div")
    const lastKnown = document.createElement("span")
    lastKnown.textContent = "Last known location:"
    const lastLink = document.createElement("a")
    lastLink.textContent = element.location.name
    lastLink.href = element.location.url
    lastGrp.append(lastKnown, document.createElement("br"), lastLink)

    const firstSeenGrp = document.createElement("div")
    const firstSeen = document.createElement("span")
    firstSeen.textContent = "First seen in:"
    const firstSeenLink = document.createElement("a")
    firstSeenLink.href = element.episode[0]
    firstSeenGrp.append(firstSeen, document.createElement("br"), firstSeenLink)

    fetch(element.episode[0])
      .then(resp => resp.json())
      .then(epData => {
        firstSeenLink.textContent = epData.name   
      })

    const image = document.createElement("img")
    image.src = element.image

    card.append(image, name, statusAndSpecies, lastGrp, firstSeenGrp)
  })
})