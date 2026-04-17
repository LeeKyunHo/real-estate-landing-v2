export default function BottomCTA() {
  return (
    <div className="bottom-cta">
      <a href="tel:18440729" className="cta-btn call">
        대표번호 : 1844-0729
      </a>

      <a
        href="https://open.kakao.com/o/soqX7s1h"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn kakao"
      >
        카카오톡 상담
      </a>

      <a href="#reservation" className="cta-btn reserve">
        방문예약
      </a>
    </div>
  );
}
