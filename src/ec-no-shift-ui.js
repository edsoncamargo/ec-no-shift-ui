export class ECNoShiftUI {
  #originalBodyPaddingRight;
  #originalBodyPaddingBottom;

  constructor() {
    this.#originalBodyPaddingRight = 0;
    this.#originalBodyPaddingBottom = 0;
  }

  applyNoShiftScrollLock() {
    this.#saveOriginalBodyPadding();
    this.#applyHiddenBodyScrollStyles();
  }

  enableBodyScroll() {
    this.#restoreBodyScrollStyles();
  }

  #applyHiddenBodyScrollStyles() {
    const { scrollBarWidth, scrollBarHeight } = this.#getScrollBarDimensions();

    const originalPaddingRight =
      parseFloat(this.#originalBodyPaddingRight) || 0;
    this.#setPaddingRight(originalPaddingRight + scrollBarWidth);

    const originalPaddingBottom =
      parseFloat(this.#originalBodyPaddingBottom) || 0;
    this.#setPaddingBottom(originalPaddingBottom + scrollBarHeight);

    this.#hideOverflow();
  }

  #restoreBodyScrollStyles() {
    this.#showOverflow();
    this.#restorePaddingRight();
    this.#restorePaddingBottom();
  }

  #hideOverflow() {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  }

  #showOverflow() {
    document.body.style.overflowX = '';
    document.body.style.overflowY = '';
  }

  #setPaddingRight(value) {
    document.body.style.paddingRight = `${value}px`;
  }

  #setPaddingBottom(value) {
    document.body.style.paddingBottom = `${value}px`;
  }

  #clearPaddingRight() {
    document.body.style.paddingRight = '';
  }

  #clearPaddingBottom() {
    document.body.style.paddingBottom = '';
  }

  #saveOriginalBodyPadding() {
    this.#saveOriginalPaddingRight();
    this.#saveOriginalPaddingBottom();
  }

  #saveOriginalPaddingRight() {
    const bodyStyle = window.getComputedStyle(document.body);
    this.#originalBodyPaddingRight = bodyStyle.paddingRight;
  }

  #saveOriginalPaddingBottom() {
    const bodyStyle = window.getComputedStyle(document.body);
    this.#originalBodyPaddingBottom = bodyStyle.paddingBottom;
  }

  #restorePaddingRight() {
    if (this.#originalBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = this.#originalBodyPaddingRight;
      this.#originalBodyPaddingRight = undefined;
    } else {
      this.#clearPaddingRight();
    }
  }

  #restorePaddingBottom() {
    if (this.#originalBodyPaddingBottom !== undefined) {
      document.body.style.paddingBottom = this.#originalBodyPaddingBottom;
      this.#originalBodyPaddingBottom = undefined;
    } else {
      this.#clearPaddingBottom();
    }
  }

  #getScrollBarDimensions() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const scrollBarHeight =
      window.innerHeight - document.documentElement.clientHeight;
    return { scrollBarWidth, scrollBarHeight };
  }
}
