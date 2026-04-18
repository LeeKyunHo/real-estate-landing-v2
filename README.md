# Model House Reservation Landing Page (v2)

부동산 모델하우스 방문 예약을 위한 랜딩페이지 웹 애플리케이션입니다.
단순 정보 제공을 넘어서 **사용자 전환(카카오 상담 / 방문예약)**을 중심으로 구조를 개선한 버전입니다.

---

## 📌 Table of Contents

* [Demo](#demo)
* [Screenshot](#screenshot)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Key Improvements (v2)](#key-improvements-v2)
* [Architecture](#architecture)
* [Trouble Shooting](#trouble-shooting)
* [What I Learned](#what-i-learned)
* [Current Status](#current-status)
* [Future Improvements](#future-improvements)

---

## Demo

Live Demo
https://gj-modelhouse.kro.kr/

---

## Screenshot

<img width="356" height="804" alt="image" src="https://github.com/user-attachments/assets/ba2265a0-041a-4325-9a20-2c1d295e5976" />
<img width="361" height="805" alt="image" src="https://github.com/user-attachments/assets/416d8b06-75a2-49c0-b6d7-f6c2205ac221" />
<img width="359" height="805" alt="image" src="https://github.com/user-attachments/assets/56d1e7ff-9cc2-4a53-93dc-a40d4e861b1e" />


---

## Features

### 1. 방문 예약 기능

* 사용자 입력 기반 방문 예약 폼 제공
* 예약 완료 시 안내 모달 표시

### 2. 카카오톡 상담 연동

* 오픈채팅 링크 연결
* CTA 및 팝업을 통한 상담 유도

### 3. 반응형 UI

* 모바일 / 데스크탑 대응
* 주요 전환 요소는 모바일 중심 설계

---

## Tech Stack

* React (Vite)
* CSS (Vanilla)
* Vercel (Deployment)

---

## Key Improvements (v2)

### 1. 하단 고정 CTA (전환 버튼)

* 전화 / 카카오톡 / 방문예약 3단 구조
* `position: fixed` 기반 항상 노출
* 모바일 UX 기준 설계 → 데스크탑까지 확장

👉 사용자 행동을 강제하지 않고 자연스럽게 유도

---

### 2. 이벤트 팝업 (전환 유도 장치)

* 최초 방문 시 팝업 노출
* 카카오톡 상담으로 유도
* 조건부 보상 구조 적용

```
"팝업 보고 왔어요" 입력 시 스타벅스 쿠폰 제공
```

#### UX 개선

* “닫기” vs “오늘 하루 보지 않기” 버튼 분리
* localStorage 기반 24시간 노출 제어

👉 단순 광고가 아닌 **필터링된 유입 구조 설계**

---

### 3. 스크롤 UX 개선

* 하단 CTA와 히어로 화살표 충돌 문제 해결
* CTA 높이 고려한 위치 보정

```css
bottom: calc(CTA 높이 + 기존 여백)
```

---

### 4. 콘텐츠 구조 확장

* 입지환경: 이미지 2 → 3개 확장
* 평면안내: 2 → 4개 확장

👉 데이터 기반 렌더링 구조 유지 (map 활용)

---

### 5. Git & 배포 구조 개선

* v1 / v2 레포 분리
* Vercel 배포 대상 v2로 전환

👉 이전 버전 보존 + 개선 과정 추적 가능

---

## Architecture

```
App
 ├── Header
 ├── Hero
 ├── ImageSection (입지환경 / 단지안내)
 ├── FloorplanSection
 ├── ContactSection
 ├── Footer
 ├── BottomCTA (고정 전환 버튼)
 └── EventPopup (전환 유도 팝업)
```

---

## Trouble Shooting

### 1. 하단 CTA가 모바일에서만 보이던 문제

**원인**

* media query 내부에 스타일 정의

**해결**

* `.bottom-cta` 스타일을 global 영역으로 이동

---

### 2. CTA가 히어로 요소를 가리는 문제

**원인**

* fixed 요소와 absolute 요소 충돌

**해결**

* scroll indicator 위치 보정

---

### 3. 팝업 과다 노출 문제

**원인**

* 상태 저장 없이 매 렌더링 노출

**해결**

* localStorage + timestamp 적용

---

## What I Learned

* 단순 UI 구현보다 **전환 구조 설계가 중요**하다는 점
* localStorage를 활용한 사용자 경험 제어
* 반응형 UI에서 fixed 요소 처리 방식
* CTA 위치와 노출 방식이 사용자 행동에 미치는 영향

---

## Current Status

* v2 기능 구현 완료
* 실사용 가능한 랜딩페이지 상태

---

## Future Improvements

* 카카오 상담 클릭 이벤트 트래킹
* 방문예약 → 실제 상담 전환 분석
* 팝업 A/B 테스트
* UI/UX 고도화 (애니메이션, 아이콘 추가)

---
