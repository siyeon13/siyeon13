# 🧩 JavaScript 비동기 처리 (Promise & Async/Await)

---

## 🌈 1. 비동기(Asynchronous)란?

자바스크립트는 **한 번에 한 가지 일만 처리하는 언어(단일 스레드)** 입니다.  
하지만 **비동기(Asynchronous)** 방식을 사용하면,  
“기다리지 않고” 여러 작업을 동시에 진행할 수 있습니다.

### 🔸 동기(Synchronous)
앞의 코드가 끝나야 다음 코드가 실행됩니다.

```js
console.log("1");
console.log("2");
console.log("3");
```
```js
출력 결과
1
2
3
즉, “한 줄씩 차례로 처리하는” 방식입니다.
```

## 🚀 2. 비동기(Asynchronous)란?

비동기 방식은 기다리지 않고 다른 일을 먼저 처리합니다.
주로 서버 요청, 파일 읽기, 타이머 등 시간이 오래 걸리는 작업에 사용됩니다.

```js
console.log("시작");

setTimeout(() => {
  console.log("3초 후 실행");
}, 3000);

console.log("끝");
```
```js
출력 결과

시작
끝
3초 후 실행
```

오래 걸리는 작업은 “나중에 실행해줘”라고 맡기는 구조입니다.

## 💡 3. 비동기를 사용하는 이유

웹사이트가 멈추지 않고 자연스럽게 작동하게 하려면
오래 걸리는 작업을 비동기 처리해야 합니다.

예: 서버에서 데이터를 가져오는 동안에도 버튼 클릭이 가능해야 함.

## ⚙️ 1. 콜백 함수란?

**“함수에 인자로 전달되어, 나중에 실행되는 함수”** 입니다.  
비동기 작업이 끝난 후 실행되는 코드를 정의할 수 있습니다.

```js
function getData(callback) {
  setTimeout(() => {
    console.log("데이터를 받아왔습니다!");
    callback();
  }, 2000);
}

getData(() => {
  console.log("출력 완료!");
});
```
```js
출력

코드 복사
데이터를 받아왔습니다!
출력 완료!
```

## ⚠️ 2. 콜백 지옥(Callback Hell)
콜백을 중첩해서 사용할 때 발생하는 가독성 문제를 말합니다.

```js
코드 복사
getUserData((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log("모든 데이터 로드 완료!");
    });
  });
});
```
이런 구조는 코드가 오른쪽으로 밀리고, 디버깅이 어렵고, 유지보수가 힘듭니다.

## ✅ 3. 해결 방법

👉 Promise 나 async/await 문법을 사용하면 콜백 지옥을 해결할 수 있습니다.


---

## 📘 Promise (`promise.md`)

# 💡 Promise란?

---

## 🌈 1. Promise의 정의

Promise는 **비동기 작업의 결과를 약속하는 객체**입니다.  
즉, "결과를 나중에 알려줄게"라는 개념이에요.

---

## 🔸 2. Promise의 상태(State)

| 상태 | 설명 |
|------|------|
| **pending** | 대기 중 |
| **fulfilled** | 성공 (`resolve` 호출됨) |
| **rejected** | 실패 (`reject` 호출됨) |

---

## ✨ 3. 기본 사용 예시

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ 성공!");
  } else {
    reject("❌ 실패!");
  }
});

myPromise
  .then((result) => console.log(result))   // 성공 시
  .catch((error) => console.log(error));   // 실패 시
```


---

## 📘 async & await (`async-await.md`)

---

## 🌈 1. async란?

함수 앞에 `async`를 붙이면 그 함수는 **자동으로 Promise를 반환**합니다.

```js
async function example() {
  return "완료!";
}

example().then((res) => console.log(res));
```

## ⏳ 2. await란?

await은 Promise가 끝날 때까지 기다린 뒤 결과를 반환합니다. 단, await은 async 함수 안에서만 사용할 수 있습니다.

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📦 데이터 받아옴!"), 2000);
  });
}

async function getData() {
  console.log("⏳ 요청 중...");
  const result = await fetchData();
  console.log(result);
  console.log("✅ 요청 완료!");
}

getData();

```
⚠️ 3. 에러 처리 (try...catch)

await은 Promise 실패 시 예외를 던지므로, try...catch로 에러를 처리합니다.

```js
async function getData() {
  try {
    const data = await fetchData();
    console.log("성공:", data);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}
```

## ⚖️ Promise vs async/await 비교
| 구분 | Promise | async/await |
|------|----------|-------------|
| **코드 스타일** | `.then().catch()` 체인 | 순차적인 코드처럼 읽힘 |
| **에러 처리** | `.catch()` | `try...catch` |
| **가독성** | 중첩되기 쉬움 | 깔끔하고 직관적 |
| **사용 시점** | 예전 문법 | 최신 문법 (ES2017+) |


## ✳️ 정리

| 개념 | 설명 |
|------|------|
| **Promise** | 비동기 결과를 약속하는 객체 |
| **async** | Promise를 반환하는 함수 |
| **await** | Promise가 끝날 때까지 기다림 |
| **try...catch** | async/await 에러 처리 방법 |



