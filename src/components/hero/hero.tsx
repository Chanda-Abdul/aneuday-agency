import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';

import styles from './hero.scss?inline';
import StretchItOutImg from '~/media/imagery/stretch-it-out.webp?jsx';
import PlayButtonIcon from '~/media/icons/play-btn.svg?jsx';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import { Button } from '../Button/button';

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
    gsap.registerPlugin(ScrollTrigger);

    function initTextReveal() {
      /* text reveal on scroll, using "GSAP" splitText */
      const content = document.querySelector('.hero');
      const splitPrimary = new SplitType('#text', { types: 'words' });

      const splitSecondary = new SplitType('#text-secondary', {
        types: 'words',
      });

      gsap.from(content, {
        autoAlpha: 0,
        y: -25,
      })
      /* Animate characters into view with a stagger effect */
      gsap.from(splitPrimary.words, {
        duration: 1,
        y: 10,
        autoAlpha: 0,
        stagger: 0.05,
      });
      gsap.from(splitSecondary.words, {
        delay: 0.25,
        duration: 1.5,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    }

    initTextReveal();
  });

  return (
    <section class='hero section section--medium--margin' data-scroll>
      <p class='hero__content' id='text'>
        A digital <span id='text-secondary'>design</span> and{' '}
        <span id='text-secondary'>technology studio</span> located in{' '}
        <span id='text-secondary'> Oslo</span>. We build{' '}
        <span id='text-secondary'>brands</span>, create{' '}
        <span id='text-secondary'> digital experiences</span>, and shape the{' '}
        <span id='text-secondary'> stories of tomorrow</span>.
      </p>

      <Button text='See our work' styles='dark button' linkTo='/work' />

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
