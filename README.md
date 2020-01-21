# movieql
movie API
themoviedb API 를 graphql API 화 시켰습니다. 
특징
1. URL이 존재하지 않다. 하나의 endpoint(종점)만 존재할 뿐이다.
2. 내가 원하는 정보만 가져올 수 있다. 한번에!

## querys
1. 영화 리스트
 - parameter: page, language, category
 - ex>
    {
        movies(category:"upcoming"){
            page
            results{
                id
            }
        }
    }
2. 영화 정보
 - parameter: id
 - ex>
    {
        movies(id:"331482"){
            id
        }
    }
    
3. 영화 검색 결과
 - parameter: page,language,term
 - ex>
    {
        searchMovies(page:"1" language:"ko-kr" term:"손예진"){
            id
        }
    }
4. 특정 영화 관련 추천영화
 - parameter: id
 - ex>
    {
        searchMovies(id:"331482"){
            id
        }
    }
5. 특정 영화 관련 추천영화
 - parameter: id
 - ex>
    {
        suggestions(id:"331482"){
            id
        }
    }
6. 특정 영화 관련 참여 배우정보
 - parameter: id
 - ex>
    {
        credits(id:"331482"){
            id
        }
    }
7. 특정 영화 관련 비디오
 - parameter: id
 - ex>
    {
        videos(id:"331482"){
            id
        }
    }

    }
8. 특정 영화 관련 유사영화
 - parameter: id
 - ex>
    {
        similars(id:"331482"){
            id
        }
    }

9. 특정 영화 관련 키워드
 - parameter: id
 - ex>
    {
        keywords(id:"331482"){
            id
        }
    }
10. tv프로그램 리스트
 - parameter: page, language, category
 - ex>
    {
        tvs(category:"upcoming"){
            page
            results{
                id
            }
        }
    }
11. tv프로그램 정보
 - parameter: id, language
 - ex>
    {
        tv(id:"331482"){
            id
        }
    }
12. 특정 tv프로그램 관련 참여 배우정보
 - parameter: id, language
 - ex>
    {
        tvCredits(id:"331482" language:"ko-kr"){
            id
        }
    }
13. 특정 tv프로그램 관련 키워드
 - parameter: id, language
 - ex>
    {
        tvKeywords(id:"331482" language:"ko-kr"){
            id
        }
    }
14. tv 프로그램 검색 결과
 - parameter: page,language,term
 - ex>
    {
        searchTvs(page:"1" language:"ko-kr" term:"응답하라"){
            id
        }
    }
15. 인물 검색 결과
 - parameter: page,language,term
 - ex>
    {
        searchPeoples(page:"1" language:"ko-kr" term:"응답하라"){
            id
        }
    }

16. 특정 TV 프로그램 관련 추천영화
 - parameter: id
 - ex>
    {
        tvSuggestions(id:"331482" language:"ko-kr"){
            id
        }
    }
17. 인물 정보
 - parameter: id, language
 - ex>
    {
        person(id:"331482" language:"ko-kr"){
            id
        }
    }
18. 특정 인물 참여 영화 정보
 - parameter: id, language
 - ex>
    {
        personMovieCredits(id:"331482" language:"ko-kr"){
            id
        }
    }

19. 특정 인물 참여 TV 프로그램 정보
 - parameter: id, language
 - ex>
    {
        personTvCredits(id:"331482" language:"ko-kr"){
            id
        }
    }


### API server 주소
 https://pacific-beyond-15227.herokuapp.com/

### API server를 이용한 영화,TV 프로그램 검색 사이트
https://sgjh4040.github.io/movieql-client/#/