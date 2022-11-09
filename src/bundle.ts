import Toast from 'bootstrap/js/dist/toast';

import './scss/app.scss';
import { qs } from './constant';

export default class KonToast {
  static show(msg: string, type: string = 'success') {
    if (!qs('#kontoast')) {
      const parser = new DOMParser();
      const domLoader = `<div id="kontoast" class="toast-container"></div>`;
      document.body.appendChild(
        parser.parseFromString(domLoader, 'text/html').body.firstChild as HTMLElement
      );
    }

    //prettier-ignore
    const dom = `
			<div class="toast-header ${type == 'success' ? 'bg-success' : type == 'warning' ? 'bg-warning' : 'bg-danger'} text-white">
				<div class="hstack gap-1 flex-fill">
          <i class="fa-solid fa-${type == 'success' ? 'circle-check' : type == 'warning' ? 'triangle-exclamation' : 'circle-exclamation'} fs-4"></i>
          <span class="fw-bold text-uppercase fs-7">${type}</span>
        </div>
				<div class="hstack">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
        </div>
			</div>
			<div class="toast-body text-dark text-center fw-bold" style="backdrop-filter: blur(2px); line-height: 1.4;">${msg}</div>
		`;

    const elToast = document.createElement('div');
    elToast.classList.add('toast');
    elToast.innerHTML = dom;
    qs('#kontoast').appendChild(elToast);
    Toast.getOrCreateInstance(elToast).show();
    elToast.addEventListener('hidden.bs.toast', () => elToast.remove());
  }
}
