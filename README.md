# Real Estate Landing Page

부동산 모델하우스 방문예약 및 분양 안내를 위한 **랜딩 페이지 프로젝트**입니다.  
React + Vite 기반으로 제작되었으며 **모바일 환경에서도 사용 가능한 반응형 구조**로 구성되어 있습니다.

현재 프로젝트는 **Vercel을 통해 배포된 상태**입니다.

---

# Table of Contents

- [소개](#소개)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [실행 방법](#실행-방법)
- [배포](#배포)
- [사용 기술](#사용-기술)
- [현재 구현 상태](#현재-구현-상태)
- [향후 개선 예정](#향후-개선-예정)
- [English Summary](#english-summary)

---

# 소개

이 프로젝트의 목적

- 모델하우스 방문예약 유도 랜딩페이지 제작
- 분양 정보 및 이미지를 쉽게 교체할 수 있는 구조 설계
- React 기반 프론트엔드 개발 및 실제 배포 경험 축적

---

# 주요 기능

## 랜딩 페이지 구조

- Hero 메인 배너
- 스크롤 유도 애니메이션
- 섹션 기반 랜딩 구조

## 정보 안내 섹션

### 입지환경
- 입지 개요
- 프리미엄 환경

### 단지안내
- 단지 배치도
- 커뮤니티 안내
- 부대시설 안내

### 평면안내
- 대표 평면 이미지
- 추가 평면 이미지

## 방문예약 기능

- 방문예약 입력 폼
- 방문 예약일 선택
- 방문 예약시간 선택 (30분 단위)
- 개인정보 동의 체크
- 예약 완료 모달 표시

## UI 기능

- 상단 메뉴 스크롤 이동
- 우측 하단 방문예약 버튼
- 반응형 UI (모바일 지원)

---

# 프로젝트 구조
real-estate-landing

public/
images/
hero/
location/
complex/
floorplan/
favicon.png

src/
components/
Header.jsx
HeroSection.jsx
ImageSection.jsx
FloorplanSection.jsx
ContactSection.jsx
FloatingCallButton.jsx
Footer.jsx

data/
siteContent.js

App.jsx
App.css


---

# 실행 방법

## 프로젝트 실행


npm install
npm run dev


---

# 배포

현재 프로젝트는 **Vercel을 통해 자동 배포**되고 있습니다.

배포 흐름


GitHub Push
↓
Vercel Build
↓
자동 배포


---

# 사용 기술

- React
- Vite
- JavaScript
- CSS
- Vercel

---

# 현재 구현 상태

완료된 기능

- 랜딩페이지 전체 구조 구현
- 반응형 UI 적용
- 방문예약 폼 UI
- 방문 예약일 선택
- 방문 예약시간 선택
- 예약 완료 모달
- 평면안내 다중 이미지 구조
- favicon 및 사이트 탭 제목 적용

---

# 향후 개선 예정

## 예약 기능

- 방문예약 데이터 이메일 전송
- 문자(SMS) 알림 기능
- 예약 데이터 저장

## 운영 기능

- 관리자 페이지
- 상담 관리 시스템
- 이미지 업로드 기능

---

# English Summary

This project is a **real estate model house reservation landing page built with React and Vite**.

Main features:

- Hero banner section
- Section-based landing layout
- Location / Complex / Floorplan information
- Reservation form with date & time selection
- Reservation confirmation modal
- Floating call button
- Responsive UI

The project is currently **deployed using Vercel**.
