let direct = document.querySelector('.direct');
let github = document.querySelector('a');

direct.addEventListener('click',()=>{
  window.location.href = 'https://princesp.github.io/prince-slandingpage';
});

github.addEventListener('click',()=>{
  window.location.href = 'https://github.com/princesp';
});

particlesJS.load('particles-js', 'particles.json',
function(){
  console.log('particles.json loaded...')
});
