export default function initAnimaNumeros() {
  function animaNumeros() {
    const numbers = document.querySelectorAll('[data-numero]');
  
    numbers.forEach(number => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100);
  
      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random())
    });
  };
  
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  
  const observeTarget = document.querySelector('.numeros')
  
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observeTarget, {attributes: true});
}

