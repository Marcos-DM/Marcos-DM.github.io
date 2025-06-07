function menuShow() {
      const menuMobile = document.querySelector('.menu-mobile');
      const icon = document.querySelector('.icon');
      if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/componentes/menu_white_36dp.svg";
      } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/componentes/close_white_36dp.svg";
      }
    }