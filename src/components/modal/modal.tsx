import { FC, memo, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useMatch } from 'react-router-dom';
import { TModalProps } from './type';
import { ModalUI } from '@ui';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalProps> = memo(({ title, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  const isFeedOrProfile = useMatch('/feed|profile');

  const titleStyle = useMemo(
    () =>
      isFeedOrProfile ? 'text_type_digits-default' : 'text_type_main-large',
    [isFeedOrProfile]
  );

  return ReactDOM.createPortal(
    <ModalUI title={title} onClose={onClose} titleStyle={titleStyle}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
});
