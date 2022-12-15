import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>Parabéns!</h2>
        <p>
          Você respondeu {((correct / questions.length) * 100).toFixed(0)}% de questões corretamente
        </p>
        <button className='close-btn' onClick={closeModal}>
          Jogar novamente
        </button>
      </div>
    </div>
  )
}

export default Modal
