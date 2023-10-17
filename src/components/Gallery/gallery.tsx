import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './gallery.scss?inline';

import DaftPunkImg from '~/media/imagery/daft-punk.jpeg?jsx';
import CircleSitterImg from '~/media/imagery/circle-sitter.jpeg?jsx';
import DoodleImg from '~/media/imagery/doodle.jpeg?jsx';
import BooogieBoardImg from '~/media/imagery/boogie-board.jpeg?jsx';
import JoggerImg from '~/media/imagery/jogger.jpeg?jsx';

export interface GalleryProps {}

export const Gallery = component$<GalleryProps>((props) => {
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
