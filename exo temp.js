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
let user5 = new utilisateur("martin","sandrine","feminin",48,false)

function afficher()
{
    console.log(user1, user2, user3, user4, user5);
};

afficher();

let t_User = [user1,user2,user3,user4,user5];

console.log(t_User);

console.log(t_User[2]);

console.log(t_User[1].age) ;

for( let i=0 ; i<t_User.length ; i++ )
{
    if (t_User[i].sexe==="masculin")
    {
        if(t_User[i].age<30)
        {
            document.write(`<p>l'utilisateur ${t_User[i].nom} ${t_User[i].prenom} a ${t_User[i].age} donc il a moins de 30 ans</p>`) ;
        }
        else
        {
            document.write(`<p>l'utilisateur ${t_User[i].nom} ${t_User[i].prenom} a ${t_User[i].age} donc il a plus de 30 ans</p>`) ;
        }
    }
    else
    {
        if(t_User[i].age<30)
        {
            document.write(`<p>l'utilisatrice ${t_User[i].nom} ${t_User[i].prenom} a ${t_User[i].age} donc elle a moins de 30 ans</p>`) ;
        }
        else
        {
            document.write(`<p>l'utilisatrice ${t_User[i].nom} ${t_User[i].prenom} a ${t_User[i].age} donc elle a plus de 30 ans</p>`) ;
        }
    }
}