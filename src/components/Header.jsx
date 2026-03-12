/* 
  상단 고정 헤더
  메뉴 클릭 시 해당 섹션으로 부드럽게 이동
*/

import { headerContent, siteMenu } from "../data/siteContent";

export default function Header() {
  const moveToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <button
        className="header__logo"
        onClick={() => moveToSection("home")}
        type="button"
      >
        {headerContent.logoText}
      </button>

      <nav className="header__nav">
        {siteMenu.map((menuItem) => (
          <button
            key={menuItem.targetId}
            className="header__nav-button"
            type="button"
            onClick={() => moveToSection(menuItem.targetId)}
          >
            {menuItem.label}
          </button>
        ))}
      </nav>

      <div className="header__phone">{headerContent.phoneText}</div>
    </header>
  );
}