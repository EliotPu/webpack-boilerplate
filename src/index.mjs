// @ts-check

/**
 *
 * @param {*} text content for heading
 * @returns
 */
function component(text) {
  const element = document.createElement('h1');

  element.textContent = text;

  return element;
}

document.body.prepend(component('The project is built on Webpack'));
