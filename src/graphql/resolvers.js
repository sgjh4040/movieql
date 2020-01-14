import { getNowPlayMovies, getMovie, getSuggestions, getCredits, getVideos, getMovies } from "./db";


const resolvers = {
    Query: {
        nowPlayMovies: (_,{page})=> getNowPlayMovies(page),
        movies: (_,{page,language,category}) => getMovies(page,language,category),
        movie: (_,{id})=> getMovie(id),
        suggestions: (_,{id})=> getSuggestions(id), 
        credits: (_,{id})=> getCredits(id),
        videos: (_,{id})=> getVideos(id)
    }
}

export default resolvers;