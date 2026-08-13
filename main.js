function menuShow() {
  const menuMobile = document.querySelector('.menu-mobile');
  const icon = document.querySelector('.icon');

  if (!menuMobile || !icon) return;

  const isOpen = menuMobile.classList.toggle('open');
  icon.src = isOpen ? 'assets/componentes/close_white_36dp.svg' : 'assets/componentes/menu.svg';
  icon.alt = isOpen ? 'Fechar menu' : 'Abrir menu';
}