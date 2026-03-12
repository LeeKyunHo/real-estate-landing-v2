/* 
  사이트에 들어가는 문구, 메뉴, 이미지 경로를 한 곳에서 관리하는 파일
  나중에 실제 정보 수정 시 이 파일만 바꾸면 전체 화면에 반영되도록 구성
*/

export const siteMenu = [
  { label: "홈", targetId: "home" },
  { label: "입지환경", targetId: "location" },
  { label: "단지안내", targetId: "complex" },
  { label: "평면안내", targetId: "floorplan" },
  { label: "방문예약", targetId: "reservation" },
];

/* 
  헤더에 들어갈 정보
  대표번호는 아직 확정 전이므로 임시 문구 사용
*/
export const headerContent = {
  logoText: "힐스테이트 중외공원",
  phoneText: "대표번호 준비중",
};

/* 
  메인 비주얼 영역
  방문예약이 가장 중요하므로 버튼 문구를 강하게 설정
*/
export const heroContent = {
  subtitle: "모델하우스 방문예약 접수중",
  title: "힐스테이트 중외공원",
  description: "방문예약 등록을 통해 분양 정보와 상담 일정을 빠르게 안내받으실 수 있습니다.",
  buttonText: "방문예약 신청",
  imagePath: "/images/hero/hero-main.jpg",
};

/* 
  입지환경 섹션
*/
export const locationContent = {
  sectionId: "location",
  sectionTitle: "입지환경",
  sectionDescription: "공원, 교육, 생활 인프라를 한눈에 확인하실 수 있습니다.",
  items: [
    {
      title: "입지 개요",
      description: "광역 입지와 주변 생활 환경을 확인할 수 있는 핵심 자료입니다.",
      imagePath: "/images/location/location-overview.jpg",
    },
    {
      title: "프리미엄 환경",
      description: "공원, 교육, 문화 인프라를 중심으로 입지 가치를 확인할 수 있습니다.",
      imagePath: "/images/location/location-premium.jpg",
    },
  ],
};

/* 
  단지안내 섹션
*/
export const complexContent = {
  sectionId: "complex",
  sectionTitle: "단지안내",
  sectionDescription: "단지 배치와 커뮤니티, 시설 구성을 확인하실 수 있습니다.",
  items: [
    {
      title: "단지 배치도",
      description: "단지의 전반적인 구성과 배치 계획을 확인하실 수 있습니다.",
      imagePath: "/images/complex/complex-layout.jpg",
    },
    {
      title: "커뮤니티 안내",
      description: "입주민 편의를 위한 커뮤니티 공간 구성을 확인하실 수 있습니다.",
      imagePath: "/images/complex/complex-community.jpg",
    },
    {
      title: "부대시설 안내",
      description: "단지 내 주요 시설과 세부 공간 계획을 살펴보실 수 있습니다.",
      imagePath: "/images/complex/complex-facility.jpg",
    },
  ],
};

/* 
  평면안내 섹션
*/
export const floorplanContent = {
  sectionId: "floorplan",
  sectionTitle: "평면안내",
  sectionDescription: "대표 평면 정보를 통해 공간 구성을 확인하실 수 있습니다.",
  title: "대표 평면 안내",
  detail: "실제 평면 구성은 방문예약 후 상세 안내를 받으실 수 있습니다.",
  imagePath: "/images/floorplan/floorplan-main.jpg",
};

/* 
  방문예약 섹션
  대표번호/카톡은 아직 확정 전이므로 일단 제외
*/
export const reservationContent = {
  sectionId: "reservation",
  sectionTitle: "방문예약",
  sectionDescription: "방문예약 등록 시 분양 정보와 일정 안내를 도와드립니다.",
  formTitle: "방문예약 신청",
  formSubtitle: "이름과 연락처를 남겨주시면 순차적으로 안내드리겠습니다.",
  submitButtonText: "방문예약 등록",
};