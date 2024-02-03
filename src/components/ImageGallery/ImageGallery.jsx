import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'


export const ImageGallery = ({ items, onClick }) => {
    return (
        <ul className={css.gallery}>
            {
                items.map(item => (
                    <li key={item.id} className={css.item} onClick={() => onClick(item)}>
                        <ImageCard item={item} />
                    </li>
                ))
            }
        </ul>
    );
};