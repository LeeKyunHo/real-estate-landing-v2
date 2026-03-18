# Model House Reservation Landing Page

부동산 모델하우스 방문 예약을 위한 랜딩페이지 웹 애플리케이션입니다.  
사용자가 입력한 예약 정보를 서버리스 API를 통해 관리자 이메일로 전달하는 구조로 구현했습니다.

---

## 📌 Table of Contents

- [Demo](#demo)
- [Screenshot](#screenshot)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Key Implementation](#key-implementation)
- [Trouble Shooting](#trouble-shooting)
- [What I Learned](#what-i-learned)
- [Current Status](#current-status)
- [Future Improvements](#future-improvements)

---

## Demo

Live Demo  
https://gj-modelhouse.kro.kr/

---

## Screenshot

<p align="center">
  <img width="45%" src="https://github.com/user-attachments/assets/7f11b45a-be1f-42f5-be03-a9ce9c03a363">
  <img width="45%" src="https://github.com/user-attachments/assets/ada379ff-8ee5-4443-a45a-1347960ce992">
</p>

---

## Features

- 반응형 랜딩페이지 UI 구현  
- 방문 예약 입력 폼 (이름 / 연락처 / 날짜 / 시간)  
- 입력값 유효성 검사  
- 서버리스 API를 통한 데이터 처리  
- Resend API 기반 관리자 이메일 자동 발송  
- Vercel을 통한 배포 및 운영  

---

## Tech Stack

### Frontend
- React  
- Vite  
- CSS  

### Backend
- Vercel Serverless Functions  

### External Service
- Resend Email API  

### Deployment
- Vercel  

---

## Architecture

User
↓
React Landing Page
↓
Reservation Form
↓
Vercel Serverless API
↓
Resend Email API
↓
Admin Email


---

## Key Implementation

### Serverless API

- 별도의 백엔드 서버 없이 Serverless Function으로 API 구성  
- 클라이언트 요청 → 서버리스 함수 → 이메일 API 호출 구조  

### Email Integration

- Resend API를 활용하여 예약 발생 시 관리자에게 자동 메일 발송  

### Validation

- 입력값 검증을 통해 잘못된 데이터 요청 차단  

---

## Trouble Shooting

### API 요청 실패 시 사용자 반응 없음

문제  
- 요청 실패 시 UI 변화 없음  

원인  
- 에러 핸들링 미구현  

해결  
- try-catch 추가 및 사용자 메시지 표시  

---

### Serverless 함수 미동작

문제  
- 배포 후 API 호출 실패  

원인  
- `/api` 디렉토리 구조 오류  

해결  
- Vercel 규칙에 맞게 구조 수정 후 재배포  

---

## What I Learned

- 서버리스 아키텍처 구조 이해  
- 프론트엔드와 API 간 데이터 흐름 설계  
- 외부 API 연동 및 에러 처리 경험  
- 환경 변수 기반 보안 관리  
- 실제 서비스 배포 경험  

---

## Current Status

- 대표번호 수정 완료  
- 이메일 전송 정상 동작  
- 실제 운영 중  

---

## Future Improvements

- 예약 데이터 DB 저장  
- 관리자 페이지 구축  
- CAPTCHA 적용 (스팸 방지)  
- 로그 및 모니터링 추가  
