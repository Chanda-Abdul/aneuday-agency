import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './footer.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class='footer section dark-bkgrnd'>
      <h1 class='footer__logo'>aneuday</h1>

      <menu class='footer__menu--company'>
        <li>Work</li>
        <li>Studio</li>
        <li>Contact</li>
      </menu>

      <menu class='footer__menu--social'>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>LinkedIn</li>
      </menu>

      <div class='footer__links--attribution'>
        <a href='/privacy'>Privacy</a>
        <a href='/cookies'>Cookies</a>
      </div>

      <p class='footer__links--contact'>Slottsgate 90</p>
      <a href='#' class='footer__links--email'>
        email@company.com
      </a>
    </footer>
  );
});
