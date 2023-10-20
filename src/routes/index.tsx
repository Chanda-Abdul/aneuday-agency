import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/hero/hero';
import About from '~/components/About/about';
import Company from '~/components/Company/company';
import Events from '~/components/Events/events';
import Projects from '~/components/Projects/projects';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';


export default component$(() => {
  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
gsap.registerPlugin(ScrollTrigger);
// const scroll = new LocomotiveScroll();
// gsap.from('#scroll', {  backgroundColor: 'red',})    
// gsap.fromTo('#trigger', {},{
//   backgroundColor: 'rgb(150,200,75)',
//  opacity: 1,
//       scrollTrigger: {
//         // pin: true,
//         id: 'parent',
//         trigger: '#trigger',
//         start: 'top center',
//         scroller: '#scroll',
//         markers: true,
//         scrub: true,
//       },
//     });

    // ScrollTrigger.refresh();
  });

  function initSmoothScroll() {
    /* smooth scroll/locomotive scroll */
  }

  initSmoothScroll();

  return (
    <>
      <div id='scroll'>
        <div id='trigger'>
          <Hero />
        </div>
        <div id='trigger'>
          <About />
        </div>
        <div id='trigger'>
          <Projects />
        </div>
        <div id='trigger'>
          <Events />
        </div>
        <div id='trigger'>
          <Company />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'aneuday',
  meta: [
    {
      name: 'aneuday',
      content: 'aneuday Creative agency',
    },
  ],
};
