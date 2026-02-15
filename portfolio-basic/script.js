const navigationMenu = document.querySelector('.navigation-menu-js');
const section = document.querySelectorAll('section');
const navigationLink = document.querySelectorAll('.navigation-menu-js a');

document.querySelector('.three-dot-icon-js').addEventListener('click', function() {
  navigationMenu.classList.toggle('navigation-menu');
});

navigationLink.forEach(link => {
  link.addEventListener('click', () => {
    navigationMenu.classList.remove('navigation-menu');
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const bodyHeight = document.body.offsetHeight;
  const viewportHeight = window.innerHeight;
  
  section.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      navigationLink.forEach(link => {
        link.classList.remove('active-nav');
        const linkId = link.getAttribute('id').replace('-link', '');
        if (linkId === id) {
          link.classList.add('active-nav');
        }
      });
    }

    const footerHeight = document.querySelector('footer').offsetHeight;
    if (scrollPosition >= bodyHeight - footerHeight - viewportHeight) {
      navigationLink.forEach(link => {
        link.classList.remove('active-nav');
        const linkId = link.getAttribute('id').replace('-link', '');
        if (linkId === 'contact') {
          link.classList.add('active-nav');
        }
      });
    }
  });
});