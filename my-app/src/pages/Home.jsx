import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { SearchMovies, getPopularMovies } from "../services/api"
function Home(){
const [searchQuery, setSearchQuery] = useState("");
const [movies, setMovies]= useState([]);
const[error, setError] = useState(null);
const[loading, setLoading]= useState(true)
useEffect(()=> {
    const loadPopularMovies = async()=>{
        try{
            const popularMovies = await getPopularMovies()
            setMovies (popularMovies)
        }catch(err){
            setError("falied to load")
        }
        finally{
            setLoading(false)
        }
    }
    loadPopularMovies()
},[])

const handleSubmit = async (e) =>{
e.preventDefault()
if(!searchQuery.trim())return
if(loading)return
setLoading(true)
try{
    const searchResults = await SearchMovies(searchQuery)
    setMovies (searchResults)
    setError(null)
}catch(err){
    console.log(err)
    setError("failed to search")
}finally{
    setLoading(false)
}

};

return <div className="home">
    <form onSubmit={handleSubmit} className="search-form">
        <input type="text"
         placeholder="search for movies..." 
         className="search-input"
         value={searchQuery}
         onChange={(e)=> setSearchQuery(e.target.value)}
         />
       <button type="submit" className="search-button">search</button>
    </form>
    <div className="movies-grid">
    {movies.map((movie)=>(
        movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key = {movie.id}/>
    ))}
    </div>
</div>
}

export default Home