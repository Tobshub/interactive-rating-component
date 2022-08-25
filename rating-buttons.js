export function highlight(el, rating){
  if(!el.clicked){
    el.style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-primary-accent');
    el.style.color = getComputedStyle(el).getPropertyValue('--color-neutral-100');
    el.clicked = true;
  } else {
    el.style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-neutral-highlight');
    el.style.color = getComputedStyle(el).getPropertyValue('--color-neutral-60')
    el.clicked = false;
    rating = '0';
  }
}

export function reset(el,arr){
  if(el.clicked) el.clicked = false;
  let i = 0;
  while(arr[i]){
    arr[i].style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-neutral-highlight');
    arr[i].style.color = getComputedStyle(el).getPropertyValue('--color-neutral-60')
    i++;
  }
}

export function hoverEffect(el){
  el.style.backgroundColor =  getComputedStyle(el).getPropertyValue('--color-neutral-60');
  el.style.color = getComputedStyle(el).getPropertyValue('--color-neutral-100');
}