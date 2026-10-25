/**
 * 부드러운 스크롤 이동 유틸리티
 * 고정 헤더의 실제 높이를 동적으로 계산하여 콘텐츠가 헤더 뒤로 가려지지 않도록 보정합니다.
 */
export function scrollToSection(targetId) {
  if (targetId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  const header = document.querySelector(".header");
  const headerHeight = header ? header.offsetHeight : 80;
  const elementPosition = target.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerHeight - 16;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: "smooth",
  });
}
