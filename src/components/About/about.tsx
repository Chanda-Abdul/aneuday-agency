import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.scss?inline';
import { Button } from '../Button/button';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class='about section--medium--margin'>
      <div class='about__content page-grid text-columns'>
        <h2 class='col-1--span-4 about__content--title '>About us</h2>
        <p class='col-5--span-5 about__content--text'>
          Our name is the core of our company. We see tomorrow as 'a new day,'
          and an opportunity to make it a better place by working with companies
          that share our vision for a healthier future. That's why we create
          digital products that offer users a new perspective.
        </p>

        <Button
          text='Our studio'
          styles='dark button col-10--span-3'
          linkTo='/'
        />
      </div>
    </section>
  );
});
