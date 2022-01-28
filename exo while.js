let siegeLibre = 20 ;
let passagersAEmbarquer = 18 ;
let passagersEmbarquer = 0 ;

while(passagersAEmbarquer>0 && siegeLibre>0)
{
    passagersAEmbarquer--;
    passagersEmbarquer++;
    siegeLibre--;
}

console.log(`il reste ${passagersAEmbarquer} personne(s) à embarquer, il y a ${passagersEmbarquer} personne(s) embarder, il reste ${siegeLibre} siege(s)`) ;

document.write(`<p>il reste ${passagersAEmbarquer} personne(s) à embarquer, il y a ${passagersEmbarquer} personne(s) embarder, il reste ${siegeLibre} siege(s)</p>`) ;