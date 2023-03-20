import Toast from 'bootstrap/js/dist/toast';

import './scss/app.scss';
import { IOption, qs } from './constant';

export default class KonToast {
  static show(option: IOption) {
    // prettier-ignore
    if (!qs('#kontoast')) {
      document.body.appendChild(new DOMParser().parseFromString(`<div id="kontoast" class="toast-container"></div>`, 'text/html').body.firstChild as HTMLElement);
    }

    // prettier-ignore
    const icons = {
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>',
    }

    // prettier-ignore
    const dom = `
      <div class="toast-header ${option.type == 'success' ? 'bg-success' : option.type == 'warning' ? 'bg-warning' : 'bg-danger'}">
        <div class="hstack gap-1 flex-fill">
          ${option.type == 'success' ? icons.success : option.type == 'warning' ? icons.warning : icons.error}
          <span>${option.title}</span>
        </div>
        <div class="hstack">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
        </div>
      </div>
      <div class="toast-body">${option.text}</div>
    `;

    const elToast = document.createElement('div');
    elToast.classList.add('toast');
    elToast.setAttribute('role', 'alert');
    elToast.setAttribute('data-bs-delay', `${option.delay || '5000'}`);
    elToast.setAttribute('data-bs-autohide', `${option.autohide || 'true'}`);

    elToast.innerHTML = dom;
    qs('#kontoast').appendChild(elToast);
    Toast.getOrCreateInstance(elToast).show();
    elToast.addEventListener('hidden.bs.toast', () => elToast.remove());
  }

  static success(option: IOption) {
    KonToast.show({
      ...option,
      type: 'success',
    });
  }

  static warning(option: IOption) {
    KonToast.show({
      ...option,
      type: 'warning',
    });
  }

  static error(option: IOption) {
    KonToast.show({
      ...option,
      type: 'error',
    });
  }
}
