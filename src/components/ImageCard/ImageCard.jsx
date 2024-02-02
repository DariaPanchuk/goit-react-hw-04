import css from './ImageCard.module.css';

export const ImageCard = ({ item: { urls, alt_description } }) => {
    return (
        <div>
            <img className={css.item} src={urls.small} alt={alt_description} width="400" />
        </div>
    );
};