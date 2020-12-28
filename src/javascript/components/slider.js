class Slider {
  constructor() {
    this.slider = document.querySelector('.testimonial');
    this.sliderItems = Array.from(this.slider.children);
    this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width;
    
    this.next = document.querySelector('.navigation__icon--next');
    this.prev = document.querySelector('.navigation__icon--prev');

    this.imageContainer = document.querySelector('.testimonial__portrait');
    this.navigation = document.querySelector('.navigation');

    this.events();
    this.naviPosition();


  }


  events(){
    this.next.addEventListener('click', () => this.slideToRight() );
    this.prev.addEventListener('click', () => this.slideToLeft() );
    window.addEventListener('resize', () => this.naviPosition() );
  }

  slideToRight(){
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    let style = document.querySelector('.current-slide').style.transform;
    let translateX = style.replace(/[^\d.]/g, '');
    let translateX_num = +translateX;
      
    let currentPosition = this.sliderWidth + translateX_num;

    this.sliderItems.forEach( (el) =>{

      //get current translatex position || save current x position
      el.style.transform = "translateX(-" + currentPosition + "px)";
    });

    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
  }

  slideToLeft(){
    this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width;

    this.sliderItems.forEach( (el) => {
      el.style.transform = "translateX(" + 0 + "px)";
      
    });
  }

  naviPosition(){
    let imageHeight = this.imageContainer.getBoundingClientRect().height;
    let imageFromTop = this.imageContainer.getBoundingClientRect().top;
    let navigationHeight = this.navigation.getBoundingClientRect().height / 2;
    let position = imageHeight + imageFromTop - navigationHeight;
    this.navigation.style.top = position + "px";
  }
  
}

export default Slider;