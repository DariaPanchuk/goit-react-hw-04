import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
    return (
        <div className={css.container}>
            <p className={css.item}>Sorry, something go wrong!</p>
            <p className={css.item}>Please try again!</p>
        </div>
    );
};