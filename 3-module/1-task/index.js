/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(data, age) {

let x = data

.filter(function(user) {
  if (user.age <=age) {
    return true;
  } else {
  return false;
}
})

.map(function(user) {
  return user.name + ', ' + user.balance + '\n';
})

.join('');

return (x.substring(0, x.length-1));
};

