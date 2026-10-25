/* 
  메인 비주얼 섹션
  방문예약 CTA가 가장 먼저 보이도록 구성
*/

import { heroContent } from "../data/siteContent";
import { scrollToSection } from "../utils/scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${heroContent.imagePath})`,
      }}
    >
      <div className="hero__overlay">
        <p className="hero__subtitle">{heroContent.subtitle}</p>
        <h1 className="hero__title">{heroContent.title}</h1>
        <p className="hero__description">{heroContent.description}</p>

        <button
          className="hero__button"
          type="button"
          onClick={() => scrollToSection("reservation")}
        >
          {heroContent.buttonText}
        </button>

        {/* 아래 섹션으로 이동시키는 스크롤 유도 화살표 */}
        <button
          className="scroll-indicator"
          type="button"
          onClick={() => scrollToSection("location")}
          aria-label="아래로 스크롤"
        >
          ↓
        </button>
      </div>
    </section>
  );
}
