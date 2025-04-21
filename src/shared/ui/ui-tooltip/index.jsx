import React, { useState } from 'react';
import styles from './ui-tooltip.module.css';

export const UiTooltip = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.tooltipContainer}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
            {children}
      {visible && <span className={styles.tooltip}>{content}</span>}
        </span>
  );
}
