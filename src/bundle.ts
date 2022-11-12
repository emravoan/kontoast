import Toast from 'bootstrap/js/dist/toast';

import './scss/app.scss';
import { IOption, qs } from './constant';

export default class KonToast {
  static show(option: IOption) {
    if (!qs('#kontoast')) {
      document.body.appendChild(
        new DOMParser().parseFromString(`<div id="kontoast" class="toast-container"></div>`, 'text/html').body.firstChild as HTMLElement
      );
    }

    // prettier-ignore
    const dom = `
      <div class="toast-header ${option.type == 'success' ? 'bg-success' : option.type == 'warning' ? 'bg-warning' : 'bg-danger'} text-white">
        <div class="hstack gap-1 flex-fill">
          <i class="fa-solid fa-${option.type == 'success' ? 'circle-check' : option.type == 'warning' ? 'triangle-exclamation' : 'circle-exclamation'} fs-4"></i>
          <span class="fw-bold text-uppercase fs-7">${option.title}</span>
        </div>
        <div class="hstack">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
        </div>
      </div>
      <div class="toast-body text-dark text-center fw-bold" style="backdrop-filter: blur(2px); line-height: 1.4;">${option.text}</div>
    `;

    const elToast = document.createElement('div');
    elToast.classList.add('toast');
    elToast.innerHTML = dom;
    qs('#kontoast').appendChild(elToast);
    Toast.getOrCreateInstance(elToast).show();
    elToast.addEventListener('hidden.bs.toast', () => elToast.remove());
  }

  static success(option = { title: '', text: '' }) {
    KonToast.show({
      title: option.title,
      text: option.text,
      type: 'success'
    });
  }

  static warning(option: { title: '', text: '' }) {
    KonToast.show({
      title: option.title,
      text: option.text,
      type: 'warning'
    });
  }

  static error(option: { title: '', text: '' }) {
    KonToast.show({
      title: option.title,
      text: option.text,
      type: 'error'
    });
  }
}
