let topNav = document.querySelector('.top_nav');
let nav = document.querySelector('.top_nav div');
let gnb = nav.querySelector('nav');
let logo = nav.querySelector('#logo');
let largeLogo = 'img/Header_Top_LOGO_white.svg';
let smallLogo = 'img/LOGO_red.svg';

window.addEventListener('scroll',()=>{
  if(window.scrollY > 1000){
    if(!nav.classList.contains('shrink')){
      nav.classList.add('shrink');
      changeLogo(smallLogo);
    }
    if(!gnb.classList.contains('shrink')){
      gnb.classList.add('shrink');
    }
    if(!logo.classList.contains('shrink')){
      logo.classList.add('shrink');
    }
    if(!topNav.classList.contains('shrink')){
      topNav.classList.add('shrink');
    }
    }else{
      nav.classList.remove('shrink');
      gnb.classList.remove('shrink');
      logo.classList.remove('shrink');
      topNav.classList.remove('shrink');
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
