import { component$, useVisibleTask$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/hero/hero';
import About from '~/components/About/about';
import Company from '~/components/Company/company';
import Events from '~/components/Events/events';
import Projects from '~/components/Projects/projects';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';


export default component$(() => {
  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
    gsap.registerPlugin(ScrollTrigger);

    const container = document.getElementById('smooth-scroll');
    // gsap.set(container, { autoAlpha: 0 });
    function initSmoothScroll() {
      /* smooth scroll/locomotive scroll */

      /*  Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll*/
      const locoScroll = new LocomotiveScroll({
        el: container,
        smooth: true,
      });

      /* each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning) */ locoScroll.on(
        'scroll',
        ScrollTrigger.update
      );

      /* tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things */ ScrollTrigger.scrollerProxy(
        container,
        {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
              : locoScroll.scroll.instance.scroll.y;
          },
          // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },

          /* LocomotiveScroll handles things completely differently on mobile devices 
      - it doesn't even transform the container at all! 
      So to get the correct behavior and avoid jitters, 
      we should pin things with position: fixed on mobile. 
      We sense it by checking to see if there's a transform applied to the container 
      (the LocomotiveScroll-controlled element).
      */
          pinType: container?.style.transform ? 'transform' : 'fixed',
        }
      );

      /* each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.*/
      ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
      ScrollTrigger.defaults({ scroller: container });

      /*after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.*/
      ScrollTrigger.refresh();
    }

    initSmoothScroll();


  });

  return (
    <>
      <div id='smooth-scroll' data-scroll-container>
        <Hero data-scroll-section />
        <About data-scroll-section />
        <Projects data-scroll-section />
        <Events data-scroll-section />
        <Company />
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
