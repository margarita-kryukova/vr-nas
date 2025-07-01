import React from 'react';
import styles from './index.module.scss';

interface ILabel {
  text: string;
  className?: string;
}

const Label = React.forwardRef<HTMLSpanElement, ILabel>(({ text, className = '' }, ref) => (
  <span ref={ref} className={`${styles.label} ${className}`.trim()}>
    {text}
  </span>
));

Label.displayName = 'Label';

export default Label;
