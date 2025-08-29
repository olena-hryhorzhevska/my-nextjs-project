// components/Modal/Modal.tsx

'use client';
import css from '@/components/Modal/Modal.module.css'
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop}>
      <div role="dialog" aria-modal="true" className={css.dialog}>
        <button style={{color: 'deepskyblue'}} className={css.close} onClick={close} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
