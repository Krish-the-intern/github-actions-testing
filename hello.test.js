const hello = require('./hello');

test('greets correctly', () => {
  expect(hello('GitHub Actions')).toBe('Hello, GitHub Actions!');
});
// PR test change
