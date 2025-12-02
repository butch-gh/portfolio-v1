declare namespace JSX {
  interface IntrinsicElements {
    'gradio-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { src?: string };
  }
}
