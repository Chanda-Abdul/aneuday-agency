import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';
import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';
import styles from './button.scss?inline';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

interface ButtonProps {
  text?: string;
  icon?: number;
  linkTo?: string;
  styles?: string;
}

export const Button = component$<ButtonProps>((props) => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
    gsap.registerPlugin(ScrollTrigger);

    function initButtonReveal() {
      const button = document.getElementById('button-reveal');
      const icon = document.getElementById('icon');
      const textContainer = document.getElementById('text-container');

      /* text reveal on scroll, using "GSAP" splitText */
      const splitText = new SplitType('#text-container', { types: 'words' });

      //TO-DO => create GSAP Timeline & add Scroll Trigger
      gsap.from(button, {
        // scale: 0,
        y: 25,
        // transformOrigin: '50% 0%',
        duration: 0.5,
        autoAlpha: 0,
      });

      gsap.from(textContainer, {
        delay: 0.5,
        duration: 0.5,
        y: -25,
        autoAlpha: 0,
      });

      /* Animate words into view */
      gsap.from(splitText.words, {
        delay: 1,
        duration: 1,
        y: 25,
        autoAlpha: 0,
      });

      gsap.from(icon, {
        delay: 2,
        duration: 0.75,
        y: -25,
        autoAlpha: 0,
      });
    }

    initButtonReveal();
  });

  return (
    <a
      href={props.linkTo}
      class={props.styles}
      onClick$={() => console.log('click')}
      id='button-reveal'
    >
      <span id='text-container'>
        <span id='text'>{props.text}</span>
      </span>

      <UpRightArrowIcon id='icon' />
    </a>
  );
});
