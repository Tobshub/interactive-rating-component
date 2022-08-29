import {highlight, reset, hoverEffect, cancelHoverEffect} from './rating-buttons.js';

let rating = '-';
let bubbles = document.querySelectorAll('.rating-bubble');

class RatingButton {
  constructor(ratingEl){
    this.value = ratingEl.textContent;
    this.clicked = false;
    ratingEl.addEventListener('click', this.update);
    ratingEl.addEventListener('keydown', e=>{
      if(e.code=='Enter') {
        reset(this, bubbles); 
        highlight(this);
        console.log('I work!')
      }
    })
    ratingEl.addEventListener('mouseover', this.onHover);
    ratingEl.addEventListener('mouseout', this.offHover);
  }

  update(){
    reset(this, bubbles);
    highlight(this);
    rating = this.textContent;
    sessionStorage.RATING = rating;
    // console.log(rating);
  }
  
  onHover(){
    hoverEffect(this);
  }

  offHover(){
    cancelHoverEffect(this);
  }
}

let rating1 = new RatingButton(document.getElementById('rating-1'));
let rating2 = new RatingButton(document.getElementById('rating-2'));
let rating3 = new RatingButton(document.getElementById('rating-3'));
let rating4 = new RatingButton(document.getElementById('rating-4'));
let rating5 = new RatingButton(document.getElementById('rating-5'));


function changeDir(){
  window.location = './thank-you-page.html';
}

const submit_btn = document.getElementById('rating-cmpnt-submit');

submit_btn.addEventListener('click', changeDir);

