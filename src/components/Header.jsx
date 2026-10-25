/* 
  상단 고정 헤더
  메뉴 클릭 시 헤더 높이를 계산하여 부드럽고 정확하게 스크롤 이동
*/

import { headerContent, siteMenu } from "../data/siteContent";
import { scrollToSection } from "../utils/scroll";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <button
          className="header__logo"
          onClick={() => scrollToSection("home")}
          type="button"
          aria-label="홈으로 이동"
        >
          {headerContent.logoText}
        </button>

        <nav className="header__nav" aria-label="메인 메뉴">
          {siteMenu.map((menuItem) => (
            <button
              key={menuItem.targetId}
              className="header__nav-button"
              type="button"
              onClick={() => scrollToSection(menuItem.targetId)}
            >
              {menuItem.label}
            </button>
          ))}
        </nav>

        {headerContent.phoneText && (
          <div className="header__phone">{headerContent.phoneText}</div>
        )}
      </div>
    </header>
  );
}
