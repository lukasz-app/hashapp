import sha1 from '../sha1';

test("SHA1 for 'a' ", () => {
  expect(sha1('a')).toBe('86f7e437faa5a7fce15d1ddcb9eaeaea377667b8');
});

test("SHA1 for 'lorem ipsum' ", () => {
  expect(sha1('lorem ipsum')).toBe('bfb7759a67daeb65410490b4d98bb9da7d1ea2ce');
});
