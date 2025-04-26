import * as styles from './ui-input.module.css';

export const UiInput = ({ value, onChange, type, placeholder }) => {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} className={styles.input}/>
  )
}
