import React from 'react';
import './_style.scss';
import { aside } from '../../data/about';

function Aside() {
  return (
    <aside>
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
      <article>
        <figure>
          <img src={aside.capsule.img.src} alt={aside.capsule.img.alt}/>
          <figcaption>{aside.capsule.title}</figcaption>
        </figure>
      </article>
    </aside>
  );
}

export default Aside;
