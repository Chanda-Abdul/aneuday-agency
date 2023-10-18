import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './company.scss?inline';
import Gallery from '../Gallery/gallery';
import { Button } from '../Button/button';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section class='company section--small--padding dark-bkgrnd page-grid'>
      <div class='company__content'>
        <h2 class='company__content--title col-1--span-4'>Join the studio</h2>

        <p class='company__content--text col-1--span-5'>
          How does a daily group breakfast, 30 days of vacation, a
          remote-friendly office, and our very own dog club sound to you? These
          are some of the things you can expect.
        </p>

        <Button
          text='Open positions'
          styles='light button col-7--span-6'
          linkTo='/company'
        />
      </div>
      <Gallery />
    </section>
  );
});
