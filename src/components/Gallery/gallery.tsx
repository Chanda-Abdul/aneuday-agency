import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './gallery.scss?inline';

import DaftPunkImg from '~/media/imagery/daft-punk.webp?jsx';
import CircleSitterImg from '~/media/imagery/circle-sitter.webp?jsx';
import DoodleImg from '~/media/imagery/doodle.webp?jsx';
import BooogieBoardImg from '~/media/imagery/boogie-board.webp?jsx';
import JoggerImg from '~/media/imagery/jogger.webp?jsx';

// export interface GalleryProps {}

export default component$(() => {
  {
    /* <GalleryProps>((props) => { */
  }
  useStylesScoped$(styles);

  return (
    <div class='gallery dark-bkgrnd section--small--padding'>
      <DaftPunkImg class='gallery__img' />

      <CircleSitterImg class='gallery__img' />

      <DoodleImg class='gallery__img' />

      <JoggerImg class='gallery__img' />

      <BooogieBoardImg class='gallery__img' />
    </div>
  );
});
