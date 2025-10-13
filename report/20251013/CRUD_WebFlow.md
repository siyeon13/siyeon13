# CRUD와 웹 흐름

## CRUD란?

CRUD는 데이터를 다루는 기본 네 가지 기능의 약자입니다.

- C (Create) : 데이터 생성 (예: 게시글 등록, 회원가입)

- R (Read) : 데이터 조회 (예: 게시글 목록 보기, 상세보기)

- U (Update) : 데이터 수정 (예: 게시글 수정, 프로필 변경)

- D (Delete) : 데이터 삭제 (예: 게시글 삭제, 회원 탈퇴)

### CRUD는 데이터베이스뿐 아니라, 웹 애플리케이션의 기본 구조와 흐름을 이해하는 핵심 개념이기도 합니다.

## 웹에서의 CRUD 동작 흐름

사용자 요청 (Client Request)
사용자가 브라우저를 통해 버튼 클릭, 입력 후 전송 등의 행동을 하면,
클라이언트(웹 브라우저)가 서버로 요청(Request)을 보냅니다.

서버 처리 (Server Processing)
서버는 해당 요청을 받아 데이터베이스(DB)와 상호작용합니다.
예를 들어,

- Create: DB에 새 데이터 삽입
- Read: DB에서 데이터 조회
- Update: 특정 데이터 수정
- Delete: 특정 데이터 삭제

응답 (Response)
서버는 처리 결과를 다시 클라이언트로 보냅니다.
이때 주로 JSON 같은 데이터 형식으로 전송되어,
클라이언트(JS 코드 등)가 화면에 결과를 렌더링합니다.

### CRUD 와 HTTP 메소드의 상관관계
| 키워드 | 기능 | SQL | HTTPS METHOD |
|:------:|:------:|:----------------:|:---------------:|
| CREATE | 생성 | CREATE / INSERT | POST |
| READ | 조회 | SELECT | GET |
| UPDATE | 갱신 | UPDATE | PUT / PATCH |
| DELETE | 삭제 | DELETE | DELETE |

## 웹 흐름

**“웹 흐름(Web Flow)”** 이란,
사용자가 웹사이트에 접속해서 **어떤 요청(Request)** 을 보내고,
그에 대한 **응답(Response)** 을 받기까지의 **전체 과정(데이터 이동 흐름)** 을 말합니다.

### 웹 흐름의 전체 구조
#### 1. 클라이언트(Client) — 브라우저

사용자가 보는 화면 (예: Chrome, Safari)

사용자가 주소를 입력하거나 버튼을 클릭하면 서버에 요청(Request)을 보냄

HTML, CSS, JS 파일을 받아서 화면에 렌더링(Rendering)

#### 2️. 서버(Server)

클라이언트 요청을 받아서 처리함

예를 들어, “회원 목록을 보여줘!” → 데이터베이스에서 회원 정보를 가져와서 HTML 또는 JSON 형태로 응답(Response)을 보냄

#### 3️. 데이터베이스(Database, DB)

실제 데이터가 저장된 곳

서버가 SQL을 사용해서 데이터를 **조회(SELECT)** 하거나 추가/수정/삭제함

### 요청과 응답의 흐름 (Request → Response)

- 클라이언트 요청 (Request)

사용자가 웹 주소를 입력하거나 버튼을 클릭함
예: 
<pre><code> GET /users </code> </pre> 
HTTP Method와 함께 서버로 요청 전송
(GET, POST, PUT, DELETE 등)

- 서버 처리 (Server Logic)

요청을 분석해서 필요한 작업을 수행
예: 로그인 요청이면 ID/PW를 DB와 비교
DB 접근 (Database)
필요한 경우 DB에서 데이터 조회나 수정
**SQL 실행: SELECT, INSERT, UPDATE, DELETE**

- 응답(Response) 반환

처리 결과를 HTML, JSON, XML 형태로 클라이언트에 전달
예: 
<pre><code> { "result": "success", "user": "yeonny" } </code> </pre> 


- 클라이언트 렌더링(Rendering)

받은 데이터를 화면에 표시 (HTML 업데이트 or JS 렌더링)
사용자는 최종 결과를 눈으로 확인

