import style from './assets/style/style.css';
import appStyles from '@styles/blocks/app/app.css';

import imgCss from './assets/images/css.png';
import leaf from '@icons/leaf.svg';
import lightning from '@icons/lightning.svg';
import iconsRaw from './assets/icons/leaf.svg?raw';

console.log(style);

/**
 *
 * @param {*} text content for heading
 * @returns
 */
export default function (text) {
  const element = document.createElement('h2');

  element.classList.add(style.exemple, appStyles.app);
  element.innerHTML = `
    <div class="${appStyles.app}">
      <div class="${appStyles.header}">
        <img src="${imgCss}" class="${appStyles.logo}" alt="logo" />
        <h2>Welcome to webpack-boilerplate</h2>
      </div>
      <p class="${appStyles.intro}">
        ${text}
        <img src="${leaf}" alt="leaf" class="${style.icon}">
        <img src="${lightning}" alt="leaf" class="${style.icon}">
        <i class="${style.icon}">${iconsRaw}</i>
      </p>
    </div>
  `;

  return element;
}
