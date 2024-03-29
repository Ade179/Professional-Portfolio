const hamburger = document.querySelector('.nav-toggle');
const navigator = document.querySelectorAll('.nav-list > a');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('onOpen');
});

navigator.forEach((links) => {
  links.addEventListener('click', () => {
    navigation.classList.remove('onOpen');
    hamburger.classList.remove('active');
  });
});

const projectsArray = [{
  id: 'Card1',
  title: 'Rails Budget App',
  description: `This app focuses on planning a budget for any category a user chooses. it could be music,
                sports, entertainment etc. It helps plan how much
                is needed to fulfil a category.`,
  deskDescription: 'Keeping track of hundreds  of components website',
  image: './images/mobile.png',
  deskImage: './images/mobile.png',
  desktexts: `This app focuses on planning a budget for any category a user chooses. it could be music,
              sports, entertainment etc. It helps plan how much
              is needed to fulfil a category.`,
  languages1: 'Ruby on Rails',
  languages2: 'Ruby',
  languages3: 'Rspec',
  seeLive: 'http://budget-app-g4zl.onrender.com',
  seeSource: 'https://github.com/Ade179/Professional-Portfolio',

},
];

const cardsArray = [
  {
    id: 'Card2',
    title: 'AALA',
    description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
    deskDescription: '',
    image: './images/placeholder.png',
    deskImage: './images/placeholder.png',
    languages1: 'css',
    languages2: 'html',
    languages3: 'javascript',
    seeLive: 'https://ade179.github.io/Professional-Portfolio/',
    seeSource: 'https://github.com/Ade179/Professional-Portfolio',

  },
  {
    id: 'Card3',
    title: 'Professional Art Printing Data',
    description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
    deskDescription: '',
    image: './images/placeholder.png',
    deskImage: './images/placeholder.png',
    languages1: 'css',
    languages2: 'html',
    languages3: 'javascript',
    seeLive: 'https://ade179.github.io/Professional-Portfolio/',
    seeSource: 'https://github.com/Ade179/Professional-Portfolio',
  },

  {
    id: 'Card4',
    title: 'Professional Art Printing Data',
    description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
    deskDescription: '',
    image: './images/placeholder.png',
    deskImage: './images/placeholder.png',
    languages1: 'css',
    languages2: 'html',
    languages3: 'javascript',
    seeLive: 'https://ade179.github.io/Professional-Portfolio/',
    seeSource: 'https://github.com/Ade179/Professional-Portfolio',
  },
  {
    id: 'Card5',
    title: 'Data Dashboard Healthcare',
    description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
    deskDescription: '',
    image: './images/placeholder.png',
    deskImage: './images/placeholder.png',
    languages1: 'css',
    languages2: 'html',
    languages3: 'javascript',
    seeLive: 'https://ade179.github.io/Professional-Portfolio/',
    seeSource: 'https://github.com/Ade179/Professional-Portfolio',
  },
  {
    id: 'Card6',
    title: 'Website Portfolio',
    description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
    deskDescription: '',
    image: './images/placeholder.png',
    deskImage: './images/placeholder.png',
    languages1: 'css',
    languages2: 'html',
    languages3: 'javascript',
    seeLive: 'https://ade179.github.io/Professional-Portfolio/',
    seeSource: 'https://github.com/Ade179/Professional-Portfolio',
  },
  {
    id: 'Card7',
    title: 'Data Dashboard Healthcare',
    description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
    deskDescription: '',
    image: './images/placeholder.png',
    deskImage: './images/placeholder.png',
    languages1: 'css',
    languages2: 'html',
    languages3: 'javascript',
    seeLive: 'https://ade179.github.io/Professional-Portfolio/',
    seeSource: 'https://github.com/Ade179/Professional-Portfolio',
  },
];

// Close Pop up
const closePopup = document.querySelector('.close-button');
closePopup.addEventListener('click', () => {
  document.querySelector('.popupcontainer').classList.remove('extended');
});

// Close Desktop Pop up
const desktclosePopup = document.querySelector('.desktclose-button');
desktclosePopup.addEventListener('click', () => {
  document.querySelector('.desktpopupcontainer').classList.remove('expanded');
});

const stories = document.querySelector('.stories');
stories.textContent = projectsArray[0].title;
const storiesText = document.querySelector('.stories-text');
storiesText.textContent = projectsArray[0].description;
const jsArray = document.querySelectorAll('.js');
jsArray[0].textContent = projectsArray[0].languages1;
jsArray[1].textContent = projectsArray[0].languages2;
jsArray[2].textContent = projectsArray[0].languages3;
3
const firstCardPopUp = document.querySelector('.btnsettings');
firstCardPopUp.addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[0].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[0].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[0].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[0].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});

// Dynamic card section
const myworks = document.querySelector('.MyWorks');
cardsArray.forEach((list) => {
  const div1 = document.createElement('div');
  div1.classList.add('container');
  const div2 = document.createElement('div');
  div2.classList.add('container1');
  const h2 = document.createElement('h2');
  h2.classList.add('cont-header');
  h2.innerText = list.title;
  const p = document.createElement('p');
  p.classList.add('cont-text');
  p.innerText = list.description;
  const ul = document.createElement('ul');
  ul.classList.add('lang');
  const li1 = document.createElement('li');
  li1.classList.add('lingos');
  li1.innerText = list.languages1;
  const li2 = document.createElement('li');
  li2.classList.add('lingos');
  li2.innerText = list.languages2;
  const li3 = document.createElement('li');
  li3.classList.add('lingos');
  li3.innerText = list.languages3;
  const button = document.createElement('button');
  button.classList.add('oversight');
  button.innerText = 'see project';
  div2.appendChild(h2);
  div2.appendChild(p);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div2.appendChild(ul);
  div1.appendChild(div2);
  div1.appendChild(button);
  myworks.appendChild(div1);

  button.addEventListener('click', () => {
    const trackkeeping = document.querySelector('.trackkeeping');
    trackkeeping.textContent = list.title;

    const trackkeepingDesk = document.querySelector('.desktexts');
    trackkeepingDesk.textContent = list.title;

    const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
    desknewLangDesk[0].textContent = list.languages1;
    desknewLangDesk[1].textContent = list.languages2;
    desknewLangDesk[2].textContent = list.languages3;

    const desknewLang = document.querySelectorAll('.desknewLang');
    desknewLang[0].textContent = list.languages1;
    desknewLang[1].textContent = list.languages2;
    desknewLang[2].textContent = list.languages3;

    const imgpopup = document.querySelector('.img-popup');
    imgpopup.src = list.image;

    const imgpopupDesk = document.querySelector('.desktimg-popup');
    imgpopupDesk.src = list.deskImage;

    const thetxt = document.querySelector('.thetxt');
    thetxt.textContent = list.description;

    const thetxtDesk = document.querySelector('.desktthetxt');
    thetxtDesk.textContent = list.description;

    document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
    document.querySelector('.popupcontainer').classList.toggle('extended');
  });


})

// form validation

function valid() {
  const email = document.getElementById('email').value;
  const validatedEmail = email.toLowerCase();
  if (validatedEmail === email) {
    document.querySelector('.error').textContent = '';
    return true;
  }
  document.querySelector('.error').textContent = 'Email address should always be in Lowercase.';
  return false;
}

// stop button default action
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  if (valid() === false) {
    event.preventDefault();
  }
});
