let ajouts = document.getElementById("ajouts")

let bouton = document.getElementById("BoutonSubmit")
bouton.setAttribute("type", "reset")


// Fonction pour copier le contenu du formulaire au bas de la page
function copier()
{
    let nom = document.getElementById("nom").value
    let p = document.createElement("p") // Le p crée une balise parag
    p.innerText = nom
    ajouts.appendChild(p)

    let prenom = document.getElementById("prenom").value
    let pr = document.createElement("p")
    pr.innerText = prenom
    ajouts.appendChild(pr)

    let email = document.getElementById("Email").value
    let ema = document.createElement("p")
    ema.innerText = email
    ajouts.appendChild(ema)

    let telephone = document.getElementById("Telephone").value
    let tele = document.createElement("p")
    tele.innerText =  telephone
    ajouts.appendChild(tele)

}
