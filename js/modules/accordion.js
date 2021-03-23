export default function initAccordion ()  {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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