import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';
import UpRightArrowIcon from '~/media/icons/up-right-arrow.svg?jsx';
import styles from './button.scss?inline';
import gsap from 'gsap';

interface ButtonProps {
  text?: string;
  icon?: number;
  linkTo?: string;
  styles?: string;
}

export const Button = component$<ButtonProps>((props) => {
  useStylesScoped$(styles);

  useVisibleTask$(() => {
    /*  Only runs in the client, for GSAP animations */
    const button = document.getElementById('button-reveal');
    const textContainer = document.getElementById('text-container');
    const icon = document.getElementById('icon');

    const tl = gsap.timeline({
      defaults: { autoAlpha: 0 },
    });

    tl.from(button, {
      delay: 2.25,
      scale: 0,
      y: -8,
      duration: 0.75,
    })
      .from(textContainer, { delay: 0.5, duration: 0.75, y: -25 }, '>')

      .from(
        icon,
        {
          duration: 0.5,
          y: 25,
        },
        '>'
      );
  });

  return (
    <a
      href={props.linkTo}
      class={props.styles}
      onClick$={() => console.log('click')}
      id='button-reveal'
    >
      <div id='text-container'>
        <span id='text'>{props.text}</span>
      </div>
      <UpRightArrowIcon id='icon' />
    </a>
  );
});
