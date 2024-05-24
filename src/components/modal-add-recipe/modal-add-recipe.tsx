import React from 'react';
import { ModalClose, ModalContent,  ModalHeader, ModalOverlay} from './modal.styled';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Добавление рецепта</h2>
          <ModalClose onClick={onClose}>&times;</ModalClose>
        </ModalHeader>
        <div className="modal-body">
          {children}
        </div>        
      </ModalContent>
    </ModalOverlay>
  );
};

