import styles from './ui-input.module.css';
import { InputHTMLAttributes } from 'react';

type UiInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange: (value: string) => void;
};

export const UiInput = ({ value, onChange, type, placeholder }: UiInputProps) => {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} className={styles.input}/>
  )
}
