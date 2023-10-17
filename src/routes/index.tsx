import { component$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/hero/hero';
import About from '~/components/About/about';
import Company from '~/components/Company/company';
import Events from '~/components/Events/events';
import Projects from '~/components/Projects/projects';



export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Events/>
      <Company />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
