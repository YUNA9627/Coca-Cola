let nav = document.querySelector('.top_nav > div');

window.addEventListener('scroll',()=>{
  if(window.scrollY > 600){
    if(!nav.classList.contains('shrink')){
      nav.classList.add('shrink');
    }else{
      nav.classList.remove('shrink');
    }
  }
})
console.log(window.scrollY);
