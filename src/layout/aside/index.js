import React, { Fragment } from 'react';
import './_style.scss';
import { aside } from '../../data/about';

function Aside() {
  return (
    <aside>
      <Fragment>
        <figure>
          <img src={aside.images.mleko.src} alt={aside.images.mleko.alt} />
          <figcaption>{aside.images.mleko.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={aside.images.head.src} alt={aside.images.head.alt} />
          <figcaption>{aside.images.head.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={aside.images.pavskiy.src} alt={aside.images.pavskiy.alt} />
          <figcaption>{aside.images.pavskiy.title}</figcaption>
        </figure>
      </Fragment>
      <article>
        <img src={aside.charity_qr.img.src} alt={aside.charity_qr.img.alt} />
      </article>
      <article>
        <img src={aside.charity_erip.img.src} alt={aside.charity_erip.img.alt} />
      </article>
      <article>
        <h4>{aside.library.title}</h4>
        <span>{aside.library.text}</span>
      </article>
    </aside>
  );
}

export default Aside;
