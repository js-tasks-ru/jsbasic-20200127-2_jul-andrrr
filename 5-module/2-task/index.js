 function SortableTable(rows) {
  
    let countRows = rows.length; 
    
    this.el = document.createElement('table'); // создаем элемент таблица
        this.el.setAttribute('border', '1');   // устанавливаем стили таблицы
        this.el.setAttribute('color', '000');
        this.el.setAttribute('width','300');
        this.el.setAttribute('height', '150');

      let tbody = document.createElement('tbody'); // создаем тело таблицы
      let tHead = document.createElement('tHead'); // создаем заголовок таблицы 
            tHead.innerHTML = '<td>Name</td><td>Age</td><td>Salary</td><td>City</td>'; // пишем в заголовок текст
        
            this.el.append(tHead); //добавляем заголовок в конец таблицы
            
         let heading = ['name','age','salary','city']; // создаем перебираемый массив 
            for(let i = 0; i < countRows; i++){         
              let tr = document.createElement('tr'); //создаем элемент строка
                for (let j = 0; j < 4; j++) {
                let td = document.createElement('td');  //создаем элемент ячейка
         let item = rows[i][heading[j]];
        
                    td.innerHTML = item; //заполняем ячейки
                
                    tr.append(td); //добавляем td в tr
            
                }
                tbody.append(tr); //добавляем tr в конец тела таблицы
                }
                
                
         this.el.append(tbody); //добавляем тело таблицы в конец таблицы
  //  let container = document.querySelector('.result').append(this.el); //Поместили таблицу куда надо


  this.sort = (column, desc = false) => {  //сортировка: false - по возрастанию
     let sortedRows = Array.from(this.el.rows) //Из таблицы делаем массив
      .slice(1)  //убираем из сортируемого массива заголовок таблицы
      .sort((rowA, rowB) => {
          if (!desc) {  
          if (!isNaN(+rowA.cells[column].innerHTML)) {
          return +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? 1 : -1;
          }
          return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
        } else { 
          if (!isNaN(+rowA.cells[column].innerHTML)) {
          return +rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML ? 1 : -1;
          }
          return rowA.cells[column].innerHTML < rowB.cells[column].innerHTML ? 1 : -1;
        }
      });
      
      tbody.append(...sortedRows);
  };
}