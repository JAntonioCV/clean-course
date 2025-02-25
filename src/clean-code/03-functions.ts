(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: number ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastByMovieId( movieId: number ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBioByActorId( ActorId: number ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        title:       string;
        description: string;
        rating:      number;
        cast:        string[]
    }


    // Crear una película
    function createMovie({title, description, rating, cast} : Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string)
    {
        console.log({fullName});
        return true;
    }


    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( checkFullName(fullName)) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    // Continuacion
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        
    if ( isDead ) {
        return 1500;
    }
    
    if(isSeparated){
        return 2500;
    }

    return (isRetired) ? 3000 : 4000;
    
    }


    


})();