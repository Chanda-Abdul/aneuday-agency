import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './hero.scss?inline';

import StretchItOutImg from '~/media/imagery/stretch-it-out.jpeg?jsx';
import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';
import PlayButtonIcon from '~/media/icons/play-btn.svg?jsx';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class='hero section section--medium--margin'>
      <p class='hero__content'>
        A digital
        <span> design</span> and <span>technology studio</span> located in
        <span> Oslo</span>. We build <span>brands</span>, create
        <span> digital experiences</span>, and shape the
        <span> stories of tomorrow</span>.
      </p>

      <a href='/' class='button button--dark'>
        
        <span>See our work</span>

        <UpRightArrowIcon />
      </a>

      <div class='hero__controls section--medium--margin'>
       
        <StretchItOutImg class='hero__controls--image' />

        <div class='hero__controls--play'>
          
          <PlayButtonIcon />

          <h2 class='hero__controls--text'>Watch showreel</h2>
        </div>
      </div>
    </section>
  );
});
