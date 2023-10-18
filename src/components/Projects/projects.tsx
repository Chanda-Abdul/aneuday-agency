import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './projects.scss?inline';
import ShoeShadowsImg from '~/media/imagery/shoe-shadows.webp?jsx';
import { Button } from '../Button/button';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class='projects section beige-bkgrnd page-grid '>
      <ShoeShadowsImg class='projects__image col-1--span-6' />

      <div class='projects__content col-7--span-6'>
        <h2 class='projects__content--title'>
          A modern ecommerce solution for the shoe industry.
        </h2>
        <p class='projects__content--text'>
          Built with Shopify, we have created a headless solution for companies
          to prepare for the future of e-commerce.
        </p>

        <Button text='Read more' styles='dark button' linkTo='/about' />
      </div>
    </section>
  );
});
