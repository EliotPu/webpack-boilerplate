// @ts-check

import '@styles/variables/root/colors.css';
import '@fonts/roboto-v30-cyrillic_latin/style.css';
import '@styles/commons/common.css';

import submitBtnStyle from '@styles/blocks/button/submit_button.css';

import md from '../README.md';

/**
 *
 * @param {*} text content for heading
 * @returns
 */
export default function component(text) {
  const element = document.createElement('h1');

  element.textContent = text;

  return element;
}

const btn = document.createElement('button');

btn.textContent = 'add header';
btn.className = submitBtnStyle.submitButton;

btn.onclick = async () => {
  const { default: exemple } = await import(/* webpackChunkName: "exemple" *//* webpackPrefetch: true */`./components/exemple/index.mjs`);

  document.body.prepend(exemple('Component Example'));
};

const $fragment = document.createElement('div');

$fragment.innerHTML = md;

document.body.prepend(btn, $fragment);
