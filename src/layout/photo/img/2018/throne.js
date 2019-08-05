const throne = [];

const imgObj = (name, width, height) => {
  return {
    src: `http://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/photo/2018/prestol/${name}.jpg`,
    width,
    height,
  }
};

const generate = () => {
  for (let i = 1; i < 28; i++) {
    const image = imgObj(i, 4, 3);
    throne.push(image);
  }
};

generate();

export default throne;
