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

// Refactoring code

// cards objects

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

// action is a container of all projects.
const action = document.querySelector('#action');

// populating cards dynamically using the array object
for (let i = 0; i < cards.length; i += 1) {
  const section = document.createElement('section');
  section.innerHTML = `
<img src="${cards[i].img}" alt="${cards[i].alt}">
<div>
  <h2>${cards[i].title}</h2>
  <ul>
    <li>${cards[i].name}</li>
    <li>${cards[i].desc1}</li>
    <li>${cards[i].desc2}</li>
  </ul>
  <p>${cards[i].description}</p>
  <ul id="lang">
    <li>${cards[i].tech1}</li>
    <li>${cards[i].tech2}</li>
    <li>${cards[i].tech3}</li>
  </ul>
  <button class="btn">${cards[i].btn}</button>
</div>`;
  section.classList.add('card1');
  action.appendChild(section);
}

// Modals
const body = document.getElementsByName('body');
console.log(body);
const openModalBtn = document.querySelectorAll('.btn');

const openModal = (target) => {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div class="modal-content">
    <header class="modal-head">
      <h2 class="modal-header-h2">${cards[target].title}</h2>
      <button modal-close-btn><span class="modal-close">&times;</span></button>
    </header>
    <ul class="modal-first-ul">
      <li class="modal-first-ul-first-child">${cards[target].name}</li>
      <li class="modal-first-ul-child">${cards[target].desc1}</li>
      <li class="modal-first-ul-child">${cards[target].desc2}</li>
    </ul>
    <img src="${cards[target].img}" alt="${cards[target].alt}">
    <div class="modal-seciotn-bottom">
      <div class="modal-paragraphs">
        <p class="modal-content-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br> <br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>      </div>
      <div class="tech-and-btns">
    <ul class="modal-tech-list">
      <li class="modal-tech-list-item">${cards[target].tech1}</li>
      <li class="modal-tech-list-item">${cards[target].tech2}</li>
      <li class="modal-tech-list-item">${cards[target].tech3}</li>
    </ul>
    <div class="modal-buttons">
      <button class="modal-seeLive-btn"><span>See live</span> <img id="see-live-icon" src="./assets/images/Icon - Export.svg" alt="see-live-icon"></button>
      <button class="modal-seeSource-btn"><span>See source</span> <i class="fa-brands fa-github"></i></button>
    </div>
  </div>
  </div>
    `;
  modal.setAttribute('id', 'detail-modal');
  modal.className.add('modal');
  body.appendChild(modal);
};

for (let i = 0; i < openModalBtn.length; i += 1) {
  openModalBtn.addEventListener('click', openModal(i));
}
