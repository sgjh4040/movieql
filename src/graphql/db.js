import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const API_URL = "https://api.themoviedb.org/3/movie/now_playing"
const DETAIL_API_URL = "https://api.themoviedb.org/3/movie"

export const getMovies = async (page) =>{
    const {
        data:{
            results
        }
    }= await axios(API_URL,{
        params:{
            api_key:process.env.moviedbAPI,
            page,
            language: "ko-kr"
        }
    });
    return results;
}

export const getMovie = async id => {
    const {
        data
    } = await axios(`${DETAIL_API_URL}/${id}`, {
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
    }= await axios(`${DETAIL_API_URL}/${id}/recommendations`,{
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
    }= await axios(`${DETAIL_API_URL}/${id}/credits`,{
        params:{
            api_key:process.env.moviedbAPI,
            language: "ko-kr"
        }
    });
    return cast
}
export const getVideos = async id =>{
    const {
        data:{
            cast
        }
    }= await axios(`${DETAIL_API_URL}/${id}/videos`,{
        params:{
            api_key:process.env.moviedbAPI,
            language: "ko-kr"
        }
    });
    return cast
}