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
  title: 'Multi-Post Stories',
  description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
  deskDescription: 'Keeping track of hundreds  of components website',
  image: './images/bigyellow.png',
  deskImage: './images/bigyellow.png',
  desktexts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages1: 'css',
  languages2: 'html',
  languages3: 'javascript',
  seeLive: 'https://ade179.github.io/Professional-Portfolio/',
  seeSource: 'https://github.com/Ade179/Professional-Portfolio',

},
{
  id: 'Card2',
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
  title: 'website portfolio',
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

// Pop up for the first first card

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

// for second card
const newCardPopup = document.querySelectorAll('.oversight');

newCardPopup[0].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[1].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[1].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[1].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[1].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});

newCardPopup[1].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[2].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[2].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[2].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[1].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});

newCardPopup[2].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[3].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[3].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[3].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[2].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});

newCardPopup[3].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[4].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[4].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[4].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[3].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});

newCardPopup[4].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[5].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[5].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[5].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[4].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});

newCardPopup[5].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[6].title;

  const trackkeepingDesk = document.querySelector('.desktexts');
  trackkeepingDesk.textContent = projectsArray[6].title;

  const desknewLangDesk = document.querySelectorAll('.DdesknewLang');
  desknewLangDesk[0].textContent = projectsArray[0].languages1;
  desknewLangDesk[1].textContent = projectsArray[0].languages2;
  desknewLangDesk[2].textContent = projectsArray[0].languages3;

  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;

  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[6].image;

  const imgpopupDesk = document.querySelector('.desktimg-popup');
  imgpopupDesk.src = projectsArray[5].deskImage;

  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;

  const thetxtDesk = document.querySelector('.desktthetxt');
  thetxtDesk.textContent = projectsArray[0].description;

  document.querySelector('.desktpopupcontainer').classList.toggle('expanded');
  document.querySelector('.popupcontainer').classList.toggle('extended');
});
