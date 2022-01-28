class user{
    constructor(nom,prenom,age,genre,inscrit)
    {
        this.nom = nom ;
        this.prenom = prenom ;
        this.age = age ;
        this.genre = genre ;
        this.inscrit = inscrit ;
    }
}

let user1 = new user("Dufour","Stephane",39,"M", true) ;
let user2 = new user("Kobzyli","Salim",36,"M",true) ;
let user3 = new user("Wolf","Romane",26,"F",true) ;
let user4 = new user("Rollin","Marie",40,"F",true) ;
let user5 = new user("Complot","Eric",50,"M",true) ;
let user6 = new user("Pro","Guillaume",25,"M",true) ;
let user7 = new user("Venerot","Antoine",25,"M",true) ;
let user8 = new user("Doe","Jane","Iconnu","I",false) ;
let user9 = new user("enfant","enfant",-1,"I",false) ;

let users = [user1,user2,user3,user4,user5,user6,user7,user8,user9];

console.log(users);

/* Boucle émit dans la console */
for( let i=0 ; i<users.length ; i++ )
{
    users[i].inscrit = false ;
    console.log(`l'utilisateur ${users[i].nom} ${users[i].prenom} est incrit : ${users[i].inscrit}`) ;
}

console.log(users);

/* Boucle émit dans la console avec condition */
for( let i=0 ; i<users.length ; i++ )
{
    switch (users[i].genre)
    {
        case "F" :
            console.log(`l'utiliatrice ${users[i].nom} ${users[i].prenom} est une femme`);
        break ;

        case "M" :
            console.log(`l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme`);
        break ;

        default :
        console.log(`l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre`);
    }
}

console.log(users);

/* Boucle émit sur la fenetre avec condiction */
for (let i = 0; i < users.length; i++)
{
    if (users[i].age > 0)
    {
        switch (users[i].genre)
        {
            case "F":
                document.write(`<p>l'utiliatrice ${users[i].nom} ${users[i].prenom} est une femme<br>`);
                document.write(`l'utiliatrice est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre} <br></p>`);
            break;

            case "M":
                document.write(`<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme<br>`);
                document.write(`l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre} <br></p>`);
            break;

            default:
                document.write(`<p>l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre<br>`);
                document.write(`l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre} <br></p>`);
        }
    }

    else {
        switch (users[i].genre) {
            case "F":
                document.write(`<p>Attention : l'utiliatrice ${users[i].nom} ${users[i].prenom} est une femme<br>`);
                document.write(`l'utiliatrice est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre} <br></p>`);
            break;

            case "M":
                document.write(`<p>Attention : l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme<br>`);
                document.write(`l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre} <br></p>`);
            break;

            default:
                document.write(`<p>Attention : l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre<br>`);
                document.write(`l'utiliateur est ${users[i].nom} ${users[i].prenom} a un age ${users[i].age}(e) et a un genre ${users[i].genre}nconnu(e) <br></p>`);
        }
    }
    let compteur = i + 1 ;
    document.write(`<footer>le programme a fait ${compteur} tours dans la boucle</footer>`) ;

}

/* Fonction du bouton avec boucle et condition et le liens css */
function testAvecLinkCSS()
{
   let text = `<link rel="stylesheet" href="style_exo_complexe.css">` ;
   for (let i = 0; i < users.length; i++)
   {
       if (users[i].age > 0)
       {
           switch (users[i].genre)
           {
               case "F":
                  text += `<p>l'utiliatrice est ${users[i].nom} ${users[i].prenom} est une femme<br>` ;
                   text += `l'utiliatrice est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>` ;
               break;
   
               case "M":
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme<br>` ;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>` ;
               break;
   
               default:
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre<br>`;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>` ;
           }
       }
   
       else {
           switch (users[i].genre) {
               case "F":
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est une femme<br>`;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>`;
               break;
   
               case "M":
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme<br>`;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>`;
               break;
   
               default:
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre<br>` ;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a un age ${users[i].age}(e) et a un genre ${users[i].genre}nconnu(e)<br></p>` ;
           }
       }
   }
   return document.write(`<h2>ah ah je t'ai eu tu as tout perdu !!</h2> <h1>Mais non regarde tout est la !!</h1><h2>Et en plus on a le liens avec le CSS !!</h2> ${text}`) ;
}

/* Fonction avec boucle et condition mais sans lien avec le CSS */
function testSansLinkCSS()
{
   let text = `` ;
   for (let i = 0; i < users.length; i++)
   {
       if (users[i].age > 0)
       {
           switch (users[i].genre)
           {
               case "F":
                  text += `<p>l'utiliatrice est ${users[i].nom} ${users[i].prenom} est une femme<br>` ;
                   text += `l'utiliatrice est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>` ;
               break;
   
               case "M":
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme<br>` ;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>` ;
               break;
   
               default:
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre<br>`;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>` ;
           }
       }
   
       else {
           switch (users[i].genre) {
               case "F":
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est une femme<br>`;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>`;
               break;
   
               case "M":
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} est un homme<br>`;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a ${users[i].age} ans ${users[i].genre}<br></p>`;
               break;
   
               default:
                   text += `<p>l'utilisateur ${users[i].nom} ${users[i].prenom} n'a pas de genre<br>` ;
                   text += `l'utiliateur est ${users[i].nom} ${users[i].prenom} a un age ${users[i].age}(e) et a un genre ${users[i].genre}nconnu(e)<br></p>` ;
           }
       }
   }
   return document.write(`<h2>ah ah je t'ai eu tu as tout perdu !!</h2> <h1>Mais non regarde tout est la !!</h1><h2>On a perdu le liens avec le CSS</h2> ${text}`) ;
}