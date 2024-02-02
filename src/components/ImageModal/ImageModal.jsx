import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import css from './ImageModal.module.css';

export const ImageModal = ({ isOpen, onAfterOpen, onRequestClose, selectedItem: {urls, alt_description} }) => {
    
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={onAfterOpen}
                onRequestClose={onRequestClose}
                className={css.modal}
                overlayClassName={css.backdrop}
            >
                <img className={css.image} src={urls.regular} alt={alt_description} width="600" />
                <IconContext.Provider value={{ size: '3em', color: "rgba(253, 45, 126, 0.5)" }}>
                    <button className={css.button} onClick={onRequestClose}>
                        <IoMdCloseCircleOutline />
                    </button>
                </IconContext.Provider>
            </Modal>
        </div>
    );
}