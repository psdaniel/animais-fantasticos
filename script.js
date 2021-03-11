const initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  const activeStatus = 'ativo';

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeStatus);

    const activeTab = (index) =>  {
      tabContent.forEach((section) => {
        section.classList.remove(activeStatus);
      });
      tabContent[index].classList.add(activeStatus);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  };
};
initTabNav();

const initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeStatus = 'ativo';

  if (accordionList.lenght) {
    accordionList[0].classList.add(activeStatus);
    accordionList[0].nextElementSibling.classList.add(activeStatus);

    const activeAccordion = (event) => {
      event.currentTarget.classList.toggle(activeStatus);
      event.currentTarget.nextElementSibling.classList.toggle(activeStatus);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  };
};

initAccordion();

const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // forma alternativa
    //const topo = section.offsetTop;
    //window.scrollTo({
     // top: topo,
     // behavior: 'smooth',
    //})

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
};

initScrollSuave();

const initAnimeScroll = () => {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    };

    animaScroll();

    window.addEventListener('scroll', animaScroll)
  };
};

initAnimeScroll();