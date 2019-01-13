export default function Utf8Encode(inputString: string): string {
  const normalizedString = inputString.replace(/\r\n/g, '\n');

  let utftext: string = '';

  for (let n = 0; n < normalizedString.length; n++) {
    const c = normalizedString.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode((c >> 6) | 192);

      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);

      utftext += String.fromCharCode(((c >> 6) & 63) | 128);

      utftext += String.fromCharCode((c & 63) | 128);
    }
  }
  return utftext;
}
