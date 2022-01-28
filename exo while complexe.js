class utilisateur{
    constructor(nom,prenom,age,sexe,inscrit){
        this.nom = nom ;
        this.prenom = prenom ;
        this.age = age ;
        this.sexe = sexe ;
        this.inscrit = inscrit ;
    }
}

let user1 = new utilisateur("dufour","stephane",39,"masculin",true) ;
let user2 = new utilisateur("bouchard","angelique",27,"feminin",true) ;
let user3 = new utilisateur("rouge","emilie",25,"feminin",false) ;
let user4 = new utilisateur("lourd","roger",55,"masculin",true) ;
let user5 = new utilisateur("martin","sandrine",48,"feminin",false) ;
let user6 = new utilisateur("bouchard","angeligque",27,"feminin",true)
let user7 = new utilisateur("Doe","jane","","feminin","")

let users = [user1,user2,user3,user4,user5,user6,user7] ;

const nombrePlaces = 5 ;
let nombreRestante = nombrePlaces ;

document.write(users.length) ;
let i = 0 ;

while( nombreRestante > 0 && users.length >= nombrePlaces)
{
    
    if( users[i].sexe === "masculin")
    {
        document.write(`<p>${users[i].nom} ${users[i].prenom} est arrivé dans salle.<br>il est âgé de ${users[i].age} ans</p>`) ;
        nombreRestante -- ;
        i++;
    }
    else
    {
        document.write(`<p>${users[i].nom} ${users[i].prenom} est arrivée dans salle.<br>elle est âgée de ${users[i].age} ans</p>`) ;
        nombreRestante -- ;
        i++ ;
    }
    
    document.write(`<p>le progamme a fait ${i+1} tours</p>`) ;
   
    

    document.write(`il reste ${nombreRestante} places sur ${nombrePlaces}`) ;  
}
