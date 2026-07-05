"use client";
import React, { useEffect, useRef } from 'react';
import styles from './modal.module.css';

export default function Modal({ open, title, children, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      // lock background scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // ensure modal content starts at top
      requestAnimationFrame(() => {
        if (modalRef.current) modalRef.current.scrollTop = 0;
      });
      return () => { document.body.style.overflow = prev; };
    }
    return undefined;
  }, [open]);

  if (!open) return null;
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div ref={modalRef} className={styles.modal} onClick={(e)=>e.stopPropagation()} role="dialog" aria-modal>
        <div className={styles.header}>
          <h3>{title}</h3>
          <button className={styles.close} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
