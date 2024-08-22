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


// ------ BRAND 슬라이드 ------

let slideWrapper = document.querySelector('.brand .slide_wrapper');
let slidesContainer = slideWrapper.querySelector('ul');
let slides = slidesContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = slideWrapper.querySelector('#prev');
let nextBtn = slideWrapper.querySelector('#next');
let timer;

function debounce(callback, time){
  let slideTrigger = true;
  return (e)=>{
    if(slideTrigger) {
      callback(e);
      slideTrigger = false;
      setTimeout(()=>{
        slideTrigger = true;
      }, time);
    }
  };
}

function setLayout(){
  let slideWidth = slideWrapper.offsetWidth;
  slidesContainer.style.transform = `translateX(-${slideWidth*slideCount}px)`;
}
setLayout();

window.addEventListener('resize',()=>{
  setLayout();
})

for (let i = 0; i < slideCount; i++) {
  let cloneSlide = slides[i].cloneNode(true);
  slidesContainer.appendChild(cloneSlide);
}
for (let s = slideCount - 1; s >= 0; s--) {
  let cloneSlide = slides[s].cloneNode(true);
  slidesContainer.prepend(cloneSlide);
}

let allslides = slidesContainer.querySelectorAll('li');

allslides.forEach((slide,idx)=>{
  slide.style.left = `${idx * 100}%`;
});

function goToslide(num){
  slidesContainer.style.left = `${-num * 100}%`;
  currentIdx = num;

  for(let sl of allslides){
    sl.classList.remove('active');
  };
  allslides[slideCount + num].classList.add('active');

  if(num >= slideCount){
    for(let sl of allslides){
      sl.classList.remove('active');
    };
    allslides[slideCount].classList.add('active');
    currentIdx = slideCount;
    
    setTimeout(()=>{
      slidesContainer.style.transition = 'none';
      slidesContainer.classList.remove('animated');
      slidesContainer.style.left = 0;
      currentIdx = 0;
    }, 300);
    setTimeout(()=>{
      slidesContainer.style.transition = 'left 0.3s';
      slidesContainer.classList.add('animated');
    }, 400);
  }

  if (currentIdx === slideCount - 1) {
    setTimeout(() => {
      slidesContainer.classList.remove('animated');
      slidesContainer.style.left = `${(slideCount - 1) * -100}%`;
      currentIdx = slideCount - 1;
    }, 300);
    
    setTimeout(() => {
      slidesContainer.classList.add('animated');
    }, 400);
  }
}
goToslide(0);


nextBtn.addEventListener('click',debounce((e)=>{
  e.preventDefault();
  goToslide(currentIdx + 1);
}, 300));

prevBtn.addEventListener('click',debounce((e)=>{
  e.preventDefault();
  goToslide(currentIdx - 1);
}, 300));

function AutoSlide(){
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1)% slideCount;
    goToslide(nextIdx);
  }, 5000);
}

AutoSlide();

slideWrapper.addEventListener('mouseenter',()=>{
  clearInterval(timer);
})
slideWrapper.addEventListener('mouseleave',()=>{
  AutoSlide();
})

// ------ YOUTUBE 슬라이드 ------
let yslideWrapper = document.querySelector('.youtube .slide-wrapper');
let yslidesContainer = yslideWrapper.querySelector('.slides');
let yslides = yslidesContainer.querySelectorAll('li');
let yslideCount = yslides.length;
let yslideWidth = 450;
let yslideGap = 20;
let ymaxSlides = 3;
let ynext = document.querySelector('#youtube-next');
let yprev = document.querySelector('#youtube-prev');

let slidesHTML = yslidesContainer.innerHTML;
let clonedSlidesHTML = slidesHTML.replace(/<li>/g,'<li class="clone">');
yslidesContainer.innerHTML = clonedSlidesHTML + yslidesContainer.innerHTML;
yslidesContainer.innerHTML += clonedSlidesHTML;

let yallSlideCount = yslidesContainer.querySelectorAll('li').length;

yslidesContainer.style.width = (yslideWidth*yallSlideCount)+(yslideGap*(yallSlideCount-1))+'px';

let ymoveAmount = yslideWidth*yslideCount+yslideGap*yslideCount;
yslidesContainer.style.transform = `translateX(-${ymoveAmount}px)`;

function moveSlide(num){
  yslidesContainer.style.left = `${-num*(yslideWidth+yslideGap)}px`
  currentIdx = num;

  if(currentIdx === yslideCount*2-ymaxSlides){
    setTimeout(()=>{
      yslidesContainer.classList.remove('animated');
      yslidesContainer.style.left = `-${(num-yslideCount)*(yslideWidth+yslideGap)}px`;
      currentIdx = num-yslideCount;
    }, 400);
    setTimeout(()=>{
      yslidesContainer.classList.add('animated');
    }, 500)
  }
  if(currentIdx === -yslideCount){
    setTimeout(()=>{
      yslidesContainer.classList.remove('animated');
      yslidesContainer.style.left = '0px';
      currentIdx = 0;
    }, 400);
    setTimeout(()=>{
      yslidesContainer.classList.add('animated');
    }, 500)
  }
}
ynext.addEventListener('click',()=>{
  if(currentIdx < (yslideCount - ymaxSlides)){
    moveSlide(currentIdx + 1);
  }else{
    moveSlide(0);
  }
});
yprev.addEventListener('click',()=>{
  if(currentIdx > 0){
    moveSlide(currentIdx - 1);
  }else{
    moveSlide(yslideCount - ymaxSlides);
  }
});
ynext.addEventListener('click',(e)=>{
  e.preventDefault();
})
yprev.addEventListener('click',(e)=>{
  e.preventDefault();
})

function AutoSlide2(){
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1)% yslideCount;
    moveSlide(nextIdx);
  }, 4000);
}
AutoSlide2();


// ------ top 버튼 ------

const goToTop = document.querySelector('.go_to_top');

window.addEventListener('scroll',()=>{
  let scrollAmt = window.scrollY;
  if(scrollAmt > 700){
    goToTop.style.transition = 'opacity 0.3s linear';
    goToTop.style.transition = 'right 0.5s';
    goToTop.classList.add('on');
  }else{
    goToTop.classList.remove('on');
  }
  let fOffsetTop = document.querySelector('footer').offsetTop;
  
  if(window.scrollY >= fOffsetTop - window.innerHeight){
    let bottom = window.scrollY - fOffsetTop + window.innerHeight + 20
    goToTop.style.bottom = bottom+'px';
  }else{
    goToTop.style.bottom = 50+'px';
  }
})

goToTop.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
});

// ------ COOKIE ------

const popup = document.querySelector('.popup');
const check = document.querySelector('#check');
const button = document.querySelector('.cookie button');

button.addEventListener('click', () => {
  console.log('버튼 클릭됨!');
  console.log(check.checked);
  if (check.checked) {
    setCookie('popup-dismissed', 'true', 1);
  } else {
    delCookie('popup-dismissed');
  }
  popup.classList.remove('show');
});

function setCookie(name, val, days) {
  let date = new Date();
  date.setDate(date.getDate() + days);

  let cookieString = `${name}=${val};expires=${date.toUTCString()};path=/`;
  document.cookie = cookieString;
}

function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  let cookieString = `${name}=;expires=${date.toUTCString()};path=/`;
  document.cookie = cookieString;
}

function checkCookie(name) {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const cookieFound = cookies.some(cookie => cookie.startsWith(`${name}=`));
  
  if (!cookieFound) {
    popup.classList.add('show');
  }
}

checkCookie('popup-dismissed');