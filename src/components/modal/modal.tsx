import { FC, memo, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Импортируем useDispatch
import { setSelectedIngredient } from '../../services/slices/ingredientsSlice';
import { TModalProps } from './type';
import { ModalUI } from '@ui';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalProps> = memo(({ title, onClose, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(setSelectedIngredient(null)); // Очистка ингредиента
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose, dispatch]);

  const handleClose = () => {
    dispatch(setSelectedIngredient(null)); // Очистка ингредиента
    onClose();
  };

  const isFeedOrProfile = useMatch('/feed|profile');

  const titleStyle = useMemo(
    () =>
      isFeedOrProfile ? 'text_type_digits-default' : 'text_type_main-large',
    [isFeedOrProfile]
  );

  return ReactDOM.createPortal(
    <ModalUI title={title} onClose={handleClose} titleStyle={titleStyle}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
});
