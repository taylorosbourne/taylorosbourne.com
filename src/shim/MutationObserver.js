if (typeof MutationObserver === 'undefined') {
  global.MutationObserver = class {
      constructor() {

      }
      observe = () => void 0;
  }
}