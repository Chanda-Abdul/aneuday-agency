import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './projects.scss?inline';
import ShoeShadowsImg from '~/media/imagery/shoe-shadows.webp?jsx';
import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';
  
// export interface ProjectsProps {}

export default component$(() => {
  //  component$<ProjectsProps>((props) => {
  useStylesScoped$(styles);

  return (
    <section class='projects section beige-bkgrnd page-grid '>

    
            <ShoeShadowsImg  class='projects__image col-1--span-6'/>
      
          <div class='projects__content col-7--span-6'>
   
              <h2 class='projects__content--title'>
                A modern ecommerce solution for the shoe industry.
              </h2>
              <p class='projects__content--text'>
                Built with Shopify, we have created a headless solution for
                companies to prepare for the future of e-commerce.
              </p>

              <a href='/' class='button button--dark'>
                <span>
                  <span>Read more</span>
                </span>

                <UpRightArrowIcon />
              </a>
        
          </div>
   
    </section>
  );
});
