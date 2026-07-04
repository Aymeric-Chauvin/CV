const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

const activeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${visible.target.id}`;
      link.toggleAttribute("aria-current", isActive);
    });
  },
  {
    rootMargin: "-28% 0px -58% 0px",
    threshold: [0.08, 0.2, 0.5],
  }
);

sections.forEach((section) => activeObserver.observe(section));
