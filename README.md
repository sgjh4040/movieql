# movieql
movie API

## graphql
graphql-yoga 는 create-reac-app 명령어와 유사
graphql 서버

### 필요성

1. overfetching
만약 /user 로 서버에 요청을 하게되면 불필요한 정보들을 다 받아오게된다.
사용자명만 필요한 상황에서는 과한 정보가 된다.

2. underfetching
만약 한 페이지에서 사용자 정보, 구독 정보, 댓글정보를 받아온다고 했을떄
3번의 서버요청이 필요하다. 이런 경우가 underfetcing
이런경우 graphql 을 이용하면 하나의 URL 로 원하는 정보만 받아 올수 있다.


### 특징
1. URL이 존재하지 않다. 하나의 endpoint(종점)만 존재할 뿐이다.