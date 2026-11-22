// Values injected at build time by webpack's DefinePlugin (see webpack.config.js).
declare const process: {
  env: {
    API_BASE: string;
  };
};

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}
