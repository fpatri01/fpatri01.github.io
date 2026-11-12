/* ==========================================================================
   site.js — shared by every page.
   Builds the header and footer from the SITE settings below, so changing
   the nav or footer is a one-place edit instead of one edit per page.
   ========================================================================== */

const SITE = {
  name: "Faith Lashae Patrick",          // shown top-left and in the footer
  nav: [                                  // order here = order in the menu
    { label: "Work",    href: "/portfolio/work/" },
    { label: "Notes",   href: "/portfolio/notes/" },
    { label: "About",   href: "/portfolio/about/" },
    { label: "Contact", href: "/portfolio/contact/" },
  ],
  footerLinks: [                          // add, remove, or reorder freely
    // { label: "GitHub", href: "https://github.com/fpatri01" },
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/faithlspatrick/" },
    { label: "faithlashaepatrick@gmail.com",    href: "mailto:faithlashaepatrick@gmail.com" },
  ],
};

/* ---------- Header ---------- */
function buildHeader() {
  const items = SITE.nav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  return `
    <header class="site-header">
      <div class="container">
        <a class="brand" href="/">${SITE.name}</a>
        <button class="nav-toggle" type="button"
                aria-expanded="false" aria-controls="nav-list">Menu</button>
        <nav aria-label="Main">
          <ul class="nav-list" id="nav-list">${items}</ul>
        </nav>
      </div>
    </header>`;
}

/* ---------- Footer ---------- */
function buildFooter() {
  const links = SITE.footerLinks
    .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} ${SITE.name}</p>
        <ul class="footer-links">${links}</ul>
      </div>
    </footer>`;
}

/* ---------- Mark the current page in the nav ----------
   /work/ stays highlighted while you are on /work/some-project/ */
function markCurrentPage() {
  const path = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll(".nav-list a").forEach((link) => {
    const href = link.getAttribute("href");
    if (path === href || path.startsWith(href)) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- Mobile menu ---------- */
function setUpMenuToggle() {
  const button = document.querySelector(".nav-toggle");
  const list = document.getElementById("nav-list");
  if (!button || !list) return;

  const setOpen = (open) => {
    list.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

/* ---------- Run ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = buildHeader();
  if (footer) footer.innerHTML = buildFooter();
  markCurrentPage();
  setUpMenuToggle();
});
