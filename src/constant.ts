export const qs = document.querySelector.bind(document);
export const qsa = document.querySelectorAll.bind(document);

export interface IOption {
  type?: string;
  text: string;
  title: string;
  delay?: string | number;
  autohide?: string | boolean;
}
