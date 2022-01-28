document.write("<h2>je suis la !</h2>") ;

function division(terme1,terme2)
{
    document.write(`<br><p>${terme1} / ${terme2} = ${terme1/terme2}<\p>`) ;
    return terme1 / terme2 ;
}

document.write(`<br><p>Resultat : ${division(50, 10)}</p>`) ;


function calcule(terme1,terme2)
{
    document.write(`<br><p>${terme1} x ${terme2} / 100 = ${terme1*terme2/100}<\p>`)
    return terme1 * terme2 / 100 ;
}

document.write(`<br><p>Resultat : ${calcule(25, 50)}</p>`) ;

let text = "Bonjour a tous, je m'appelle "

function changer()
{
    let prenom1 = "stef !" ;
    let prenom2 = "stephane !!" ;

    text += prenom1 ;

    document.write(`<br><p>phrase initiale : ${text}</p>`) ;

    text = text.replace(prenom1,prenom2) ;
    
    document.write(`<p>phrase modifiée : ${text}</p>`);
}

changer() ;