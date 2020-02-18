/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {    
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];  
      for (let j = 0; j <= 3; j++) {
       let cell = row.cells[j];
       if(cell.getAttribute('data-available') == 'true') {
      cell.closest('tr').classList.add('available');
    } else if(cell.getAttribute('data-available') == 'false') {
      cell.closest('tr').classList.add('unavailable');
    } else if(!row.lastElementChild.getAttribute('data-available'))
    {cell.closest('tr').hidden = true;
};
};
}

for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];  
       for (let j = 0; j <= 3; j++) {
       let cell = row.cells[j];
       if(cell.innerHTML == 'm') {
      cell.closest('tr').classList.add("male");
} else  if(cell.innerHTML == 'f') {
  cell.closest('tr').classList.add("female");
};
};
}

for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];  
       for (let j = 0; j <= 3; j++) {
       let cell = row.cells[j];
       if(+cell.innerHTML <18) {
      cell.closest('tr').style = 'text-decoration: line-through';
}
}
}
}