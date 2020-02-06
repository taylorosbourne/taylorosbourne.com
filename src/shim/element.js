if (typeof Element === 'undefined') {
  global.Element = {
      prototype: {
          matches: function () { return false; },
          hasOwnProperty: function () { return false; },
      }
  };
}