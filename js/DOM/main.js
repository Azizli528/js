const header = document.createElement("header")
document.body.prepend(header)

const conatiner = document.createElement("div")
conatiner.className = "container"

header.append(conatiner)

const nav = document.createElement("nav")


const logo = document.createElement("a")
logo.textContent = "whitespace"
logo.className = "logo"


const logoImg = document.createElement("img")
logoImg.src = "https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"

logo.prepend(logoImg)

conatiner.append(nav)


const links = [{text:"products ✔",link:"#products"},{text:"solutions ✔",link:"#solutions"},
    {text:"resources ✔",link:"#resources"},
    {text:"pricing ✔",link:"#pricing"}
    ]

const linksGrp = document.createElement("div")
linksGrp.className = "linksGrp"

links.forEach(element => {
    const a = document.createElement("a")
    a.textContent = element.text
    a.href = element.link
    linksGrp.appendChild(a)
});

const btnsGrp = document.createElement("div")
btnsGrp.className = "btnsGrp"

const btns = [
    {text:"login",link:"#login",class:"login"},
    {text:"try whitespace free ➡",link:"#try" , class:"try"}
]

btns.forEach(element => {
    const a = document.createElement("a")
    a.textContent = element.text
    a.href = element.link
    a.className = element.class
    btnsGrp.append(a)

});

nav.append(logo,linksGrp,btnsGrp)