import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onRequestClose, selectedItem: {urls, alt_description, description} }) => {
    
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className={css.modal}
                overlayClassName={css.backdrop}
            >
                <IconContext.Provider value={{ size: '3em', color: "rgba(253, 45, 126, 0.5)" }}>
                    <button className={css.button} onClick={onRequestClose}>
                        <IoMdCloseCircleOutline />
                    </button>
                </IconContext.Provider>

                <div className={css.container}>
                <img className={css.image} src={urls.regular} alt={alt_description} width="600" />
                <p className={css.desc}>{description}</p>
                </div>
            </Modal>
        </div>
    );
}