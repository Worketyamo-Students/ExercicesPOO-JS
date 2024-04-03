// 1. Créer des objets avec des fonctions constructeurs

function ConstVoiture(marque,modele,annee){
    this.marque = marque
    this.modele = modele
    this.annee = annee
    this.caracteristic = ()=>{
        return this.marque + " " + this.modele + " " + this.annee
    }
}
//Creation des instances des voitures :
let voiture1 = new ConstVoiture("Toyota",1234,2005)
let voiture2 = new ConstVoiture("Mercedes",789,2001)
let voiture3 = new ConstVoiture("ferari",1234,2010)

//Affichage des objets
console.log(voiture1.caracteristic())
console.log(voiture2.caracteristic())
console.log(voiture3.caracteristic())

//2. Créer des objets avec des fonctions Factory
function CreerPersonne(nom,age,ville){
    return{
        nom : nom,
        age: age,
        ville: ville,
        caracteristic2 : ()=>{
            return nom + " " + age + " " + ville;
        }
    }
}
//Creation des instances des voitures :
let voiturea = CreerPersonne("Toyota",1234,2005)
let voitureb = CreerPersonne("Mercedes",789,2001)
let voiturec = CreerPersonne("ferari",1234,2010)

//Affichage des objets
console.log(voiturea.caracteristic2())
console.log(voitureb.caracteristic2())
console.log(voiturec.caracteristic2())

//3.ENumeration des membres d'un objet :
console.log(Object.keys(voiturea))

// Creation d'un objet etudiant
let etudiant = {
    nom : "Kouam",
    classe : 'L3',
    sePresenter : ()=>{
        return `Je m'appelle ${nom} et je fais ${classe}`
    }
}
// Utilisation d'une boucle for-in parcourant les prop et methodes de l'objet
for (let key in etudiant) {
    console.log(key,etudiant[key])
}
// 4. Vérifier l'existence d'une propriété
const produit = {
    id : '1',
    nom: 'iphone',
    prix: '200k'
}
let existence = (produit,prop)=>{
    let flag = false
    for(keys in produit){
        if (keys===prop){
            console.log("IL existe bien cette propriete/methode")
            flag = true
        } else
        console.log("IL n'y est pas")
    }
}