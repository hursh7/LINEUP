# LINEUP

TypeScript와 React로 개발한 매우 단순한 축구용품 쇼핑몰 사이트입니다. 소셜 로그인 기능과 어드민 계정을 판별하여 제품을 등록할 수 있는 어드민 페이지를 구현했습니다. 또한 제품을 장바구니에 담고 주문 전 가격과 정보 확인이 가능한 페이지도 구현 되어있습니다. 일반적인 쇼핑몰에서 제공하는 다른 기능들을 지속적으로 공부하고 추가할 예정이고, (찜하기, 제품 주문 등등..) 디자인도 보완할 예정입니다.

페이지 링크: [**https://lineup-beryl.vercel.app/**](https://lineup-beryl.vercel.app/)

## Preview

<img src="https://user-images.githubusercontent.com/48500615/227945090-08007eee-8648-472f-83a9-2f3cb2175011.png" width="90%" alt="프로젝트 미리보기" />

## Table of Contents

1. [About the Project](#About-the-Project)
2. [Tech Stack](#Tech-Stack)
3. [Functions](#Functions)

---

### About the Project

- `React`와 `TypeScript`로 구현.
- `firebase` 의 **Auth API**를 통해 소셜 미디어 로그인 구현, **Real Time Database**를 이용해 실시간으로 제품 업로드가 가능한 Admin 페이지 구현
- `Cloudinary`로 이미지 업로드 기능 구현.
- css 라이브러리 `tailwind css` 학습.
- 데이터 송수신을 위해 `React Query` 활용.

### Tech Stack

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React Query&logoColor=white" alt="React" /> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React&logoColor=white" alt="React Query" /> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white" alt="Firebase" /> <img src="https://img.shields.io/badge/Cloudinary-4285F4?style=flat-square&logo=Google Cloud&logoColor=white" alt="Cloudinary" /> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white" alt="Tailwind CSS" />

### Functions

- `firebase` 의 **Auth API**를 통해 소셜 미디어 로그인 구현. (구글 계정)
- `firebase` 의 **Real Time Database**를 이용해 실시간으로 제품 업로드가 가능한 Admin 페이지 구현. (어드민 계정 판별 가능.)
- `firebase` 메소드와 `React Query` 활용하여 장바구니 담기 기능 구현.
