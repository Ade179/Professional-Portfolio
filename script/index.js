const hamburger = document.querySelector('.nav-toggle');
const navigator = document.querySelectorAll('.nav-list > a');
const navigation = document.querySelector('.navigation'); 00000

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('onOpen');
});

navigator.forEach((links) => {
  links.addEventListener('click', () => {
    navigation.classList.remove('onOpen');
    hamburger.classList.remove('active')
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
  deskImage: './images/snapshoot portfolio.png',
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
  deskImage: '',
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
  deskImage: '',
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
  deskImage: '',
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
  deskImage: '',
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
  deskImage: '',
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
  deskImage: '',
  languages1: 'css',
  languages2: 'html',
  languages3: 'javascript',
  seeLive: 'https://ade179.github.io/Professional-Portfolio/',
  seeSource: 'https://github.com/Ade179/Professional-Portfolio',
},
]


const stories = document.querySelector('.stories');
stories.textContent = projectsArray[0].title;
const storiesText = document.querySelector('.stories-text');
storiesText.textContent = projectsArray[0].description;
const jsArray = document.querySelectorAll('.js');
jsArray[0].textContent = projectsArray[0].languages1
jsArray[1].textContent = projectsArray[0].languages2
jsArray[2].textContent = projectsArray[0].languages3


// Pop up for the first first card
const firstCardPopUp = document.querySelector('.btnsettings');
firstCardPopUp.addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[0].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[0].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})
// Close Pop up
const closePopup = document.querySelector('.close-button');
closePopup.addEventListener('click', () => {
  document.querySelector('.popupcontainer').classList.remove('extended');
});

//for second card
const newCardPopup = document.querySelectorAll('.oversight');
newCardPopup[0].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[1].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[1].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[0].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})
newCardPopup[1].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[2].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[2].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[2].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})
newCardPopup[2].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[3].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[3].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[3].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})
newCardPopup[3].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[4].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[4].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[4].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})
newCardPopup[4].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[5].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[5].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[5].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})
newCardPopup[5].addEventListener('click', () => {
  const trackkeeping = document.querySelector('.trackkeeping');
  trackkeeping.textContent = projectsArray[6].title;
  const desknewLang = document.querySelectorAll('.desknewLang');
  desknewLang[0].textContent = projectsArray[0].languages1;
  desknewLang[1].textContent = projectsArray[0].languages2;
  desknewLang[2].textContent = projectsArray[0].languages3;
  const imgpopup = document.querySelector('.img-popup');
  imgpopup.src = projectsArray[6].image;
  const thetxt = document.querySelector('.thetxt');
  thetxt.textContent = projectsArray[6].description;
  document.querySelector('.popupcontainer').classList.toggle('extended');
})


const seeproject0 = document.querySelector('#first');
const seeProject = document.querySelector('#seeproject');
const seeProject1 = document.querySelector('#seeproject1');
const seeProject2 = document.querySelector('#seeproject2');
const seeProject3 = document.querySelector('#seeproject3');
const seeProject4 = document.querySelector('#seeproject4');
const seeProject5 = document.querySelector('#seeproject5');


seeProject1.addEventListener('click', ()=> {
  const desktexts = document.querySelector('.desktexts')
  desktexts.textContent = projectsArray[0].title
  document.querySelector('.deskpopupcontainer').classList.toggle('desktopclick');
})
 // Close Pop up
 const desktclosePopup = document.querySelector('.desktclose-button');
 desktclosePopup.addEventListener('click', () => {
   document.querySelector('.desktpopupcontainer').classList.toggle('desktopclicks');
 });


 const desktexts = document.querySelector('.desktexts')
 desktexts.textContent = projectsArray[0].deskDescription
 const DdesknewLang = document.querySelectorAll ('.DdesknewLang');
 DdesknewLang[0].textContent = projectsArray[1].languages1;
 DdesknewLang[1].textContent = projectsArray[1].languages2;
 DdesknewLang[2].textContent = projectsArray[1].languages3;
 const desktimgPopup = document.querySelector ('.desktimg-popup')
 desktimgPopup.src = projectsArray[0].deskImage
 const desktthetxt = document.querySelector ('.desktthetxt')
 desktthetxt.textContent = projectsArray[0].desktexts;
 document.querySelector('.deskpopupcontainer').classList.toggle('desktopclick');