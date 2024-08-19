let topNav = document.querySelector('.top_nav');
let nav_flex = document.querySelector('.top_nav div');
let logo = document.querySelector('.top_nav #logo');
let gnb = document.querySelector('.top_nav nav ul li a');
let largeLogo = 'img/Header_Top_LOGO_white.svg';
let smallLogo = 'img/LOGO_red.svg';

window.addEventListener('scroll',()=>{
  if(window.scrollY > 500){
    if(!nav_flex.classList.contains('shrink')){
      nav_flex.classList.add('shrink');
      changeLogo(smallLogo);
    }
    if(!logo.classList.contains('shrink')){
      logo.classList.add('shrink');
    }
    if(!topNav.classList.contains('shrink')){
      topNav.classList.add('shrink');
    }
    if(!gnb.classList.contains('shrink')){
      gnb.classList.add('shrink');
    }
    }else{
      nav_flex.classList.remove('shrink');
      logo.classList.remove('shrink');
      topNav.classList.remove('shrink');
      gnb.classList.remove('shrink');
      changeLogo(largeLogo);
  }
});

function changeLogo(url){
  logo.classList.add('hide');
  setTimeout(()=>{
    logo.setAttribute('src', url);
    logo.classList.remove('hide');
  }, 0);
}

const bgItem = document.querySelector('.main_banner .bg_item');
const cocaCola = document.querySelector('.main_banner .bg_item .coca-cola');
const coca = document.querySelector('.main_banner .bg_item #text-coca');
const cola = document.querySelector('.main_banner .bg_item #text-cola');

window.addEventListener('scroll',()=>{
  bgItem.style.top = `${window.scrollY}px`;
  if(0 > bgItem.getBoundingClientRect().top){
    bgItem.classList.add('fadeInOut');
  }else {
    bgItem.classList.remove('fadeInOut');
  }
});


let slideWrapper = document.querySelector('.slide_wrapper');
let slidesContainer = slideWrapper.querySelector('ul');
let slides = slidesContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = slideWrapper.querySelector('#prev');
let nextBtn = slideWrapper.querySelector('#next');

slides.forEach((slide,idx)=>{
  slide.style.left = `${idx * 100}%`;
});

function goToslide(num){
  slidesContainer.style.left = `${-num * 100}%`;
  currentIdx = num;

  if(currentIdx === 0){
    prevBtn.classList.add('disabled');
  }else{
    prevBtn.classList.remove('disabled');
  }
  if(currentIdx === slideCount - 1){
    nextBtn.classList.add('disabled');
  }else{
    nextBtn.classList.remove('disabled');
  }
};

nextBtn.addEventListener('click', ()=>{
  goToslide(currentIdx + 1);
});
prevBtn.addEventListener('click', ()=>{
  goToslide(currentIdx - 1);
});

prevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
})
nextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
})

goToslide(0);


// ------ top 버튼 ------
const goToTop = document.querySelector('.go_to_top');

window.addEventListener('scroll',()=>{
  let scrollAmt = window.scrollY;
  if(scrollAmt > 700){
    goToTop.classList.add('on');
  }else{
    goToTop.classList.remove('on');
  }
  
  let fOffsetTop = document.querySelector('footer').offsetTop;
  
  if(window.scrollY >= fOffsetTop - window.innerHeight){
    let bottom = window.scrollY - fOffsetTop + window.innerHeight
    goToTop.style.bottom = bottom+'px';
  }else{
    goToTop.style.bottom = 20+'px';
  }
  
  console.log(window.scrollY);
});

goToTop.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
  
})


  
