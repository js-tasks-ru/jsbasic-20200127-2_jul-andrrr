/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
//lass ClearedTable {
  //constructor(data) {
  //  this.el = document.createElement('table');
  //  this.data = data;
 // }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
 // onRemoved(id) {}


class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table'); //создаем элемент таблица
    this.data = data; // создаем элемент массив
    this.el.classList.add('pure-table'); //CSS-стили
   

    this.templateSheet(data);// создаем массив данных


/*
    this.linkEvent = this.el.querySelectorAll('a'); //событие - клик по "а"


    [...this.linkEvent].map( X => X.addEventListener("click", function(event) {
      let parentItem = X.closest('tr'); //строка - ближайший предок кнопки X 
      parentItem.remove(); // удаление строки
      let y = parentItem.getAttribute('id');
     alert(y);
      this.onRemoved(y);
      return y;
     }));

*/

this.el.addEventListener('click', (event) => {
    
      let target = event.target;
      if (target instanceof HTMLAnchorElement) {
       let tr = target.closest('tr');
        tr.remove();
        this.onRemoved(+(tr.id));
      }
    },);



  }


  templateSheet(data) {
    let fragment = new DocumentFragment();
    let tHead = document.createElement('tHead'); // создаем заголовок таблицы a
    let tBody = document.createElement('tbody'); // создаем тело таблицы
    let user = {};
    let cell, tr, cellTitle, cellRowHeader;

    for (let row of data) {   // цикл по строкам в массиве data
      let tr = document.createElement('tr'); //создаем элемент строка
      cellRowHeader = document.createElement('tr'); //создаем строку заголовка

      Object.assign(user, row);  //копирование из row в user
      
      for (let item in user) { //цикл по ячейкам в строках
        let td = document.createElement('td');  //создаем элемент ячейка
      if (!(item === "id"))  // выводим в таблицу всё, что не id
        {
          td.append(row[item]); //добавляем в td
          tr.append(td); //добавляем td в tr;
         
          
            } else         // берем информацию по id
          {
          td.append(row[item]); //добавляем в td
    //    tr.append(td); //добавляем td в tr;
          tr.setAttribute('id', +td.innerHTML); // устанавливаем строке атрибут id, равный содержимому ячейки 
    
       
          }
       
        }

      tr.insertAdjacentHTML('beforeEnd', '<td><a href="#delete">X</a></td>');
      tBody.append(tr);
    }

    for (let itemname in user) {
      cellTitle = document.createElement('td');
      let newName = itemname[0].toUpperCase() + itemname.slice(1);
     if (!(itemname === "id")) // убираем id из заголовка
      {
        cellTitle.append(newName);
        cellRowHeader.append(cellTitle);
      }
    }

    cellRowHeader.insertAdjacentHTML('beforeEnd', '<td></td>');

    tHead.append(cellRowHeader);

    fragment.append(tHead);
    fragment.append(tBody);

    this.el.append(fragment);
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
   
  
onRemoved(id) {
      alert(id);  
    }
    
  
}

window.ClearedTable = ClearedTable;