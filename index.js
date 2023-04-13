const menue = document.querySelector('.menue-btn');
const closeBtn = document.querySelector('.close-btn');
const prot = document.querySelector('#portfolio-from-mob');
const about = document.querySelector('#about-from-mob');
const cont = document.querySelector('#contact-from-mob');

// event fucntion
function btnEvent() {
  const logo = document.querySelector('#logo');
  const menueBtn = document.querySelector('.menue-btn');
  const mobTop = document.querySelector('#section-top');
  const mobMenue = document.querySelector('.mobile-menue-active');
  const se1 = document.querySelector('#contact');
  const se2 = document.querySelector('#action');
  const se3 = document.querySelector('#about');
  if (mobMenue.classList.contains('display-menue')) {
    menueBtn.classList.remove('hidden');
    logo.classList.remove('hidden');
    mobMenue.classList.remove('display-menue');
    mobTop.classList.remove('blur');
    se1.classList.remove('display-none');
    se2.classList.remove('display-none');
    se3.classList.remove('display-none');
  } else {
    menueBtn.classList.add('hidden');
    logo.classList.add('hidden');
    mobTop.classList.add('blur');
    mobMenue.classList.add('display-menue');
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

const cards = [
  {
    title: 'Tonic',
    name: 'CANOPY',
    desc1: 'Back End Dev',
    desc2: '2023',
    img: './assets/images/Snapshoot Portfolio_1.png',
    alt: 'phto-tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    btn: 'See project',
  },
  {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    desc1: 'Back End Dev',
    desc2: '2023',
    img: './assets/images/Snapshoot Portfolio(3).png',
    alt: 'phorfoio-snap',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    btn: 'See project',
  },
  {
    title: 'Facebook 360',
    name: 'FACEBOOK',
    desc1: 'Back End Dev',
    desc2: '2023',
    img: './assets/images/Snapshoot Portfolio.png',
    alt: 'phto-tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    btn: 'See project',
  },
  {
    title: 'Uber Navigation',
    name: 'Uber',
    desc1: 'Back End Dev',
    desc2: '2023',
    img: './assets/images/Snapshoot Portfolio(1).png',
    alt: 'phto-uber',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    btn: 'See project',
  },
];
