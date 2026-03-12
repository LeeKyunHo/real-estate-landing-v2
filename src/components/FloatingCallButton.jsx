/* 
  우측 하단 고정 버튼
  현재 대표번호 미확정이므로 방문예약 섹션 이동용 버튼으로 사용
*/

export default function FloatingCallButton() {
  const moveToReservation = () => {
    const targetElement = document.getElementById("reservation");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      className="call-button"
      type="button"
      onClick={moveToReservation}
    >
      방문예약
    </button>
  );
}