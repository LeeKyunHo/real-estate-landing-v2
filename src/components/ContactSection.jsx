import { useRef, useState } from "react";

/*
  방문예약 섹션
  현재 단계에서는 입력값 확인과 완료 모달 표시까지 구현
  실제 문자 발송 / API 연동은 다음 단계에서 진행
*/

export default function ContactSection() { 
  
    function validatePhone(phone) {
    const regex = /^010-\d{4}-\d{4}$/;
    return regex.test(phone);
  }
  
  /* 폼 데이터 상태 */
  
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

  let newValue = value;

  if (name === "phone") {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 3) {
      newValue = numbers;
    } else if (numbers.length <= 7) {
      newValue = `${numbers.slice(0,3)}-${numbers.slice(3)}`;
    } else {
      newValue = `${numbers.slice(0,3)}-${numbers.slice(3,7)}-${numbers.slice(7,11)}`;
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

  if (!validatePhone(formData.phone)) {
    alert("전화번호 형식이 올바르지 않습니다. (010-1234-5678)");
    return;
  } 
  
  console.log("예약 폼 제출 시작");
  console.log("전송 데이터:", formData);

  try {
    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("API 응답 상태:", res.status);

    const data = await res.json();

    console.log("API 응답 데이터:", data);

    if (!res.ok) {
      throw new Error(data.message || "예약 전송 실패");
    }

    console.log("예약 전송 성공");

    setIsCompleteOpen(true);

  } catch (error) {
    console.error("예약 전송 오류:", error);

    alert("예약 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
};

  /* 완료 모달 닫기 */
  const handleCloseModal = () => {
    setIsCompleteOpen(false);
  };

  /* 날짜 입력창 전체 클릭 시 선택창 열기 */
const handleDateWrapClick = () => {
  if (!dateInputRef.current) return;

  dateInputRef.current.focus();

  if (typeof dateInputRef.current.showPicker === "function") {
    dateInputRef.current.showPicker();
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
  className="reservation-form__field-wrap reservation-form__field-wrap--date"
  onClick={handleDateWrapClick}
>
  {!formData.visitDate && (
    <span className="reservation-form__date-fake-placeholder">
      방문 예약날짜 선택
    </span>
  )}

  <input
    ref={dateInputRef}
    type="date"
    name="visitDate"
    required
    value={formData.visitDate}
    onChange={handleChange}
    className="reservation-form__date-input"
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