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
    this.next.addEventListener('click', (e) => this.slideToRight(e) );
    window.addEventListener('keydown', (e) => this.keyCheck(e));
    this.prev.addEventListener('click', (e) => this.slideToLeft(e) );
    window.addEventListener('resize', () => this.naviPosition() );
  }

  keyCheck(event){
    console.log(event.key)
    switch (event.key) {
      case 'ArrowRight':
        this.slideToRight(event);
        break;
      case 'ArrowLeft':
        this.slideToLeft(event);
        break;
    }
  }

  slideToRight(event){
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    //gets the index of the next Element Sibling
    const index = this.sliderItems.findIndex( item => item === nextSlide);


    //returns on the last item
    if (!nextSlide) return;

    //Manage Arrow States
    this.hideShowArrows(index);
    
    this.move(currentSlide, nextSlide, event);
    
  }

  slideToLeft(event){
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    //gets the index of the prev Element Sibling
    const index = this.sliderItems.findIndex( item => item === prevSlide);

    if (!prevSlide) return;

    this.hideShowArrows(index);

    this.move(currentSlide, prevSlide, event);
  }

  move(currentSlide, nextSlide, event){
    //get transform property to check the current value
    let style = currentSlide.style.transform;
    let translateX = style.replace(/[^-?\d.]/g, '');
    let translateX_num = +translateX;
    let currentPosition;
    
    if(event.target.classList.contains('navigation__icon--next') || event.key === 'ArrowRight' ) {
      currentPosition = translateX_num - this.sliderWidth;
    } else {
      currentPosition = translateX_num + this.sliderWidth;
    }

    this.sliderItems.forEach( (el) =>{

      //get current translatex position
      el.style.transform = "translateX(" + currentPosition + "px)";

    });

    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
  }

  hideShowArrows(index){
    if (index === 0) {
      this.next.classList.remove('navigation__icon--disabled');
      this.prev.classList.add('navigation__icon--disabled');
    } else if (index === 1) {
      this.prev.classList.remove('navigation__icon--disabled');
    } else if (index === this.sliderItems.length - 1) {
      this.next.classList.add('navigation__icon--disabled');
    } else {
      this.next.classList.remove('navigation__icon--disabled');
      this.prev.classList.remove('navigation__icon--disabled');
    }
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