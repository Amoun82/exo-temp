let a = 10 ;

console.log(a) ;
document.write("variable a : " + a + "<br>") ;

let b = "bonjour a tous !" ;

console.log(b) ;
document.write("variable b : " + b + "<br>") ;

let c = true ;
let d = false ;

console.log(c) ;
document.write("variable c : "+ c + "<br>") ;

console.log(d) ;
document.write("variable d : "+ d + "<br>") ;

let u = undefined ;

console.log(u) ;
document.write("variable u : "+ u + "<br>") ;

let n = null ;

console.log(n) ;
document.write("variable n : "+ n + "<br><br>") ;

// tester objet dans objet et faire des boucles pour les tester et voir le comportement
class identite
{
    constructor(nom,prenom,age,connaissance)
    {
        this.nom = nom ;
        this.prenom = prenom ;
        this.age = age ;
        this.connaissance = connaissance ;
    }
}

class etreVivant
{
    constructor(genre,identite)
    {
        this.genre = genre ;
        this.identite = identite ;
    }
}

let vivant1 = new etreVivant ("M")
vivant1.nom = "dufour" ;
vivant1.prenom = "stephane" ;
vivant1.age = 39 ;
vivant1.connaissance = ["HTML","CSS","JS"] ;

let vivant2 = new etreVivant ("F")
vivant2.nom = "bouchard" ;
vivant2.prenom = "angelique" ;
vivant2.age = 27 ;
vivant2.connaissance = ["sang","laboratoire","jeux"] ;

let vivant3 = new etreVivant ("F")
vivant3.nom = "Wolf" ;
vivant3.prenom = "Romane" ;
vivant3.age = 25 ;
vivant3.connaissance = ["HTML","CSS","JS"] ;

let vivant4 = new etreVivant ("I")
vivant4.nom = "does" ;
vivant4.prenom = "janes" ;
vivant4.age = "I" ;
vivant4.connaissance = ["Iconnu"] ;

let vivant = [vivant1,vivant2,vivant3,vivant4] ;

console.log(vivant1) ;
console.log(vivant2) ;
console.log(vivant3) ;

console.log(vivant) ;

/* boucle for pour le tableau variable vivant */
for( let i = 0 ; i < vivant.length ; i++ )
{

    /* condition si c'est un homme */
    if(vivant[i].genre === "M")
    {
        let text = "" ;

        /* boucle pour le tableau de la connaissance dans l'objet */
        for( let i1 = 0 ; i1 < vivant[i].connaissance.length ; i1 ++ )
        {
           text += " " + vivant[i].connaissance[i1] ;
           document.write(`<footer>le programme a faire ${i1+1} tour dans la boucle for pour le tableau des connaissances</footer>`) ;
        }

        document.write(`<p>l'être vivant est un Homme, il s'appelle ${vivant[i].nom} ${vivant[i].prenom}<br>il a ${vivant[i].age} ans<br>il connait : ${text}.</p>`) ;

    }

    /* condition si c'est une femme */
    else if (vivant[i].genre === "F")
    {
        let text = "" ;

        /* boucle pour le tableau de la connaissance dans l'objet */
        for( let i1 = 0 ; i1 < vivant[i].connaissance.length ; i1 ++ )
        {
           text += " " + vivant[i].connaissance[i1] ;
           document.write(`<footer>le programme a faire ${i1+1} tour dans la boucle for pour le tableau des connaissances</footer>`) ;
        }
        
        document.write(`<p>l'être vivant est une ${vivant[i].genre}emme, elle s'appelle ${vivant[i].nom} ${vivant[i].prenom}<br>elle a ${vivant[i].age} ans<br>elle connait : ${text}.</p>`) ;

    } 
    else 
    {

        let text = "" ;

        /* boucle pour le tableau de la connaissance dans l'objet */
        for( let i1 = 0 ; i1 < vivant[i].connaissance.length ; i1 ++ )
        {
           text += " " + vivant[i].connaissance[i1] ;
           document.write(`<footer>le programme a faire ${i1+1} tour dans la boucle for pour le tableau des connaissances</footer>`) ;
        }
              
        document.write(`<p>l'être vivant est ${vivant[i].genre}connu(e), il ou elle s'appelle ${vivant[i].nom} ${vivant[i].prenom}<br>age : ${vivant[i].age}nconnu(e)<br>elle connait : ${text}(e).</p>`) ;
       
    }

}