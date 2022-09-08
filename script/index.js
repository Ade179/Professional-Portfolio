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
   hamburger.classList.remove('active')
  });
});

const projectsArray = [{
  id: 'Card1',
  title: 'Multi-Post Stories',
  description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
  image: './Images/Gym.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  technology4: 'ruby',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  id: 'Card2',
  title: 'Data-Dashboard',
  title2: 'Healthcare',
  description: `A daily section of privately personalized reads; no accounts or signups
                required It has been the industry's standard.`,
  image: './Images/Card3-Card5-img.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  id: 'Card3',
  title: 'Professional Art',
  title2: 'Printing Data More',
  description: `A daily section of privately personalized reads; no accounts or signups
                required It has been the industry's standard.`,
  image: './Images/Professional art printing.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Card4',
  title: 'Website Portfolio',
  description: `A daily section of privately personalized reads; no accounts or signups
                required It has been the industry's standard.`,
  image: './Images/Professional art printing.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project5',
  title: 'Medical Illustration Sets',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Project 3.png',
  technology1: 'html',
  technology2: 'bootstrap',
  technology3: 'Ruby on rails',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project6',
  title: 'Website Portfolio',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Snapshoot Portfolio.png',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project7',
  title: 'Multi-post Stories',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Snapshoot Portfolio.png',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
]

const stories = document.querySelector('.stories');
stories.textContent = projectsArray[0].title;
const storiesText = document.querySelector('.stories-text');
storiesText.textContent = projectsArray[0].description;
const jsArray = document.querySelectorAll('.js');
jsArray[0].textContent = projectsArray[0].technology1
jsArray[1].textContent = projectsArray[0].technology2
jsArray[2].textContent = projectsArray[0].technology3