import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

function Modal({ children }) {
  const [el, setEl] = useState(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, []);

  return ReactDOM.createPortal(children, el);
}
export default Modal;
