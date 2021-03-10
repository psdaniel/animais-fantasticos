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
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  };
};

initAccordion();