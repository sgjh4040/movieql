import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const API_URL = "https://api.themoviedb.org/3"


export const getMovies = async (page,language,category) =>{
    const {
        data
    }= await axios(`${API_URL}/movie/${category}`,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language,
            region:'KR'
        }
    });
    console.log(data);
    return data;
}


export const getNowPlayMovies = async (page) =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/movie/now_playing`,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language: "ko-kr"
        }
    });
    console.log(results);
    return results;
}
export const getPopularMovies = async (page) =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/movie/popular`,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language: "ko-kr"
        }
    });
    console.log(results);
    return results;
}
export const getTopRateMovies = async (page) =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/movie/top_rated`,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language: "ko-kr"
        }
    });
    console.log(results);
    return results;
}
export const getUpcomingMovies = async (page) =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/movie/upcoming`,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language: "ko-kr"
        }
    });
    console.log(results);
    return results;
}

export const getMovie = async id => {
    const {
        data
    } = await axios(`${API_URL}/movie/${id}`, {
      params: {
        api_key: process.env.moviedbAPI,
        language:"ko-kr"
      }
    });
    return data;
  };

export const getSuggestions = async id =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/movie/${id}/recommendations`,{
        params:{
            api_key:process.env.moviedbAPI,
            language: "ko-kr"
        }
    });
    return results;
}
export const getCredits = async id =>{
    const {
        data:{
            cast
        }
    }= await axios(`${API_URL}/movie/${id}/credits`,{
        params:{
            api_key:process.env.moviedbAPI,
            language: "ko-kr"
        }
    });
    console.log(cast);
    return cast
}
export const getVideos = async id =>{
    const {
        data:{
            cast
        }
    }= await axios(`${API_URL}/movie/${id}/videos`,{
        params:{
            api_key:process.env.moviedbAPI,
            language: "ko-kr"
        }
    });
    return cast
}
export const getImages = async id =>{
    const {
        data:{
            cast
        }
    }= await axios(`${API_URL}/movie/${id}/images`,{
        params:{
            api_key:process.env.moviedbAPI,
            language: "ko-kr"
        }
    });
    return cast
}
export const getSimilars = async id => {
    const{
        data:{
            results
        }
    }=await axios(`${API_URL}/movie/${id}/similar`,{
        params:{
            api_key:process.env.moviedbAPI,
            language:"ko-kr"
        }
    });
    return results;
    
}
export const getKeywords = async id => {
    const{
        data:{
            keywords
        }
    }=await axios(`${API_URL}/movie/${id}/keywords`,{
        params:{
            api_key:process.env.moviedbAPI,
            language:"ko-kr"
        }
    });
    return keywords;
    
}

export const getSearchMovies = async (page=1,language,term) =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/search/movie`,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language,
            region:'KR',
            query:term
        }
    });
    return results;
}