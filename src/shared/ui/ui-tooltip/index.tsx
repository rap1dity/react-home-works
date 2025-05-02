import { PropsWithChildren, useState } from 'react';
import styles from './ui-tooltip.module.css';

type UiTooltipProps = PropsWithChildren & {
  content: string;
}

export const UiTooltip = ({ content, children }: UiTooltipProps) => {
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
