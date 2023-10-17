import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './header.scss?inline';
import MenuIcon from '~/media/icons/menu-icon.svg?jsx';
export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class='header'>
   
        <a href='/' class='header__logo' title='qwik'><h1>aneuday</h1></a>
        <button class='header__menu'>
          <MenuIcon />
          {/* <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div> */}
        </button>
 
    </header>
  );
});
