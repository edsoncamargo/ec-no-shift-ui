import { ECModalService } from './ec-modal.service.js';

function main() {
  const ui = new ECCorp.ECNoShiftUI();
  const serviceModal = setupModal();

  setupEvents(serviceModal, ui);
}

function setupModal() {
  const targetSelector = document.getElementById('ec-modal');
  return new ECModalService(targetSelector);
}

function setupEvents(serviceModal, ui) {
  const btnOpen = document.getElementById('ec-modal-button-open');
  btnOpen.addEventListener('click', () => serviceModal.open());

  const component = serviceModal.component;
  component.addEventListener('ec:open', () => ui.applyNoShiftScrollLock());
  component.addEventListener('ec:close', () => ui.enableBodyScroll());
}

main();
