/* l'alerte doit etre utiliser sans autre code ou au début */
//let text = "attention danger" ;
//alert(text) ;

let a = 20 ;

function add ()
{
    var b = 10 ;
    let c = 20 ;

    console.log(a) ;
    return b+c ;
}

document.write(`fonction add : ${add()}`) ;

/* les variables ne sont pas vu car elles sont en dehors de la fonction */
//console.log(b) ;
//console.log(c) ;

/* les variables ne sont pas vu car elles sont en dehors de la fonction */
//document.write(`<br>variable b : ${b}`) ;
//document.write(`<br>variable c : ${c}`) ;


function calcule (terme1,terme2)
{
    let resultat = terme1 / terme2 * 100 ;
    
    document.write(`<br><p>opération : ${terme1} / ${terme2} = ${resultat}</p>`)
    
    console.log(terme1) ;
    console.log(terme2) ;
    console.log(resultat) ;

    if(resultat>8500)
    {
        alert("vous avez gagné !") ; 
    }
    else
    {
        alert("vous avez perdu !!") ;
    }
}

calcule(788899,1455) ;

calcule(25,50) ;


let premier = 500 ;
let second = 5000 ;

function operation(terme1,terme2)
{
    return terme1 / terme2 * 100 ;
}

if( ( text = operation(premier,second) ) > 8500)
{
    alert(`vous avez gagné ${text} !`) ;
    document.write(`<p>la variable test n'est pas déclaré : ${text}</p>`) ;
    console.log(text) ;
}
else
{
    alert(`vous avez perdu ${text} !!`) ;
    document.write(`<p>la variable test n'est pas déclaré : ${text}</p>`) ;
    console.log(text) ;
}