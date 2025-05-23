import { UiInput } from '@src/shared/ui/ui-input';
import { FormEvent, useState } from 'react';
import styles from './order-form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/app/providers/store/config.ts';
import { resetCart } from '@src/entities/cart';

export const OrderForm = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state: RootState) => state.cart.count);
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!street.length || !house.length) {
      console.log('At least one field empty');

      return;
    }

    dispatch(resetCart());
  };

  return (
    <>
      {cartItemCount > 0 && (
        <form onSubmit={submitForm} className={styles.orderForm}>
          <div className={styles.formInputs}>
            <label>
              <span>Street</span> <UiInput value={street} onChange={setStreet} placeholder="some street" type="text" />
            </label>
            <label>
              <span>House</span> <UiInput value={house} onChange={setHouse} placeholder="some house" type="text" />
            </label>
          </div>
          <button type="submit" className={styles.orderMealButton}>
            Order
          </button>
        </form>
      )}
    </>
  );
};
