export function scrollToElement(options) {
  const { selector, offset = 0, smooth = true } = options;

  const to = document.querySelector(selector).offsetTop;
  window.scrollTo({
    top: to + offset,
    behavior: smooth ? 'smooth' : 'instant',
  });
}

export function getScrollPercentage() {
  const processTabHeight = 64;
  const windowHeight = document.documentElement.clientHeight - processTabHeight;
  const { scrollY } = window;

  return scrollY / windowHeight;
}
