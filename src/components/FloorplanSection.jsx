/* 
  평면안내 전용 섹션
  여러 장의 평면 이미지를 순서대로 출력할 수 있도록 구성
*/

import { floorplanContent } from "../data/siteContent";

export default function FloorplanSection() {
  return (
    <section id={floorplanContent.sectionId} className="content-section">
      <div className="content-section__header">
        <h2 className="content-section__title">{floorplanContent.sectionTitle}</h2>
        <p className="content-section__description">
          {floorplanContent.sectionDescription}
        </p>
      </div>

      <div className="content-card-list">
        {floorplanContent.items.map((item, index) => (
          <article className="content-card content-card--single" key={`floorplan-${index}`}>
            <div className="content-card__image-wrap">
              <img
                src={item.imagePath}
                alt={item.title}
                className="content-card__image"
              />
            </div>

            <div className="content-card__body">
              <h3 className="content-card__title">{item.title}</h3>
              <p className="content-card__text">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}