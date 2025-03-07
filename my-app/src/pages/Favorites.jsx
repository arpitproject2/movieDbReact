import { useMovieContext } from "../contexts/MovieContext"
import "../css/Favorite.css"
import MovieCard from "../components/MovieCard";
function Favorite(){
    const {favorites} = useMovieContext();
    if(favorites){
        return <div className="movies-grid">
        {favorites.map((movie)=>(
           <MovieCard movie={movie} key = {movie.id}/>
        ))}
        </div>
    }
    return (
    <>
    <div className="favorites-empty">
        <h2>No favorite added</h2>
        <p>starting adding movies </p>
    </div>
    </>
    )
}

export default Favorite