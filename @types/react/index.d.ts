import * as CSS from 'csstype';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    css?: CSS.Properties;
  }
}
