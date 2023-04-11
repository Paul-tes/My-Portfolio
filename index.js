let menue = document.querySelector('.menue-btn')
let closeBtn = document.querySelector('.close-btn');
let prot = document.querySelector('#portfolio-from-mob');
let about = document.querySelector('#about-from-mob');
let cont = document.querySelector('#contact-from-mob');

// event fucntion
const btnEvent = ()=> {
  let logo = document.querySelector('#logo');
  let menue_btn = document.querySelector('.menue-btn');
  let mob_top = document.querySelector('#section-top');
  let mobile_menue = document.querySelector('.mobile-menue-active');
  let se1 = document.querySelector('#contact');
  let se2 = document.querySelector('#action');
  let se3 = document.querySelector('#about');
  if(mobile_menue.classList.contains('display-menue'))
  {
    menue_btn.classList.remove('hidden');
    logo.classList.remove('hidden');
    mobile_menue.classList.remove('display-menue');
    mob_top.classList.remove('blur');
    se1.classList.remove('display-none');
    se2.classList.remove('display-none');
    se3.classList.remove('display-none');
  } else {
    menue_btn.classList.add('hidden');
    logo.classList.add('hidden');
    mob_top.classList.add('blur');
    mobile_menue.classList.add('display-menue');
    se1.classList.add('display-none');
    se2.classList.add('display-none');
    se3.classList.add('display-none');
  }
}

// events
menue.addEventListener('click', btnEvent);
closeBtn.addEventListener('click', btnEvent);
prot.addEventListener('click', btnEvent);
about.addEventListener('click', btnEvent);
cont.addEventListener('click', btnEvent);