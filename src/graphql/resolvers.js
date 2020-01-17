import { getNowPlayMovies, getMovie, getSuggestions, getCredits, getVideos, getMovies, getImages, getSimilars, getKeywords, getSearchMovies } from "./movie";
import { getTvs, getSearchTvs, getTv, getTvCredits,getTvSuggestions } from "./tv";
import { getSearchPeople, getPerson, getPersonMovieCredit, getPersonTvCredit } from "./people";


const resolvers = {
    Query: {
        nowPlayMovies: (_,{page})=> getNowPlayMovies(page),
        movies: (_,{page,language,category}) => getMovies(page,language,category),
        movie: (_,{id})=> getMovie(id),
        searchMovies: (_,{page,language,term}) => getSearchMovies(page,language,term),
        suggestions: (_,{id})=> getSuggestions(id), 
        credits: (_,{id})=> getCredits(id),
        videos: (_,{id})=> getVideos(id),
        similars: (_,{id})=> getSimilars(id),
        keywords: (_,{id})=> getKeywords(id),
        tvs: (_,{page,language,category})=> getTvs(page,language,category),
        tv: (_,{id,language}) => getTv(id,language),
        tvCredits: (_,{id, language}) => getTvCredits(id,language),
        searchTvs: (_,{page,language,term}) => getSearchTvs(page,language,term),
        searchPeoples: (_,{page,language,term}) => getSearchPeople(page,language,term),
        tvSuggestions: (_,{id, language}) => getTvSuggestions(id,language),
        person: (_,{id, language}) => getPerson(id,language),
        personMovieCredits: (_,{id, language}) => getPersonMovieCredit(id,language),
        personTvCredits: (_,{id, language}) => getPersonTvCredit(id,language),

        
    }
}

export default resolvers;