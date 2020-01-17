import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const API_URL = "https://api.themoviedb.org/3"

export const getPerson = async (id,language="ko-kr" )=> {
    const {
        data
    } = await axios(`${API_URL}/person/${id}`, {
      params: {
        api_key: process.env.moviedbAPI,
        language
      }
    });
    console.log(data);
    return data;
  };
  export const getPersonMovieCredit = async (id,language="ko-kr") =>{
    const {
        data:{
            cast
        }
    }= await axios(`${API_URL}/person/${id}/movie_credits`,{
        params:{
            api_key:process.env.moviedbAPI,
            language,
        }
    });
    console.log(cast);
    return cast;
}
export const getPersonTvCredit = async (id,language="ko-kr") =>{
    const {
        data:{
            cast
        }
    }= await axios(`${API_URL}/person/${id}/tv_credits`,{
        params:{
            api_key:process.env.moviedbAPI,
            language,
        }
    });
    console.log(cast);
    return cast;
}

export const getSearchPeople = async (page=1,language='ko-kr',term) =>{
    const {
        data:{
            results
        }
    }= await axios(`${API_URL}/search/person`,{
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