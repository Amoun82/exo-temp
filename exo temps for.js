let users = ["Salim","Eric","Romane","Marie","Guillaume","Stephane","Antoine"] ;

for(let i = 0 ; i < users.length ; i++ )
{
    switch (users[i])
    {
        case "Salim" :
            console.log(`${users[i]} est un bon formateur`) ;
        break ;

        case "Stephane" :
            console.log(`${users[i]} a réussis a parcourir le tableau`) ;
        break ;

        default :  
            console.log(`${users[i]} sont dans le tableau`) ;
        break ;
    }
    
}


for(let i = 0 ; i < users.length ; i++ )
{
    switch (users[i])
    {
        case "Salim" :
            document.write(`<p>${users[i]} est un bon formateur</p>`) ;
        break ;

        case "Stephane" :
            document.write(`<p>${users[i]} a réussis a parcourir le tableau</p>`) ;
        break ;

        default :  
            document.write(`<p>${users[i]} sont dans le tableau</p>`) ;
        break ;
    }
    
}