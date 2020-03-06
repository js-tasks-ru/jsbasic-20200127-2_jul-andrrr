'use strict';

class Carousel {
  //метод, который будем перебирать
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = document.createElement('body'); // создаем тело документа

    // верстка основы слайдера 
    let template = `
      <div id="mainCarousel" class="main-carousel carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
        </ol>
        <div class="carousel-inner">
            <!--Вот здесь будет активный слайд-->
        </div>
        <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
      </div>
    `;
    this.el.insertAdjacentHTML(`beforeend`, template); // вставляем основу слайдера в тело документа

    // метод создания слайда
    this.createSlide();

    // отдельные слайды
    this.carouselItemsList = this.el.querySelectorAll('.carousel-item');

    // белые кружки-индикаторы слайдов
    this.allIndicators = this.el.querySelectorAll('.carousel-indicator');

    // обертка для белых кружков-индикаторов
    this.btnDot = this.el.querySelector('.carousel-indicators');

    // кнопки Prev, Next
    this.btnPrev = this.el.querySelector('.carousel-control-prev');
    this.btnNext = this.el.querySelector('.carousel-control-next');
  
    // количество слайдов 
    this.quantitySlides = this.slides.length;

    // метод создания активного слайда
    this.addActiveSlide();

    
    // обработчики событий
    this.btnDot.addEventListener('click', event => this.clickIndicator(event));
    this.btnPrev.addEventListener('click', event => this.clickPrev(event));
    this.btnNext.addEventListener('click', event => this.clickNext(event));

  } //******************* окончание конструктора

 
  clickPrev(event) {
    let id;
    for (let item of this.carouselItemsList) {
      if (item.classList.contains("active")) {
        item.classList.remove("active");

        id = +item.getAttribute('data-slide');
        
        let activeDot = this.el.querySelector(`[data-slide-to='${id}']`);
        activeDot.classList.remove("active");
      }
    }

    if ((id - 1) === -1) {
      let prevSlideAdd = this.el.querySelector(`[data-slide='${this.quantitySlides - 1}']`);
      prevSlideAdd.classList.add("active");

      let activeDot = this.el.querySelector(`[data-slide-to='${this.quantitySlides - 1}']`);
      activeDot.classList.toggle("active");
    } else {
      let prevSlideAdd = this.el.querySelector(`[data-slide='${id - 1}']`);
      prevSlideAdd.classList.add("active");

      let activeDot = this.el.querySelector(`[data-slide-to='${id - 1}`);
      activeDot.classList.toggle("active");
    }
  }

  clickNext(event) {
    let id;
     for (let item of this.carouselItemsList) {
      if (item.classList.contains("active")) {
        item.classList.remove("active");

        id = +item.getAttribute('data-slide');
        
        let activeDot = this.el.querySelector(`[data-slide-to='${id}']`);
        activeDot.classList.remove("active");
      }
    }

    if ((id + 1) < this.quantitySlides) {
      let nextSlideAdd = this.el.querySelector(`[data-slide='${id + 1}']`);
      nextSlideAdd.classList.add("active");

      let activeDot = this.el.querySelector(`[data-slide-to='${id + 1}']`);
      activeDot.classList.toggle("active");
    } else {
      let nextSlideAdd = this.el.querySelector(`[data-slide='0']`);
      nextSlideAdd.classList.add("active");

      let activeDot = this.el.querySelector(`[data-slide-to='0']`);
      activeDot.classList.toggle("active");
    }
  }


  // создаем слайды, вставляем в родительский элемент
  createSlide() {
    let y = "";
  
  // родительский элемент для вставки слайдов
    let parentSlides = this.el.querySelector('.carousel-inner');

    // верстка самих слайдов, перебираем метод slides
    for (let slide of this.slides) {
      let templateS = `
        <div class="carousel-item" data-slide="${slide.id}">
          <img src="${slide.img}" alt="Activelide">
          <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${slide.title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                      </a>
                  </div>
              </div>
          </div>
        </div>
      `;

      y = y + templateS;
    }

    parentSlides.insertAdjacentHTML(`beforeend`, y); // вставляем все слайды в родительский элемент
  }

  // навешиваем класс 'active' на слайд № 0
  addActiveSlide() {
    for (let item of this.carouselItemsList) {
      if (+item.getAttribute('data-slide') === 0) {
        item.classList.add('active');
      }
    }
   // навешиваем атрибут "active" кружку с data-slide-to='0
    let activeDot = this.el.querySelector(`[data-slide-to='0`);
    activeDot.classList.add("active");
  }

  clickIndicator(event) {
    let target = event.target;

    if (target.classList.contains('carousel-indicator')) {
      let targetNum = +target.getAttribute('data-slide-to');
      
      // снимаем атрибут "active" со слайда, если был
      for (let item of this.carouselItemsList) {
        item.classList.remove("active");

        if (+item.getAttribute('data-slide') === targetNum) {
          item.classList.add("active");
        }
      }
      // снимаем атрибут "active" с кружка, если был
      for (let dot of this.allIndicators) {
        dot.classList.remove('active');

        if (+dot.getAttribute('data-slide-to') === targetNum) {
          dot.classList.add('active');
        }
      }
    }
  }
} //******************* окончание класса Carousel



let x = new Carousel();
        document.body.append(x.el);
    


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;