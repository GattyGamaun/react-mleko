import React, { Fragment } from 'react';
import './_style.scss';
import data from '../../data/about.json';

function Aside() {
  return (
    <aside>
      <Fragment>
        <figure>
          <img src={data.aside.images.mleko.src} alt={data.aside.images.mleko.alt} />
          <figcaption>{data.aside.images.mleko.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={data.aside.images.head.src} alt={data.aside.images.head.alt} />
          <figcaption>{data.aside.images.head.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={data.aside.images.pavskiy.src} alt={data.aside.images.pavskiy.alt} />
          <figcaption>{data.aside.images.pavskiy.title}</figcaption>
        </figure>
      </Fragment>
      <article>
        <img src={data.aside.charity_qr.img.src} alt={data.aside.charity_qr.img.alt} />
      </article>
      <article>
        <img src={data.aside.charity_erip.img.src} alt={data.aside.charity_erip.img.alt} />
      </article>
      <article>
        <h4>{data.aside.library.title}</h4>
        <span>{data.aside.library.text}</span>
      </article>
    </aside>
  );
}

export default Aside;
