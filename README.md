# Model House Reservation Landing Page

부동산 모델하우스 방문 예약을 위한 랜딩페이지 웹 애플리케이션입니다.  
사용자가 예약 정보를 입력하면 서버리스 API를 통해 관리자 이메일로 예약 정보가 전달됩니다.

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

- 반응형 랜딩페이지 UI
- 방문 예약 폼 입력
- 날짜 및 시간 선택
- 서버리스 API를 통한 데이터 처리
- Resend 이메일 API를 이용한 예약 알림
- Vercel을 통한 실제 배포

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

서비스 흐름은 다음과 같습니다.

```
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
```

사용자가 예약 폼을 제출하면 서버리스 API가 요청을 처리하고  
Resend 이메일 서비스를 통해 관리자에게 예약 정보가 전달됩니다.

---

## Key Implementation

### Serverless API

예약 데이터는 Vercel Serverless Function을 통해 처리됩니다.

- 클라이언트에서 예약 데이터를 전달
- 서버리스 API에서 데이터 처리
- Resend API 호출
- 관리자 이메일 발송

### Environment Variables

이메일 서비스 API 키는 환경 변수로 관리합니다.

```
RESEND_API_KEY
```

---

## What I Learned

이 프로젝트를 통해 다음을 경험했습니다.

- React 기반 랜딩페이지 구현
- 사용자 입력 데이터 처리
- 서버리스 API 구조 이해
- 외부 API 연동
- 환경 변수 관리
- 실제 웹 서비스 배포 경험

---

## Future Improvements

현재 프로젝트는 이메일 알림 중심 구조입니다.  
추후 다음 기능을 추가할 수 있습니다.

- 예약 데이터 DB 저장
- 스팸 방지 (Captcha)
- 관리자 예약 관리 페이지
- 에러 로그 및 모니터링

---

## Deployment

프로젝트는 Vercel을 통해 배포되었습니다.

```
Frontend + Serverless API
→ Vercel Deployment
```

GitHub  
https://github.com/your-github
