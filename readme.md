![image](./image.png)

# 설명

사용률이 높은 프론트엔드 라이브러리/프레임워크를 연습 해보기 위한 프로젝트.

- 뉴스 검색 기능 : api fetching, infinite scroll
- 로그인 기능 : api mocking, jwt login
- 즐겨찾기 기능 : local storage

## 사용 기술

- Typescript
- ReactJS
- styled-components
- RTK
- RTK Query
- Vite

## 다이렉토리 구조

```
- src
  - app : 공용 컴포넌트, 훅, 스토어, 타입, 설정
  - features : 기능 별 컴포넌트, 훅, 스토어, 서비스
    - auth : 로그인
    - bookmark : 즐겨찾기
    - search : 검색
  - routes : 페이지 컴포넌트
  - utils : 헬퍼 함수
```

## 기타

로그인 기능을 구현하기 위해 간단한 express mock 서버를 추가했습니다.

\
&nbsp;

# 구동 방법

## 세팅

1. 패키지 설치

```bash
yarn
```

2. API 키 업데이트

```typescript
// src/app/configs/app.ts
const API_KEY = 'New Key';
```

[News Api](https://newsapi.org/)

## 실행

1. Run mock api server

```
yarn mock
```

2. Run Vite

```
yarn dev
```
