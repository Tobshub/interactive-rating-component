import {highlight, reset, hoverEffect} from './rating-buttons.js';

let rating = '5';
let bubbles = document.querySelectorAll('.rating-bubble');



class RatingButton {
  constructor(ratingEl){
    this.value = ratingEl.textContent;
    this.clicked = false;
    ratingEl.addEventListener('click', this.update);
    ratingEl.addEventListener('mouseover', ()=>this.onHover);
  }

  update(){
    reset(this, bubbles);
    highlight(this, rating);
    rating = this.textContent;
  }
  
  onHover(){
    hoverEffect(this);
  }
}


let rating1 = new RatingButton(document.getElementById('rating-1'));
let rating2 = new RatingButton(document.getElementById('rating-2'));
let rating3 = new RatingButton(document.getElementById('rating-3'));
let rating4 = new RatingButton(document.getElementById('rating-4'));
let rating5 = new RatingButton(document.getElementById('rating-5'));