import React from 'react';
import styles from './ui-tooltip.module.css';

export class UiTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

  setVisible(visibilityStatus) {
    this.setState({ visible: visibilityStatus });
  }

  render() {
    return (
      <span
        className={styles.tooltipContainer}
        onMouseEnter={() => this.setVisible(true)}
        onMouseLeave={() => this.setVisible(false)}
      >
                {this.props.children}
        {this.state.visible && <span className={styles.tooltip}>{this.props.content}</span>}
            </span>
    );
  }
}
