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
```js
출력 결과
1
2
3
즉, “한 줄씩 차례로 처리하는” 방식입니다.
