export class ECModalService {
  constructor(targetSelector) {
    this.component = targetSelector;
    this.scrollbarWidth = 0;

    this.#hundleButtonClose();
  }

  #hundleButtonClose() {
    const btnClose = this.component.querySelector('button[data-ec-close]');
    if (btnClose) btnClose.addEventListener('click', () => this.close());
  }

  open() {
    this.#createOverlay();

    const event = new CustomEvent('ec:open', { bubbles: true });
    this.component.dispatchEvent(event);
    document.body.style.overflow = 'hidden';
    this.component.style.display = 'flex';
  }

  close() {
    this.#destroyOverlay();
    const event = new CustomEvent('ec:close', { bubbles: true });
    this.component.dispatchEvent(event);
    document.body.style.overflow = 'auto';
    this.component.style.display = 'none';
  }

  #createOverlay() {
    if (this.overlay) return;

    this.overlay = document.createElement('div');
    this.overlay.className = 'ec-modal__overlay';

    this.overlay.addEventListener('click', () => this.close());

    document.body.appendChild(this.overlay);
  }

  #destroyOverlay() {
    if (Boolean(this.overlay) === false) return;

    this.overlay.remove();
    this.overlay = null;
  }
}
