import { scrollToSection } from "../utils/scroll";

export default function BottomCTA() {
  const handleReserveClick = (e) => {
    e.preventDefault();
    scrollToSection("reservation");
  };

  return (
    <aside className="bottom-cta" aria-label="빠른 문의 및 예약">
      <div className="bottom-cta__inner">
        <a href="tel:18440729" className="cta-btn call" aria-label="전화상담 1844-0729">
          1844-0729
        </a>

        <a
          href="https://open.kakao.com/o/sRidBVqi"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn kakao"
          aria-label="카카오톡 상담 열기"
        >
          카카오톡 상담
        </a>

        <a
          href="#reservation"
          className="cta-btn reserve"
          onClick={handleReserveClick}
          aria-label="모델하우스 방문예약 섹션으로 이동"
        >
          방문예약
        </a>
      </div>
    </aside>
  );
}
