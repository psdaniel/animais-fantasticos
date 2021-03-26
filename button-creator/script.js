const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  }
}

function handleChange(event) {
  const eventName = event.target.name;
  const eventValue = event.target.value;

  handleStyle[eventName](eventValue);
  saveValues(eventName, eventValue);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(property => {
    handleStyle[property](localStorage[property]);
    controles.elements[property].value = localStorage[property];
  })
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}