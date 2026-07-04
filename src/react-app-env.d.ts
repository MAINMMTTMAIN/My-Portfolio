/// <reference types="react-scripts" />
declare module '*.mp4' {
  const src: string;
  export default src;
}
/// <reference types="react-scripts" />

// Declaration for SCSS files
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}