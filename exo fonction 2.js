/* fonction pour changer un prenom en un autre prenom */
function changerPrenom (prenom1,prenom2)
{

    let prenomUn = prenom1 ;
    let prenomDeux = prenom2 ;

    let phrase = `Je m'appelle ${prenomUn}` ;

    document.write(`<br><p>la phrase initiale : ${phrase} !</p>`) ;

    phrase = phrase.replace(prenomUn,prenomDeux) ;

    document.write(`<p>la phrase modifiée : ${phrase} !!</p>`) ;

}

changerPrenom("stef","stephane") ;

/* fonction pour changer un prenom en un autre prenom avec alerte */
function changerPrenomRetour (prenom1,prenom2)
{

    let prenomUn = prenom1 ;
    let prenomDeux = prenom2 ;

    let phrase = `Je m'appelle ${prenomUn}` ;

    document.write(`<br><p>la phrase initiale : ${phrase} !</p>`) ;
    
    //alert(phrase) ;

    return phrase.replace(prenomUn,prenomDeux) ;

}

/* phrase qui apparait dans le dome HTML */
document.write(`<p>la phrase modifiée : ${changerPrenomRetour("Romane","Angelique")} !!</p>`) ;

/* change le prenom en nom dans la phrase */
function changerPrenomNom (phraseEnvoyer,prenom,nom)
{

    let phraseATraiter = phraseEnvoyer ;
    
    console.log(phraseATraiter.replace(prenom,nom)) ;

    return phraseATraiter.replace(prenom,nom) ;

}

/* change la phrase avec une fonction qui change le prenom en nom */
function changerphrase()
{

    let finphrase1 = "car j'étais content de voir salim !" ;
    let finphrase2 = "car je n'avais pas le choix de voir salim !!" ;

    let phrase = "Ajourd'hui je me suis lévé à 7h00";

    phrase = phrase + ", " + finphrase1 ;

    document.write(`<br><p>${phrase}</p>`) ;

    /* remplace le nom dans la variable phrase */
    document.write(`<p>${phrase = phrase.replace(finphrase1,finphrase2)}</p>`) ;

    console.log(phrase) ;

    document.write(`<p>${changerPrenomNom(phrase,"salim","Kobzili")}!</p>`) ;

    console.log(phrase) ;

    document.write(`<p>Attention la variable phrase n'a pas été modifié : ${phrase}</p>`) ;

    phrase = changerPrenomNom(phrase,"salim","Kobzili") ;

    document.write(`<p>Mais ici la variable phrase a été modifié : ${phrase}</p>`) ;

}

changerphrase() ;