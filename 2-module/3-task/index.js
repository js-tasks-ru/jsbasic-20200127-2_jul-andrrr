
 let calculator = {
  
  atr1: '',
  atr2: '',
  
  read: function(a, b) {
    this.atr1 = a;
    this.atr2 = b;
  },
  
  sum() {
    return this.atr1 + this.atr2;
  },

  mul() {
    return this.atr1 * this.atr2;
  }

  
};




// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
