import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';

import styles from './hero.scss?inline';

import StretchItOutImg from '~/media/imagery/stretch-it-out.webp?jsx';
import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';
import PlayButtonIcon from '~/media/icons/play-btn.svg?jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
    gsap.registerPlugin(ScrollTrigger);

    function initTextReveal() {
      /* text reveal on scroll, using GSAP splitText */
      const split = new SplitType('#text', { types: 'words' });

      /* Animate characters into view with a stagger effect */
      gsap.from(split.words, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    }

    initTextReveal();
  });

  return (
    <section class='hero section section--medium--margin'>
      <p class='hero__content' id='text'>
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
