import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './company.scss?inline';
import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';
import { Gallery } from '../Gallery/gallery';

export interface CompanyProps {}

export const Company = component$<CompanyProps>((props) => {
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

        <a href='/' class='button button--light col-7--span-6'>
          <span>
            <span>Open positions</span>
          </span>

          <UpRightArrowIcon />
        </a>
      </div>
      <Gallery />
    </section>
  );
});
