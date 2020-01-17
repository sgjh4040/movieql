import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const API_URL = "https://api.themoviedb.org/3"


//category: top_rated, popular, on_the_air
export const getTvs = async (page = 1, language = "ko-kr", category) => {
    console.log(process.env.moviedbAPI);
    const {
        data
    } = await axios(`${API_URL}/tv/${category}`, {
        params: {
            api_key: process.env.moviedbAPI,
            page,
            language
        }
    });
    return data;
};
export const getTv = async (id, language = "ko-kr") => {
    const {
        data
    } = await axios(`${API_URL}/tv/${id}`, {
        params: {
            api_key: process.env.moviedbAPI,
            language
        }
    });
    return data;
};
export const getTvCredits = async (id, language = "ko-kr") => {
    const {
        data: {
            cast
        }
    } = await axios(`${API_URL}/tv/${id}/credits`, {
        params: {
            api_key: process.env.moviedbAPI,
            language
        }
    });
    console.log(cast);
    return cast
};
export const getTvSuggestions = async (id, language = "ko-kr") =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/tv/${id}/recommendations`,{
        params:{
            api_key:process.env.moviedbAPI,
            language
        }
    });
    return results;
}
export const getTvKeywords = async (id, language = "ko-kr") => {
    const{
        data:{
            results
        }
    }=await axios(`${API_URL}/tv/${id}/keywords`,{
        params:{
            api_key:process.env.moviedbAPI,
            language
        }
    });
    return results;
    
}

export const getSearchTvs = async (page = 1, language, term) => {
    console.log(page);
    const {
        data: {
            results
        }
    } = await axios(`${API_URL}/search/tv`, {
        params: {
            api_key: process.env.moviedbAPI,
            page,
            language,
            region: 'KR',
            query: term
        }
    });
    return results;
}