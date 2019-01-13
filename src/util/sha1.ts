/**
 *
 *  Secure Hash Algorithm (SHA1)
 *  http://www.webtoolkit.info/
 *
 * */

import Utf8Encode from './utf8Encode';

export default function SHA1(inputMessage: string): string {
  function rotate_left(n: number, s: number) {
    const t4 = (n << s) | (n >>> (32 - s));

    return t4;
  }

  function cvt_hex(val: number): string {
    let str = '';

    let v: number;

    for (let i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f;

      str += v.toString(16);
    }

    return str;
  }

  let blockstart;

  let i;
  let j;

  const W = new Array(80);

  let H0 = 0x67452301;

  let H1 = 0xefcdab89;

  let H2 = 0x98badcfe;

  let H3 = 0x10325476;

  let H4 = 0xc3d2e1f0;

  let A;
  let B;
  let C;
  let D;
  let E;

  let temp;

  const msg = Utf8Encode(inputMessage);

  const msg_len = msg.length;

  const word_array = new Array();

  for (i = 0; i < msg_len - 3; i += 4) {
    j =
      (msg.charCodeAt(i) << 24) |
      (msg.charCodeAt(i + 1) << 16) |
      (msg.charCodeAt(i + 2) << 8) |
      msg.charCodeAt(i + 3);

    word_array.push(j);
  }

  switch (msg_len % 4) {
    case 0:
      i = 0x080000000;

      break;

    case 1:
      i = (msg.charCodeAt(msg_len - 1) << 24) | 0x0800000;

      break;

    case 2:
      i = (msg.charCodeAt(msg_len - 2) << 24) | (msg.charCodeAt(msg_len - 1) << 16) | 0x08000;

      break;

    case 3:
      i =
        (msg.charCodeAt(msg_len - 3) << 24) |
        (msg.charCodeAt(msg_len - 2) << 16) |
        (msg.charCodeAt(msg_len - 1) << 8) |
        0x80;

      break;
  }

  word_array.push(i);

  while (word_array.length % 16 != 14) word_array.push(0);

  word_array.push(msg_len >>> 29);

  word_array.push((msg_len << 3) & 0x0ffffffff);

  for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
    for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];

    for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

    A = H0;

    B = H1;

    C = H2;

    D = H3;

    E = H4;

    for (i = 0; i <= 19; i++) {
      temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999) & 0x0ffffffff;

      E = D;

      D = C;

      C = rotate_left(B, 30);

      B = A;

      A = temp;
    }

    for (i = 20; i <= 39; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) & 0x0ffffffff;

      E = D;

      D = C;

      C = rotate_left(B, 30);

      B = A;

      A = temp;
    }

    for (i = 40; i <= 59; i++) {
      temp =
        (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8f1bbcdc) & 0x0ffffffff;

      E = D;

      D = C;

      C = rotate_left(B, 30);

      B = A;

      A = temp;
    }

    for (i = 60; i <= 79; i++) {
      temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) & 0x0ffffffff;

      E = D;

      D = C;

      C = rotate_left(B, 30);

      B = A;

      A = temp;
    }

    H0 = (H0 + A) & 0x0ffffffff;

    H1 = (H1 + B) & 0x0ffffffff;

    H2 = (H2 + C) & 0x0ffffffff;

    H3 = (H3 + D) & 0x0ffffffff;

    H4 = (H4 + E) & 0x0ffffffff;
  }

  const result = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

  return result.toLowerCase();
}