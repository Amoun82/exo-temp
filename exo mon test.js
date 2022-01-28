class user {
    constructor(nom,prenom,age,genre,grade)
    {
        this.nom = nom ;
        this.prenom = prenom ;
        this.age = age ;
        this.genre = genre ;
        this.grade = grade ;
    }
}

let user1 = new user("Dufour","Stephane",39,"M","normale") ;
let user2 = new user("Complot","Eric",55,"M","normale") ;
let user3 = new user("Wolf","Romane",25,"M","normale") ;
let user4 = new user("Bouchard","Angelique",27,"M","normale") ;
let user5 = new user("Bokzili","Salim",35,"M","premuim") ;
let user6 = new user("Altaya","Juliette",20,"M","megapremuim") ;
let user7 = new user("Vernerot","Antoine",23,"M","premuim") ;


let users = [user1,user2,user3,user4,user5,user6,user7]

for( let i = 0 ; i<users.length ; i++ )
{
    let compteur = i + 1 ;
    document.write(`<p>L'utilsateur ${users[i].nom} ${users[i].prenom} agé de  ${users[i].age} et de sexe ${users[i].genre} posséde un compte ${users[i].grade}</p>`) ;
    switch(compteur)
    {
        case 1 :
            document.write(`<footer>le programme a fait son premier tour</footer>`) ;
        break ;

        case 2 :
            document.write(`<footer>le programme a fait son second tour</footer>`) ;
        break ;

        case 3 :
            document.write(`<footer>le programme a fait son troisieme tour</footer>`) ;
        break ;

        case 4 :
            document.write(`<footer>le programme a fait son quatrieme tour</footer>`) ;
        break ;

        case 5 :
            document.write(`<footer>le programme a fait son cinquieme tour</footer>`) ;
        break ;

        case 6 :
            document.write(`<footer>le programme a fait son sixieme tour</footer>`) ;
        break ;

        default:
            document.write(`<footer>le programme a fait son dernier tour</footer>`) ;
    }
}