export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeStatus = 'ativo';

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeStatus);

    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove(activeStatus);
      });
      const animeDirection = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeStatus, animeDirection);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
