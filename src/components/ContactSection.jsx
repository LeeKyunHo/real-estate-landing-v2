import { useRef, useState } from "react";

/*
  방문예약 섹션
  - 명확하고 세련된 상단 레이블 구조로 폰트 겹침 현상 원천 차단
  - 오늘 이전 날짜 선택 방지 (min)
  - 중복 제출 방지 (isSubmitting) 및 로딩 인디케이터
  - 접근성 (htmlFor, aria) 완비
*/

export default function ContactSection() {
  function validatePhone(phone) {
    const regex = /^010-\d{4}-\d{4}$/;
    return regex.test(phone);
  }

  /* 오늘 날짜 (YYYY-MM-DD) */
  const todayString = new Date().toISOString().split("T")[0];

  /* 폼 데이터 상태 */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    visitDate: "",
    visitTime: "",
    message: "",
    agree: false,
  });

  /* 제출 진행 상태 (중복 클릭 방지) */
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* 예약 완료 모달 열림 상태 */
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  /* 날짜 input 제어용 ref */
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
    let newValue = value;

    if (name === "phone") {
      const numbers = value.replace(/\D/g, "").slice(0, 11);
      if (numbers.length <= 3) {
        newValue = numbers;
      } else if (numbers.length <= 7) {
        newValue = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      } else {
        newValue = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  /* 폼 제출 처리 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validatePhone(formData.phone)) {
      alert("전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)");
      return;
    }

    if (!formData.agree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "예약 전송에 실패했습니다.");
      }

      setIsCompleteOpen(true);
    } catch (error) {
      console.error("예약 전송 오류:", error);
      alert(error.message || "예약 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* 완료 모달 닫기 */
  const handleCloseModal = () => {
    setIsCompleteOpen(false);
    setFormData({
      name: "",
      phone: "",
      visitDate: "",
      visitTime: "",
      message: "",
      agree: false,
    });
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
          <div className="reservation-section__contact-badge">
            모델하우스 방문가능 시간 : <strong>매일 10:00 ~ 18:00</strong>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            {/* 성함 입력 */}
            <div className="form-group">
              <label htmlFor="res-name" className="form-label">
                성함 <span className="form-label__required">*</span>
              </label>
              <input
                id="res-name"
                type="text"
                name="name"
                placeholder="성함을 입력해주세요"
                required
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            {/* 연락처 입력 */}
            <div className="form-group">
              <label htmlFor="res-phone" className="form-label">
                연락처 <span className="form-label__required">*</span>
              </label>
              <input
                id="res-phone"
                type="tel"
                name="phone"
                placeholder="010-1234-5678"
                required
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                maxLength={13}
              />
            </div>

            {/* 방문 희망일: 가짜 텍스트 제거 및 깔끔한 레이블 구조 */}
            <div className="form-group">
              <label htmlFor="res-date" className="form-label">
                방문 희망일 <span className="form-label__required">*</span>
              </label>
              <div className="reservation-form__date-wrap">
                <input
                  id="res-date"
                  ref={dateInputRef}
                  type="date"
                  name="visitDate"
                  required
                  min={todayString}
                  value={formData.visitDate}
                  onChange={handleChange}
                  className="reservation-form__date-input"
                />
              </div>
            </div>

            {/* 방문 희망시간 */}
            <div className="form-group">
              <label htmlFor="res-time" className="form-label">
                방문 희망시간 <span className="form-label__required">*</span>
              </label>
              <select
                id="res-time"
                name="visitTime"
                required
                value={formData.visitTime}
                onChange={handleChange}
              >
                <option value="">방문 시간을 선택해주세요</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* 선택 입력: 문의사항 */}
            <div className="form-group">
              <label htmlFor="res-message" className="form-label">
                문의사항 <span className="form-label__optional">(선택)</span>
              </label>
              <textarea
                id="res-message"
                name="message"
                placeholder="궁금하신 점이나 요청사항을 적어주세요."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* 개인정보 수집 및 이용 동의 */}
            <label className="reservation-form__agree" htmlFor="res-agree">
              <input
                id="res-agree"
                type="checkbox"
                name="agree"
                required
                checked={formData.agree}
                onChange={handleChange}
              />
              <span>개인정보 수집 및 이용에 동의합니다.</span>
            </label>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="reservation-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="submit-loading">
                  <span className="submit-spinner" />
                  접수 처리 중...
                </span>
              ) : (
                "방문 예약 신청하기"
              )}
            </button>
          </form>

          {/* 운영 안내 문구 */}
          <p className="reservation-section__notice">
            모델하우스 방문 시 담당자 <strong>박정은</strong> 을(를) 반드시 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 예약 완료 모달 */}
      {isCompleteOpen && (
        <div className="reservation-modal" onClick={handleCloseModal} role="dialog" aria-modal="true">
          <div
            className="reservation-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="reservation-modal__small-text">예약 접수 완료</p>

            <h3 className="reservation-modal__title">
              방문예약이 성공적으로 접수되었습니다.
            </h3>

            <div className="reservation-modal__info">
              <p>
                <strong>성함</strong> : {formData.name}
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
              접수 내용을 확인한 뒤 순차적으로 안내 연락을 드립니다.
              <br />
              모델하우스 방문 시 담당자 <strong>박정은</strong> 을(를) 반드시 확인해 주세요.
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
