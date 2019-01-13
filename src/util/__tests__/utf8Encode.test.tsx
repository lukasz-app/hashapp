import utf8Encode from '../utf8Encode';

test("utf8Encode for 'a' ", () => {
  expect(utf8Encode('a')).toBe('a');
});
