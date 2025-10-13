# 데이터 교환 포맷
### 데이터 교환 포맷은 서버와 클라이언트가 데이터를 주고받을 때의 약속된 형태입니다.
### 정보(데이터)를 주고받는 과정에서 목적에 맞게 다양한 방식으로 표현하기 위해 여러 데이터 포맷이 필요합니다.
대표적인 포맷에는 **JSON, XML, CSV** 가 있습니다.

## 시리얼라이징(Serialization)이란?

**객체(Object)** 나 **데이터 구조(Data Structure)** 를 저장하거나 전송하기 쉽게 **연속적인 데이터(문자열, 바이트 등)** 로 바꾸는 과정입니다.
(예를 들어, 자바스크립트 객체를 네트워크로 보낼 때 바로 보낼 수 없기 때문에 JSON 문자열로 변환해야 함.)

### 역시리얼라이징(Deserialization)
시리얼라이징된 데이터를 다시 원래의 객체 형태로 복원하는 과정입니다.

## 직렬화가 필요한 이유
개발 언어를 무엇을 선택하든, 사용하는 데이터의 메모리 구조는 크게 2가지로 나뉩니다.

**값 형식 데이터** 

int, float, char 등 값 형식 데이터는 스택에 메모리가 쌓이고 직접 접근이 가능

**참조 형식 데이터**

객체와 같은 참조 형식 변수를 선언하면 힙에 메모리가 할당되고, 스택에서는 이 힙 메모리를 참조하는 구조로 되어 있음

#### 위 두 가지 데이터 중에서 디스크에 저장하거나 통신할 때는 값 형식 데이터만 사용할 수 있습니다. 참조 형식 데이터는 실제 데이터 값이 아닌 힙에 할당되어 있는 메모리 번지 주소를 가지고 있기 때문입니다.

### 데이터 직렬화의 종류
*CSV, XML, JSON 직렬화*
- 사람이 읽을 수 있는 형태.
- 저장 공간의 효율성이 떨어지고, 파싱하는 시간이 오래 걸림.
- 데이터의 양이 적을 때 주로 사용함.
- 최근에는 JSON 형태로 통해 데이터를 직렬화를 많이 함.
- 모든 시스템에서 사용이 가능함.
  
*Binary 직렬화*
- 사람이 읽을 수 없는 형태.
- 저장 공간을 효율적으로 사용할 수 있고, 파싱하는 시간이 빠름.
- 데이터의 양이 많을 때 주로 사용함.
- 모든 시스템에서 사용이 가능함.
- ex) 프로토콜 버퍼, Apache Avro 등


## (1) JSON (JavaScript Object Notation)

- 가장 널리 사용되는 데이터 교환 형식

- 사람이 읽기 쉽고, 자바스크립트 객체 구조와 유사함

- 가볍고 빠르며 대부분의 언어에서 지원함

<pre><code> 
  {
  "name": "foktanma",
  "age": 30,
  "isStudent": false,
  "blog": ["hahahoho5915.tistory.com", "tistory.com"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "postalCode": "12345"
  }
}
  
</code></pre>

## (2) XML (eXtensible Markup Language)

- 데이터를 태그(<tag>)로 감싸 표현하는 포맷

<pre><code>
<Person>
  
  <Name>foktanma</Name>
  <Age>30</Age>
  <IsStudent>false</IsStudent>
  <Blogs>
    <Blog>hahahoho5915.tistory.com</Blog>
    <Blog>tistory.com</Blog>
  </Blogs>
  <Address>
    <Street>123 Main St</Street>
    <City>Anytown</City>
    <PostalCode>12345</PostalCode>
  </Address>
</Person>

</code></pre>

## (3) YAML (YAML Ain’t Markup Language)

- 사람에게 읽기 쉬운 문법을 강조한 포맷

- 들여쓰기로 구조 표현 (JSON보다 간결)

- 주로 설정 파일이나 데이터 정의에 사용

- 문서 구조가 명확하고 확장성이 높지만, 다소 무겁고 복잡함

<pre><code>
  
  students:
  - name: Mark
    major: Math
    age: 20
  - name: Julie
    major: Arts
    age: 23
  - name: Tommy
    major: Music
    age: 25
  
</code></pre>
