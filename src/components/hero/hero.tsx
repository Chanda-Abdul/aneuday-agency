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
    gsap.registerPlugin(ScrollTrigger, SplitType);

    // gsap.fromTo(
    //   '.hero',
    //   { autoAlpha: 0 },
    //   {
    //     // start the animation when ".hero" enters the viewport (once)
    //     scrollTrigger: { trigger: '.hero', scrub: 1 },
    //     duration: 2,
    //     pin: true,
    //     opacity: 1,
    //     y: -50,
    //   }
    // );

    // const content = document.querySelector('.hero');

    // const img = document.getElementById('hero-img');
    const splitPrimary = new SplitType('#text', { types: 'words' });

    const splitSecondary = new SplitType('#text-secondary', {
      types: 'words',
    });
    // gsap.from(content, {
    //         autoAlpha: 0,
    //         y: -25,
    //       });

    const tl = gsap.timeline({
      defaults: {
        autoAlpha: 0,
        // yoyo: true,
        //  ease: 'linear'
        //  ease: "power1.inOut",
      },
    });

    tl.from('.hero', {
   
    })
      .from(splitPrimary.words, {
        duration: 0.5,
        y: -8,
        stagger: 0.05,
      })
      .from(
        splitSecondary.words,
        {
          duration: 1,
          y: -16,
          stagger: 0.1,
        },
        '<'
      )
      .from(
        '.hero__controls',
        {
           scrollTrigger: {
            trigger: '.hero__controls',
            scrub: 1,
          },
          duration: 1,
          opacity: 1,
          y: -50,
        }
      )
      .to('.hero__controls--image', {
        yPercent: -20,
        ease: 'none',
        opacity: 1,
        scrollTrigger: {
          trigger: '.hero__controls',
          start: 'top bottom', // the default values
          end: 'bottom end',
          scrub: true,
        },
      });

    // .from(".hero__controls", {
    //   delay: .25,
    //   duration: .5,}, ">")
  });

  return (
    <section class='hero section section--medium--margin' data-scroll>
      <p class='hero__content' id='text'>
        A digital <span id='text-secondary'>design</span> and{' '}
        <span id='text-secondary'>technology studio</span> located in{' '}
        <span id='text-secondary'> Oslo</span>. We build{' '}
        <span id='text-secondary'>brands</span>, create{' '}
        <span id='text-secondary'> digital experiences,</span> and shape the{' '}
        <span id='text-secondary'> stories of tomorrow</span>.
      </p>

      <Button text='See our work' styles='dark button' linkTo='/work' />

      <div class='hero__controls section--medium--margin'>
        <div class='hero__controls--content'>
          <StretchItOutImg class='hero__controls--image' id='hero-img' />

          <div class='hero__controls--play'>
            <PlayButtonIcon />

            <h2 class='hero__controls--text'>Watch showreel</h2>
          </div>
        </div>
      </div>
    </section>
  );
});
