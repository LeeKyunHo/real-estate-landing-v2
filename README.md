# Real Estate Landing Page Improvement

기존 정보형 부동산 홈페이지를
**전환 중심 랜딩페이지 구조로 개선한 프로젝트**입니다.

---

## 📌 Table of Contents

* [Demo](#demo)
* [Project Background](#project-background)
* [Before vs After](#before-vs-after)
* [Key Changes](#key-changes)
* [Tech Stack](#tech-stack)
* [Architecture](#architecture)
* [Key Implementation](#key-implementation)
* [Trouble Shooting](#trouble-shooting)
* [What I Learned](#what-i-learned)
* [Current Status](#current-status)
* [Future Improvements](#future-improvements)

---

## Demo

### Before (기존 정보형 페이지)

https://gj-modelhouse.kro.kr/

### After (개선된 랜딩페이지)

(추후 추가 예정)

---

## Project Background

기존 사이트는 정보 전달 중심 구조로 되어 있어
사용자가 실제로 “방문 예약” 행동을 하기까지의 흐름이 약했습니다.

이에 따라 다음과 같은 문제를 개선하고자 했습니다:

* CTA(Call To Action) 부족
* 전환 유도 구조 부재
* 모바일 UX 최적화 미흡
* 사용자 행동 흐름 설계 부족

---

## Before vs After

### Before

* 정보 나열형 구조
* CTA가 하단에만 존재
* 사용자 행동 유도 약함

### After

* 랜딩페이지 구조 적용
* CTA 반복 배치
* 하단 고정 버튼 추가
* 즉시 상담 유도 UX 적용

---

## Key Changes

### 1. 하단 고정 CTA (Bottom CTA)

* 스크롤과 관계없이 항상 노출
* 전화 / 카카오톡 / 방문예약 버튼 제공

---

### 2. 구조 개선 (정보 → 전환 중심)

* Hero 영역에 CTA 추가 예정
* 중간 CTA 섹션 반복 배치 예정
* 사용자 행동 흐름 중심 구조 설계

---

### 3. 프로젝트 구조 분리

기존 버전과 개선 버전을 분리하여 관리

```
real-estate-landing       (Before)
real-estate-landing-v2    (After)
```

---

### 4. Git 브랜치 전략

```
main            → 개선 작업
before-landing  → 기존 버전 보관
```

---

## Tech Stack

* React
* Vite
* CSS (Custom Styling)
* Vercel (배포 예정)

---

## Architecture

```
App
 ├── Header
 ├── Hero
 ├── ImageSection (입지 / 단지)
 ├── FloorplanSection
 ├── ContactSection
 ├── Footer
 └── BottomCTA (고정 버튼)
```

---

## Key Implementation

### Bottom CTA 구현

```jsx
<div className="bottom-cta">
  <a href="tel:010-xxxx-xxxx">전화 상담</a>
  <a href="https://open.kakao.com/xxxx" target="_blank">
    카카오톡 상담
  </a>
  <a href="#contact">방문예약</a>
</div>
```

---

### 고정 위치 스타일

```css
.bottom-cta {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 99999;
}
```

---

## Trouble Shooting

### 1. 하단 CTA가 보이지 않는 문제

**문제**

* 화면에서는 보이지 않지만 DevTools에서는 확인됨

**원인**

* CSS 적용 문제 또는 레이아웃 충돌

**해결**

* `position: fixed` 및 `z-index` 재설정
* height 명시적으로 지정

---

### 2. 화면이 하얘지는 문제

**문제**

* 특정 컴포넌트 주석 처리 후 전체 화면 렌더링 실패

**원인**

* 정의되지 않은 컴포넌트 사용 (`FloatingCallButton`)

**해결**

* import 및 JSX 동시 제거

---

### 3. Git 구조 문제

**문제**

* 프로젝트 내부에 v2 폴더 생성

**원인**

* 레포지토리 복사 위치 오류

**해결**

* 프로젝트를 동일 레벨로 분리

---

## What I Learned

* 랜딩페이지는 단순 UI가 아니라 **전환 설계**가 핵심
* CTA 배치 위치에 따라 UX가 크게 달라짐
* Git 브랜치와 프로젝트 분리 전략의 중요성
* 디버깅 시 “렌더링 vs 스타일”을 구분하는 방법

---

## Current Status

* 프로젝트 구조 분리 완료
* Bottom CTA 구현 완료
* 기존 기능 안정화 완료

---

## Future Improvements

* Hero CTA 추가
* 중간 CTA 섹션 구성
* 사용자 후기 / 신뢰 요소 추가
* 모바일 UX 최적화
* 실제 전환 데이터 기반 개선

---
