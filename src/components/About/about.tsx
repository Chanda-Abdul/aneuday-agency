import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.scss?inline';

import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';

// export interface AboutProps {}

export default component$(() => {
  {
    /* <AboutProps>((props)  */
  }

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

        <a href='/' class='button button--dark col-10--span-3'>
          <span>
            <span>Our studio</span>
          </span>

          <UpRightArrowIcon />
        </a>
      </div>
    </section>
  );
});
