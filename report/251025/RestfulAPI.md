# 🌐 RESTful API 정리 

## 1️⃣ API란?

- **API란?**  
  👉 프로그램끼리 서로 “대화”할 수 있게 해주는 **규칙**  
  예를 들어,  
  - 앱이 서버에게 “게시글 목록 좀 줘!” 라고 요청하면  
  - 서버가 “여기 있어!” 하며 데이터를 JSON 형식으로 돌려줌.

> 🔹 쉽게 말해:  
> "사람이 아니라 프로그램이 사용하는 메뉴판"이라고 생각하면 됨

### API의 주요 특징:

- 추상화: 복잡한 내부 로직을 숨기고 간단한 인터페이스 제공
- 표준화: 일관된 방식으로 데이터 교환 가능
- 모듈성: 애플리케이션을 독립적인 모듈로 분리 가능
- 확장성: 기존 시스템에 새로운 기능 추가 용이

API 설계에는 몇 가지 중요한 원칙이 있다. 이 원칙들을 지키면, 사용하기 쉽고 확장 가능한 API를 만들 수 있다. 

🧱 일관성은 기본 중의 기본
일관성 있는 API는 사용자가 빠르게 학습하고 쉽게 사용할 수 있게 한다. 일관성은 API 설계의 모든 측면에 적용되어야 함.

### 엔드포인트 명명 규칙 통일
- 복수형 명사 사용: /users, /posts, /comments
- 일관된 대소문자 사용: 소문자 추천 (/api/getUserInfo 대신 /api/get-user-info)
- 응답 형식 표준화
- 일관된 JSON 구조 사용
  
{ "data": { // 실제 데이터 }, "meta": { "totalCount": 100, "page": 1 } }
- 오류 처리 방식 일관화
- 표준 HTTP 상태 코드 사용
- 상세한 오류 메시지 제공

{ "error": { "code": "INVALID_INPUT", "message": "The provided email is not valid", "details": { "field": "email" } } }


### 🎯 리소스 중심 설계
모든 것을 리소스로 생각하고, URL로 표현. 이는 특히 RESTful API 설계에서 중요.

- /users: 사용자 리소스
- /posts: 게시글 리소스
- /comments: 댓글 리소스

***리소스 중심 설계의 이점:***

- 직관적인 URL 구조
- CRUD 작업과 HTTP 메서드의 자연스러운 매핑
- 확장성과 유지보수성 향상

### 🔐 보안 고려사항
API 설계 시 보안은 필수적으로 고려해야 할 요소입니다.

1. 인증(Authentication)과 인가(Authorization)
- OAuth 2.0, JWT 등의 표준 프로토콜 사용
- HTTPS를 통한 암호화 통신
2. 입력 유효성 검사
- 모든 클라이언트 입력에 대해 서버 측 유효성 검사 수행
3. 속도 제한(Rate Limiting)
- DoS 공격 방지 및 공정한 사용 보장
- HTTP/1.1 429 Too Many Requests Retry-After: 3600
4. CORS (Cross-Origin Resource Sharing) 설정
- 필요한 도메인에 대해서만 API 접근 허용


---

## 2️⃣ REST란?

**REST (Representational State Transfer)** 는  
API를 만들 때 **지켜야 하는 설계 원칙**

이걸 잘 지켜서 만든 API를 **RESTful API** 라고 부른다.  
즉, RESTful은 **"REST 원칙을 따르는 API"** 라는 뜻

---

## 3️⃣ REST의 핵심 원칙

| 원칙 | 설명 |
|------|------|
| **1. 자원을 URI로 표현** | 서버에 있는 데이터(게시글, 유저, 댓글 등)는 **명사 형태의 URL**로 표현합니다. <br>예: `/posts`, `/users`, `/comments` |
| **2. HTTP 메서드로 행동 표현** | CRUD(생성, 조회, 수정, 삭제)를 **HTTP 메서드**로 구분합니다. |
| **3. 무상태(Stateless)** | 서버는 요청 간에 상태를 저장하지 않아요. <br>→ 매번 요청할 때 필요한 정보를 다 담아야 합니다. |
| **4. 일관된 구조** | API는 일관성 있게 만들어야 개발자들이 예측하고 쓰기 쉽습니다. |

---

## 4️⃣ RESTful API의 기본 동작 (CRUD)

| 기능 | HTTP 메서드 | 예시 URL | 설명 |
|------|--------------|-----------|------|
| **Create (생성)** | `POST` | `/posts` | 게시글 새로 작성 |
| **Read (조회)** | `GET` | `/posts` | 전체 게시글 조회 |
| **Read (조회)** | `GET` | `/posts/1` | 1번 게시글 조회 |
| **Update (수정)** | `PUT` or `PATCH` | `/posts/1` | 1번 게시글 내용 수정 |
| **Delete (삭제)** | `DELETE` | `/posts/1` | 1번 게시글 삭제 |

> ✅ 즉, URL은 **“무엇”**, 메서드는 **“어떻게”** 를 표현함

---

## 5️⃣ 요청과 응답 예시

### 📨 요청 (클라이언트 → 서버)
```http
POST /posts HTTP/1.1
Content-Type: application/json

{
  "title": "RESTful API 공부하기",
  "content": "HTTP와 REST의 관계를 이해하자!"
}

HTTP/1.1 201 Created
Content-Type: application/json
```

### 📦 응답 (서버 → 클라이언트)
```js
{
  "id": 1,
  "title": "RESTful API 공부하기",
  "content": "HTTP와 REST의 관계를 이해하자!",
  "createdAt": "2025-10-27T08:00:00Z"
}
```

