function handleScroll() {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  const scrolling = currentScroll>lastScrollTop;
  header.classList.toggle('scrolling', scrolling);
  lastScrollTop = currentScroll;
}

let lastScrollTop = 0;
window.addEventListener('scroll', handleScroll);
