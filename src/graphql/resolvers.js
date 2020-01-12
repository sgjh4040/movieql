import { getNowPlayMovies, getMovie, getSuggestions, getCredits, getVideos } from "./db";


const resolvers = {
    Query: {
        nowPlayMovies: (_,{page})=> getNowPlayMovies(page),
        movie: (_,{id})=> getMovie(id),
        suggestions: (_,{id})=> getSuggestions(id), 
        credits: (_,{id})=> getCredits(id),
        videos: (_,{id})=> getVideos(id)
    }
}

export default resolvers;