import React, {useState, useCallback} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import christmas from './img/2018/chirstmas';
import throne from './img/2018/throne';
import trinity from './img/2018/trinity';

import './_Photo.scss';

function PhotoGrid() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <section>
      <Tabs defaultActiveKey="trinity" transition={false} id="uncontrolled-tab-example">
        <Tab eventKey="christmas" title="Рождество и Крещение">
          <Gallery photos={christmas} onClick={openLightbox}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={christmas.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Tab>
        <Tab eventKey="throne" title="Престольный праздник">
          <Gallery photos={throne} onClick={openLightbox}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={throne.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Tab>
        <Tab eventKey="trinity" title="Троица">
          <Gallery photos={trinity} onClick={openLightbox}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={trinity.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Tab>
      </Tabs>
    </section>
  );
}

export default PhotoGrid;
