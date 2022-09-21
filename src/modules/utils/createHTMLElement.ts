export const createHTMLElement = (
  tag: string,
  className?: string | string[],
) => {
  const element: HTMLElement = document.createElement(tag);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach((item) => element.classList.add(item));
    }
    if (typeof className === 'string') {
      element.classList.add(className);
    }
  }
  return element;
};
