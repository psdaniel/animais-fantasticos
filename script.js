const initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    const activeTab = (index) =>  {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  };
};
initTabNav();

const accordionListFunction = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  const activeAccordion = (event) => {
    console.log(event.currentTarget);
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
};

accordionListFunction();