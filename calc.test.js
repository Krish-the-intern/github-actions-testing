const { add, safeAdd } = require('./calc');

describe('calc', () => {
  test('add should sum numbers', () => {
    expect(add(2, 3)).toBe(5);                // ✅ pass
  });

  test('add fails with "2" + "3" (reveals bug)', () => {
    expect(add("2", "3")).not.toBe("23");     // ❌ will fail until fixed
  });

  test('safeAdd handles string inputs by coercing', () => {
    expect(safeAdd("2", "3")).toBe(5);        // ✅ pass
  });

  test('safeAdd throws on non-numeric', () => {
    expect(() => safeAdd("a", 3)).toThrow('Inputs must be numbers');
  });
});
