/**
 * 引数で与えられた文字列を反転させる
 * 文字列以外が与えられた場合、エラーメッセージを返す
 *
 * @param {string} value 変換前
 * @returns {string} 変換後
 */
function sudenona(value) {
  if (typeof value !== 'string') {
    return 'はわわ、これは文字列ではないのです。';
  }

  return value.split('')
    .reverse()
    .join('');
}

module.exports.sudenona = sudenona;
