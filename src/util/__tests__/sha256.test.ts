import sha256 from '../sha256';

test("SHA256 for 'a' ", () => {
  expect(sha256('a')).toBe('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb');
});

test("SHA256 for 'lorem ipsum' ", () => {
  expect(sha256('lorem ipsum')).toBe(
    '5e2bf57d3f40c4b6df69daf1936cb766f832374b4fc0259a7cbff06e2f70f269'
  );
});
