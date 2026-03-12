/* 
  공통 이미지 섹션 컴포넌트
  입지환경 / 단지안내 같은 반복 구조에 재사용 가능
*/

export default function ImageSection({
  sectionId,
  sectionTitle,
  sectionDescription,
  items,
}) {
  return (
    <section id={sectionId} className="content-section">
      <div className="content-section__header">
        <h2 className="content-section__title">{sectionTitle}</h2>
        <p className="content-section__description">{sectionDescription}</p>
      </div>

      <div className="content-card-list">
        {items.map((item, index) => (
          <article className="content-card" key={`${sectionId}-${index}`}>
            {/* 이미지 표시 영역 */}
            <div className="content-card__image-wrap">
              {/* 실제 잘림 여부와 비율 유지 방식은 CSS에서 결정됨 */}
              <img
                src={item.imagePath}
                alt={item.title}
                className="content-card__image"
              />
            </div>

            <div className="content-card__body">
              <h3 className="content-card__title">{item.title}</h3>
              <p className="content-card__text">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}