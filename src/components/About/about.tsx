import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';
import styles from './about.scss?inline';
import { Button } from '../Button/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default component$(() => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
    gsap.registerPlugin(ScrollTrigger, SplitType);

    const splitPrimary = new SplitType('.about__content--text', {
      types: 'words',
    });

    const tl = gsap.timeline({
      yoyo: true,
      ease: 'power1.inOut',
    });

    tl.fromTo(
      '.about',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '.about',
        },
        duration: 0.25,
        opacity: 1,
        y: -8,
      }
    )
      .from(
        '.about__content--title',
        {
          duration: 0.25,
          y: -8,
        },
        '>'
      )
      .from(
        splitPrimary.words,
        {
          autoAlpha: 0,
          duration: 1,
          y: -8,
          stagger: 0.05,
        },
        '<'
      )
      .from(
        '.button',
        {
          delay:1,
          scale: 0,
          x: -8,
          duration: 0.5,
        },
        '<'
      );
  });

  return (
    <section class='about section--medium--margin'>
      <div class='about__content  text-columns'>
        <h2 class='col-1--span-4 about__content--title '>About us</h2>
        <p class='col-5--span-5 about__content--text'>
          Our name is the core of our company. We see tomorrow as 'a new day,'
          and an opportunity to make it a better place by working with companies
          that share our vision for a healthier future. That's why we create
          digital products that offer users a new perspective.
        </p>

        <span class='button'>

          <Button
            text='Our studio'
            styles='dark button col-10--span-3'
            linkTo='/'
          />
        </span>
      </div>
    </section>
  );
});
