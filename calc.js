function add(a, b) {
  // BUG on purpose: adds as-is (fails if strings)
  return a + b;
}

function safeAdd(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) throw new Error('Inputs must be numbers');
  return x + y;
}

module.exports = { add, safeAdd };
