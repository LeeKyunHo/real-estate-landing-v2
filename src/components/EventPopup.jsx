import { useState } from "react";

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(() => {
    try {
      const lastSeen = Number(localStorage.getItem("eventPopupSeen"));
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      return !lastSeen || now - lastSeen > oneDay;
    } catch {
      return false;
    }
  });

  const closePopup = () => {
    setIsOpen(false); // 저장 안함 → 다음 방문 시 다시 표시
  };

  const hideToday = () => {
    try {
      localStorage.setItem("eventPopupSeen", Date.now().toString());
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true">
      <div className="popup">
        <h2>🎁 방문예약 이벤트</h2>
        <p>
          카카오톡 상담 시<br />
          <strong>&ldquo;팝업 보고 왔어요&rdquo;</strong>라고 남겨주시면<br />
          스타벅스 커피 쿠폰을 드립니다.
        </p>

        <a
          href="https://open.kakao.com/o/sRidBVqi"
          target="_blank"
          rel="noopener noreferrer"
          className="popup-btn"
        >
          카카오톡 상담하기
        </a>

        <div className="popup-buttons">
          <button type="button" onClick={closePopup} className="popup-close">
            닫기
          </button>

          <button type="button" onClick={hideToday} className="popup-hide">
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
