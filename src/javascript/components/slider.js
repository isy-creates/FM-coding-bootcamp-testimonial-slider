class Slider {
  constructor() {
    this.slider = document.querySelector('.testimonial');
    this.sliderItems = Array.from(this.slider.children);
    
    this.next = document.querySelector('.navigation__icon--next');
    this.prev = document.querySelector('.navigation__icon--prev');

    this.imageContainer = document.querySelector('.testimonial__portrait');
    this.navigation = document.querySelector('.navigation');

    this.events();
    this.naviPosition();
  }

  //let the slider start from pos. 1, wenn empty
  //indicate the end of the List


  events(){
    this.next.addEventListener('click', () => this.slideToRight() );
    this.prev.addEventListener('click', () => this.slideToLeft() );
    window.addEventListener('resize', () => this.naviPosition() );
  }

  slideToRight(){
    this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width;

    this.sliderItems.forEach( (el) => {
      el.style.transform = "translateX(-" + this.sliderWidth + "px)";
      
    });
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