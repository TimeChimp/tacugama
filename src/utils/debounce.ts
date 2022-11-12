const DEBOUNCE_DELAY = 500;

export const debounce = (fn: any, delay: number = DEBOUNCE_DELAY) => {
  let timeoutId: any;
  function debounced(...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debounced;
};
