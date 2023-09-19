let formulaire = document.getElementById("form")
formulaire.setAttribute("style", "background-color:yellow")

let titre = document.getElementsByTagName("h1")[0]
titre.innerHTML = "Formulaire <em>  Javascript</em> "

let bouton = document.createElement("input")
bouton.setAttribute("type", "reset")
formulaire.appendChild(bouton)

// Fonction pour copier le contenu du formulaire au bas de la page
function copier()
{
    let nom = document.getElementById("nom").value
    let p = document.createElement("p") // Le p crée une balise parag
    p.innerText = nom
    formulaire.appendChild(p)

    let prenom = document.getElementById("prenom").value
    let pr = document.createElement("p")
    pr.innerText = prenom
    formulaire.appendChild(pr)

    let email = document.getElementById("Email").value
    let ema = document.createElement("p")
    ema.innerText = email
    formulaire.appendChild(ema)

    let telephone = document.getElementById("Telephone").value
    let tele = document.createElement("p")
    tele.innerText =  telephone
    formulaire.appendChild(tele)

}