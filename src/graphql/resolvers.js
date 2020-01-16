import { getNowPlayMovies, getMovie, getSuggestions, getCredits, getVideos, getMovies, getImages, getSimilars, getKeywords } from "./db";


const resolvers = {
    Query: {
        nowPlayMovies: (_,{page})=> getNowPlayMovies(page),
        movies: (_,{page,language,category}) => getMovies(page,language,category),
        movie: (_,{id})=> getMovie(id),
        suggestions: (_,{id})=> getSuggestions(id), 
        credits: (_,{id})=> getCredits(id),
        videos: (_,{id})=> getVideos(id),
        similars: (_,{id})=> getSimilars(id),
        keywords: (_,{id})=> getKeywords(id),
    }
}

export default resolvers;