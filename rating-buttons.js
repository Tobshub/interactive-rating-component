export function highlight(el, rating){
  if(!el.clicked){
    el.style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-primary-accent');
    el.clicked = true;
  } else {
    el.style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-neutral-highlight');
    el.clicked = false;
    rating = '0';
  }
}

export function reset(el,arr){
  if(el.clicked) el.clicked = false;
  let i = 0;
  while(arr[i]){
    arr[i].style.backgroundColor = getComputedStyle(arr[0]).getPropertyValue('--color-neutral-highlight');
    i++;
  }
}
// getComputedStyle(arr[0]).getPropertyValue('--color-neutral-highlight')