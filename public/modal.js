
  function openModal(element) {
    const modal = document.getElementById(element)
    modal.classList.add('is-active');
  }

  function closeModal(element) {
    const modal = document.getElementById(element)
    modal.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  