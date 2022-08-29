export function highlight(el){
    el.style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-primary-accent');
    el.style.color = getComputedStyle(el).getPropertyValue('--color-neutral-100');
    el.clicked = true;
}

export function reset(el,arr){
  let i = 0;
  while(arr[i]){
    arr[i].style.backgroundColor = getComputedStyle(el).getPropertyValue('--color-neutral-highlight');
    arr[i].style.color = getComputedStyle(el).getPropertyValue('--color-neutral-60');
    arr[i].clicked = false;
    i++;
  }
}

export function hoverEffect(el){
  if(el.clicked) return;
  el.style.backgroundColor =  getComputedStyle(el).getPropertyValue('--color-neutral-60');
  el.style.color = getComputedStyle(el).getPropertyValue('--color-neutral-100');
}

export function cancelHoverEffect(el){
  if(el.clicked) return;
  el.style.backgroundColor =  getComputedStyle(el).getPropertyValue('--color-neutral-highlight');
  el.style.color = getComputedStyle(el).getPropertyValue('--color-neutral-60');
}