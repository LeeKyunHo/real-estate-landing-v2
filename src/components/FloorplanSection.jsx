/* 
  평면안내 전용 섹션
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

      <article className="content-card content-card--single">
        <div className="content-card__image-wrap">
          <img
            src={floorplanContent.imagePath}
            alt={floorplanContent.title}
            className="content-card__image"
          />
        </div>

        <div className="content-card__body">
          <h3 className="content-card__title">{floorplanContent.title}</h3>
          <p className="content-card__text">{floorplanContent.detail}</p>
        </div>
      </article>
    </section>
  );
}