"use client";
import React from 'react';
import styles from './modal.module.css';

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e)=>e.stopPropagation()} role="dialog" aria-modal>
        <div className={styles.header}>
          <h3>{title}</h3>
          <button className={styles.close} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
