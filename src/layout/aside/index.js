import React, { Fragment } from 'react';
import './_style.scss';
import { aside } from '../../data/about';

function Aside() {
  return (
    <aside>
      <Fragment>
        <figure>
          <img src={aside.images.mleko.src} alt={aside.images.mleko.alt}/>
          <figcaption>{aside.images.mleko.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={aside.images.head.src} alt={aside.images.head.alt}/>
          <figcaption>{aside.images.head.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={aside.bells.img.src} alt={aside.bells.img.alt}/>
          <figcaption>{aside.bells.title}</figcaption>
        </figure>
      </Fragment>
      <Fragment>
        <figure>
          <img src={aside.capsule.img.src} alt={aside.capsule.img.alt}/>
          <figcaption>{aside.capsule.title}</figcaption>
        </figure>
      </Fragment>
      <article>
        <img src={aside.images.invite.src}
             alt={aside.images.invite.alt}/>
      </article>
      <article>
        <h4>{aside.thanks.title}</h4>
        <span className='thanks'>{aside.thanks.text}</span>
        <img src={aside.thanks.img.src} alt={aside.thanks.img.alt}/>
      </article>
      <article>
        <h4>{aside.library.title}</h4>
        <span>{aside.library.text}</span>
      </article>
    </aside>
  );
}

export default Aside;
