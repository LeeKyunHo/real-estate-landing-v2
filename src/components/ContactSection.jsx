/* 
  방문예약 섹션
  현재는 제출 기능 없이 UI만 구성
  추후 이메일/시트 저장 기능 연결 가능
*/

import { reservationContent } from "../data/siteContent";

export default function ContactSection() {
  return (
    <section id={reservationContent.sectionId} className="reservation-section">
      <div className="reservation-section__inner">
        <p className="reservation-section__small-text">
          {reservationContent.sectionDescription}
        </p>
        <h2 className="reservation-section__title">
          {reservationContent.formTitle}
        </h2>
        <p className="reservation-section__subtitle">
          {reservationContent.formSubtitle}
        </p>

        <form className="reservation-form">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="연락처" />
          <input type="text" placeholder="방문 희망일" />
          <textarea placeholder="문의사항" rows="5"></textarea>

          <label className="reservation-form__agree">
            <input type="checkbox" />
            <span>개인정보 수집 및 이용에 동의합니다.</span>
          </label>

          <button type="submit">
            {reservationContent.submitButtonText}
          </button>
        </form>
      </div>
    </section>
  );
}