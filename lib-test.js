const {sudenona} = require('./lib');

test('文字列を反転できる', () => {
  const result = sudenona('テストなのです。');
  expect(result).toBe('。すでのなトステ');
});

test('数字を指定すると、エラーメッセージを返す', () => {
  const result = sudenona(12);
  expect(result).toBe('はわわ、これは文字列ではないのです。');
});

test('オブジェクトを指定すると、エラーメッセージを返す', () => {
  const result = sudenona({value: 'テストなのです。'});
  expect(result).toBe('はわわ、これは文字列ではないのです。');
});

test('ブーリアンを指定すると、エラーメッセージを返す', () => {
  const result = sudenona(true);
  expect(result).toBe('はわわ、これは文字列ではないのです。');
});

test('nullを指定すると、エラーメッセージを返す', () => {
  const result = sudenona(null);
  expect(result).toBe('はわわ、これは文字列ではないのです。');
});

test('undefinedを指定すると、エラーメッセージを返す', () => {
  const result = sudenona(undefined);
  expect(result).toBe('はわわ、これは文字列ではないのです。');
});
