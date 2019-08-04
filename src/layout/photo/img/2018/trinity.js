const trinity = [];

const imgObj = (name, width, height) => {
  return {
    src: `http://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/photo/2018/troitsa/${name}.jpg`,
    width,
    height,
  }
};

const generate = () => {
  for (let i = 1; i < 14; i++) {
    const image = imgObj(i, 4, 3);
    trinity.push(image);
  }
};

generate();

export default trinity;
