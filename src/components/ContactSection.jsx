import { useRef, useState } from "react";

/*
  방문예약 섹션
  현재 단계에서는 입력값 확인과 완료 모달 표시까지 구현
  실제 문자 발송 / API 연동은 다음 단계에서 진행
*/

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    visitDate: "",
    visitTime: "",
    message: "",
    agree: false,
  });

  /* 예약 완료 모달 열림 상태 */
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  /* 날짜 input 직접 제어용 ref */
  const dateInputRef = useRef(null);

  /* 방문 가능 시간 옵션 */
  const timeOptions = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  /* 입력값 변경 처리 */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* 폼 제출 처리 */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("예약 데이터:", formData);

    setIsCompleteOpen(true);
  };

  /* 완료 모달 닫기 */
  const handleCloseModal = () => {
    setIsCompleteOpen(false);
  };

  /* 날짜 입력창 전체 클릭 시 선택창 열기 */
  const handleDateWrapClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.();
      dateInputRef.current.focus();
      dateInputRef.current.click();
    }
  };

  return (
    <>
      <section id="reservation" className="reservation-section">
        <div className="reservation-section__inner">
          <p className="reservation-section__small-text">방문예약 / 상담신청</p>

          <h2 className="reservation-section__title">모델하우스 방문예약</h2>

          <p className="reservation-section__subtitle">
            방문을 원하시는 고객님께서는 아래 정보를 남겨주세요.
            <br />
            예약 접수 후 담당자가 순차적으로 연락드립니다.
          </p>

          {/* 연락 가능 시간 안내 */}
          <p className="reservation-section__contact-time">
            상담 가능 시간 : 매일 10:00 ~ 18:00
          </p>

          <form className="reservation-form" onSubmit={handleSubmit}>
            {/* 이름 입력 */}
            <input
              type="text"
              name="name"
              placeholder="이름"
              required
              value={formData.name}
              onChange={handleChange}
            />

            {/* 연락처 입력 */}
            <input
              type="tel"
              name="phone"
              placeholder="연락처 (예: 010-1234-5678)"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            {/* 방문 예약일 */}
            <div
              className="reservation-form__field-wrap"
              onClick={handleDateWrapClick}
            >
              <input
                ref={dateInputRef}
                type="date"
                name="visitDate"
                required
                value={formData.visitDate}
                onChange={handleChange}
              />
            </div>

            {/* 방문 예약시간: 드롭다운으로 변경 */}
            <select
              name="visitTime"
              required
              value={formData.visitTime}
              onChange={handleChange}
            >
              <option value="">방문 예약시간 선택</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* 선택 입력 */}
            <textarea
              name="message"
              placeholder="문의사항 (선택)"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />

            <label className="reservation-form__agree">
              <input
                type="checkbox"
                name="agree"
                required
                checked={formData.agree}
                onChange={handleChange}
              />
              <span>개인정보 수집 및 이용에 동의합니다.</span>
            </label>

            <button type="submit">방문 예약 신청하기</button>
          </form>

          {/* 운영 안내 문구 */}
          <p className="reservation-section__notice">
            모델하우스 방문 시 담당자 박정은 을(를) 반드시 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 예약 완료 모달 */}
      {isCompleteOpen && (
        <div className="reservation-modal" onClick={handleCloseModal}>
          <div
            className="reservation-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="reservation-modal__small-text">예약 접수</p>

            <h3 className="reservation-modal__title">
              방문예약이 접수되었습니다.
            </h3>

            <div className="reservation-modal__info">
              <p>
                <strong>이름</strong> : {formData.name}
              </p>
              <p>
                <strong>연락처</strong> : {formData.phone}
              </p>
              <p>
                <strong>방문일</strong> : {formData.visitDate}
              </p>
              <p>
                <strong>시간</strong> : {formData.visitTime}
              </p>
            </div>

            <p className="reservation-modal__description">
              접수 내용을 확인한 뒤 순차적으로 연락드립니다.
              <br />
              모델하우스 방문 시 담당자 박정은 을(를) 반드시 확인해 주세요.
            </p>

            <button
              type="button"
              className="reservation-modal__button"
              onClick={handleCloseModal}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}