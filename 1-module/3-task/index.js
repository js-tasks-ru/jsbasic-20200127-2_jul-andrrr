/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
// Julia Andreeva
// ucFirst('вася') === 'Вася';
// ucFirst('в') === 'В';
// ucFirst('') === '';

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
