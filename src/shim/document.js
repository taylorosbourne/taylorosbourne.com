if (typeof document === 'undefined') {
  const node = {
      querySelector: () => true
  }
  global.document = {
      addEventListener: () => void 0,
      querySelectorAll: () => [],
      head: node,
      body: node,
      documentElement: node,
  };
}